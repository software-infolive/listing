// models/blogModel.js
const db = require('../config/db');

const Blog = {
  getAll: (category, callback) => {
    let sql = 'SELECT * FROM blogs WHERE 1=1';
    const params = [];
    
    if (category && category !== 'all') {
      sql += ' AND (category = ? OR slug = ?)';
      params.push(category, category);
    }
    
    sql += ' ORDER BY date DESC';
    db.query(sql, params, callback);
  },

  getBySlug: (slug, callback) => {
    const sql = 'SELECT * FROM blogs WHERE slug = ?';
    db.query(sql, [slug], callback);
  },

  getTags: (blogId, callback) => {
    const sql = 'SELECT tag FROM blog_tags WHERE blog_id = ?';
    db.query(sql, [blogId], callback);
  },

  create: (data, callback) => {
    const sql = `
      INSERT INTO blogs (slug, title, excerpt, content, author, author_bio, \`date\`, category, read_time, image) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(sql, [
      data.slug, data.title, data.excerpt, data.content, 
      data.author, data.author_bio, data.date, data.category, 
      data.read_time, data.image
    ], callback);
  },

  addTags: (blogId, tags, callback) => {
    if (!tags || tags.length === 0) return callback(null);
    const sql = 'INSERT INTO blog_tags (blog_id, tag) VALUES ?';
    const values = tags.map(tag => [blogId, tag]);
    db.query(sql, [values], callback);
  },

  incrementViews: (id, callback) => {
    const sql = 'UPDATE blogs SET views = views + 1 WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = Blog;
