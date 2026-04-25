const contactService = require('../services/contactService');

exports.submitInquiry = (req, res) => {
  contactService.submitInquiry(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Inquiry submitted successfully', data: result });
  });
};

exports.getInquiries = (req, res) => {
  contactService.getAllInquiries((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
