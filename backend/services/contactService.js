const Contact = require('../models/contactModel');

const contactService = {
  submitInquiry: (data, callback) => {
    if (!data.name || !data.email || !data.message) {
      return callback(new Error('Name, Email and Message are required.'));
    }
    Contact.create(data, (err, result) => {
      if (err) return callback(err);
      callback(null, { id: result.insertId, ...data });
    });
  },

  getAllInquiries: (callback) => {
    Contact.getAll((err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }
};

module.exports = contactService;
