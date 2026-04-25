const Category = require('../models/categoryModel');

const categoryService = {
  getAllCategories: (callback) => {
    Category.getAll((err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  getCategoryBySlug: (slug, callback) => {
    Category.getBySlug(slug, (err, result) => {
      if (err) return callback(err);
      callback(null, result[0]);
    });
  },

  createCategory: (data, callback) => {
    if (!data.name || !data.slug) {
      return callback(new Error('Name and Slug are required.'));
    }
    Category.create(data, (err, result) => {
      if (err) return callback(err);
      callback(null, { id: result.insertId, ...data });
    });
  }
};

module.exports = categoryService;
