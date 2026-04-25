const newsletterService = require('../services/newsletterService');

exports.subscribe = (req, res) => {
  newsletterService.subscribe(req.body.email, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Subscribed successfully', data: result });
  });
};

exports.getSubscribers = (req, res) => {
  newsletterService.getSubscribers((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
