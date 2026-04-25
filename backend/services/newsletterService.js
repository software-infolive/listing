const Newsletter = require('../models/newsletterModel');

const newsletterService = {
  subscribe: (email, callback) => {
    if (!email) {
      return callback(new Error('Email is required.'));
    }
    Newsletter.subscribe(email, (err, result) => {
      if (err) return callback(err);
      callback(null, { id: result.insertId, email });
    });
  },

  getSubscribers: (callback) => {
    Newsletter.getAll((err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }
};

module.exports = newsletterService;
