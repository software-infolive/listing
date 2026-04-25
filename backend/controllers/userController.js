// controllers/userController.js
const User = require('../models/userModel');

exports.getUsers = (req, res) => {
  User.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  User.create({ name, email }, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'User added successfully', id: results.insertId });
  });
};
