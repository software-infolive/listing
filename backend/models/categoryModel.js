// models/categoryModel.js
const db = require('../config/db');

const Category = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM categories ORDER BY name ASC';
    db.query(sql, callback);
  },

  getById: (id, callback) => {
    const sql = 'SELECT * FROM categories WHERE id = ?';
    db.query(sql, [id], callback);
  },

  getBySlug: (slug, callback) => {
    const sql = 'SELECT * FROM categories WHERE slug = ?';
    db.query(sql, [slug], callback);
  },

  create: (data, callback) => {
    const sql = 'INSERT INTO categories (name, slug, icon, color) VALUES (?, ?, ?, ?)';
    db.query(sql, [data.name, data.slug, data.icon, data.color], callback);
  },

  update: (id, data, callback) => {
    const sql = 'UPDATE categories SET name = ?, slug = ?, icon = ?, color = ? WHERE id = ?';
    db.query(sql, [data.name, data.slug, data.icon, data.color, id], callback);
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM categories WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = Category;
