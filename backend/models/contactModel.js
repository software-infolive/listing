// models/contactModel.js
const db = require('../config/db');

const Contact = {
  create: (data, callback) => {
    const sql = 'INSERT INTO contacts (name, email, phone, message, listing_id) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [data.name, data.email, data.phone, data.message, data.listing_id || null], callback);
  },

  getAll: (callback) => {
    const sql = 'SELECT * FROM contacts ORDER BY created_at DESC';
    db.query(sql, callback);
  }
};

module.exports = Contact;
