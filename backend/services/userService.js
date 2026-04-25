const User = require('../models/userModel');

const userService = {
  getAllUsers: (callback) => {
    User.getAll((err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  createUser: (data, callback) => {
    if (!data.name || !data.email) {
      return callback(new Error('Name and Email are required.'));
    }

    User.create(data, (err, result) => {
      if (err) return callback(err);
      callback(null, { id: result.insertId, ...data });
    });
  }
};

module.exports = userService;
