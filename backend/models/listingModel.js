// models/listingModel.js
const db = require('../config/db');

const Listing = {
  getAll: (filters, callback) => {
    let sql = `
      SELECT l.*, c.name as category_name, ci.name as city_name, u.full_name as seller_name 
      FROM listings l
      LEFT JOIN categories c ON l.category_id = c.id
      LEFT JOIN cities ci ON l.location_id = ci.id
      LEFT JOIN users u ON l.seller_id = u.id
      WHERE 1=1
    `;
    const params = [];

    if (filters.category) {
      sql += ' AND (c.slug = ? OR c.name = ?)';
      params.push(filters.category, filters.category);
    }
    if (filters.city) {
      sql += ' AND (ci.slug = ? OR ci.name = ?)';
      params.push(filters.city, filters.city);
    }
    if (filters.type) {
      sql += ' AND l.type = ?';
      params.push(filters.type);
    }
    if (filters.search) {
      sql += ' AND (l.title LIKE ? OR l.description LIKE ?)';
      params.push(`%${filters.search}%`, `%${filters.search}%`);
    }

    sql += ' ORDER BY l.date_posted DESC';
    db.query(sql, params, callback);
  },

  getBySlug: (slug, callback) => {
    const sql = `
      SELECT l.*, c.name as category_name, ci.name as city_name, 
             u.full_name as seller_name, u.email as seller_email, u.phone as seller_phone
      FROM listings l
      LEFT JOIN categories c ON l.category_id = c.id
      LEFT JOIN cities ci ON l.location_id = ci.id
      LEFT JOIN users u ON l.seller_id = u.id
      WHERE l.slug = ?
    `;
    db.query(sql, [slug], callback);
  },

  getImages: (listingId, callback) => {
    const sql = 'SELECT * FROM listing_images WHERE listing_id = ?';
    db.query(sql, [listingId], callback);
  },

  getSpecifications: (listingId, callback) => {
    const sql = 'SELECT * FROM listing_specifications WHERE listing_id = ?';
    db.query(sql, [listingId], callback);
  },

  getFeatures: (listingId, callback) => {
    const sql = 'SELECT * FROM listing_features WHERE listing_id = ?';
    db.query(sql, [listingId], callback);
  },

  create: (data, callback) => {
    const sql = `
      INSERT INTO listings (title, slug, category_id, location_id, price, type, description, \`condition\`, brand, model, seller_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(sql, [
      data.title, data.slug, data.category_id, data.location_id, 
      data.price, data.type, data.description, data.condition, 
      data.brand, data.model, data.seller_id
    ], callback);
  },

  addImages: (listingId, images, callback) => {
    if (!images || images.length === 0) return callback(null);
    const sql = 'INSERT INTO listing_images (listing_id, image_url) VALUES ?';
    const values = images.map(img => [listingId, img]);
    db.query(sql, [values], callback);
  },

  addSpecifications: (listingId, specs, callback) => {
    if (!specs || Object.keys(specs).length === 0) return callback(null);
    const sql = 'INSERT INTO listing_specifications (listing_id, spec_key, spec_value) VALUES ?';
    const values = Object.entries(specs).map(([key, value]) => [listingId, key, value]);
    db.query(sql, [values], callback);
  },

  addFeatures: (listingId, features, callback) => {
    if (!features || features.length === 0) return callback(null);
    const sql = 'INSERT INTO listing_features (listing_id, feature) VALUES ?';
    const values = features.map(f => [listingId, f]);
    db.query(sql, [values], callback);
  },

  incrementViews: (id, callback) => {
    const sql = 'UPDATE listings SET views = views + 1 WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = Listing;
