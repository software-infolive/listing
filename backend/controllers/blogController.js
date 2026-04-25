const blogService = require('../services/blogService');

exports.getBlogs = (req, res) => {
  blogService.getAllBlogs(req.query.category, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getBlogBySlug = (req, res) => {
  blogService.getBlogDetails(req.params.slug, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!result) return res.status(404).json({ message: 'Blog post not found' });
    res.json(result);
  });
};

exports.createBlog = (req, res) => {
  blogService.createBlog(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(result);
  });
};
