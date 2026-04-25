const User = require('../models/userModel');

const userService = {
  getAllUsers: (callback) => {
    User.getAll((err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  getUserById: (id, callback) => {
    User.getById(id, (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    });
  },

  createUser: (data, callback) => {
    if (!data.email || !data.password) {
      return callback(new Error('Email and Password are required.'));
    }

    User.create(data, (err, result) => {
      if (err) return callback(err);
      callback(null, { id: result.insertId, ...data });
    });
  },

  updateUser: (id, data, callback) => {
    User.update(id, data, (err, result) => {
      if (err) return callback(err);
      callback(null, { id, ...data });
    });
  },

  deleteUser: (id, callback) => {
    User.delete(id, (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  }
};

module.exports = userService;

