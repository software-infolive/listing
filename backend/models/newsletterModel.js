// models/newsletterModel.js
const db = require('../config/db');

const Newsletter = {
  subscribe: (email, callback) => {
    const sql = 'INSERT INTO newsletter_subscriptions (email) VALUES (?)';
    db.query(sql, [email], callback);
  },

  getAll: (callback) => {
    const sql = 'SELECT * FROM newsletter_subscriptions ORDER BY created_at DESC';
    db.query(sql, callback);
  }
};

module.exports = Newsletter;
