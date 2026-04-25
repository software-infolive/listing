const Blog = require('../models/blogModel');

const blogService = {
  getAllBlogs: (category, callback) => {
    Blog.getAll(category, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  getBlogDetails: (slug, callback) => {
    Blog.getBySlug(slug, (err, results) => {
      if (err) return callback(err);
      if (results.length === 0) return callback(null, null);

      const blog = results[0];
      
      // Increment views
      Blog.incrementViews(blog.id, () => {});

      Blog.getTags(blog.id, (err, tags) => {
        if (err) return callback(err);
        blog.tags = tags.map(t => t.tag);
        callback(null, blog);
      });
    });
  },

  createBlog: (data, callback) => {
    Blog.create(data, (err, result) => {
      if (err) return callback(err);
      const blogId = result.insertId;

      Blog.addTags(blogId, data.tags, (err) => {
        if (err) console.error('Error adding tags:', err);
        callback(null, { id: blogId, ...data });
      });
    });
  }
};

module.exports = blogService;
