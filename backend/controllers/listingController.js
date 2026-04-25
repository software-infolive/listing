const listingService = require('../services/listingService');

exports.getListings = (req, res) => {
  listingService.getAllListings(req.query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getListingBySlug = (req, res) => {
  listingService.getListingDetails(req.params.slug, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!result) return res.status(404).json({ message: 'Listing not found' });
    res.json(result);
  });
};

exports.createListing = (req, res) => {
  listingService.createListing(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(result);
  });
};
