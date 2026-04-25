const categoryService = require('../services/categoryService');

exports.getCategories = (req, res) => {
  categoryService.getAllCategories((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getCategoryBySlug = (req, res) => {
  categoryService.getCategoryBySlug(req.params.slug, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!result) return res.status(404).json({ message: 'Category not found' });
    res.json(result);
  });
};

exports.createCategory = (req, res) => {
  categoryService.createCategory(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(result);
  });
};
