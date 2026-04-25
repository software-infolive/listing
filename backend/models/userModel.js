// models/userModel.js
const db = require('../config/db');

const User = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, callback);
  },

  create: (data, callback) => {
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [data.name, data.email], callback);
  }
};

module.exports = User;
