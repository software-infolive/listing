// models/userModel.js
const db = require('../config/db');

const User = {
  getAll: (callback) => {
    const sql = 'SELECT id, full_name, email, phone, role, avatar, bio, created_at FROM users';
    db.query(sql, callback);
  },

  getById: (id, callback) => {
    const sql = 'SELECT id, full_name, email, phone, role, avatar, bio, created_at FROM users WHERE id = ?';
    db.query(sql, [id], callback);
  },

  getByEmail: (email, callback) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], callback);
  },

  create: (data, callback) => {
    const sql = 'INSERT INTO users (full_name, email, password, phone, role) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [data.fullName || data.full_name, data.email, data.password, data.phone, data.role || 'user'], callback);
  },

  update: (id, data, callback) => {
    const sql = 'UPDATE users SET full_name = ?, phone = ?, avatar = ?, bio = ? WHERE id = ?';
    db.query(sql, [data.full_name, data.phone, data.avatar, data.bio, id], callback);
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = User;

