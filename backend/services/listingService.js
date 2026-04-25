const Listing = require('../models/listingModel');

const listingService = {
  getAllListings: (filters, callback) => {
    Listing.getAll(filters, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  getListingDetails: (slug, callback) => {
    Listing.getBySlug(slug, (err, results) => {
      if (err) return callback(err);
      if (results.length === 0) return callback(null, null);

      const listing = results[0];
      
      // Increment views asynchronously
      Listing.incrementViews(listing.id, () => {});

      // Fetch images, specs, and features
      Listing.getImages(listing.id, (err, images) => {
        if (err) return callback(err);
        listing.images = images.map(img => img.image_url);

        Listing.getSpecifications(listing.id, (err, specs) => {
          if (err) return callback(err);
          listing.specifications = {};
          specs.forEach(s => {
            listing.specifications[s.spec_key] = s.spec_value;
          });

          Listing.getFeatures(listing.id, (err, features) => {
            if (err) return callback(err);
            listing.features = features.map(f => f.feature);
            callback(null, listing);
          });
        });
      });
    });
  },

  createListing: (data, callback) => {
    Listing.create(data, (err, result) => {
      if (err) return callback(err);
      const listingId = result.insertId;

      // Add related data
      Listing.addImages(listingId, data.images, (err) => {
        if (err) console.error('Error adding images:', err);
        
        Listing.addSpecifications(listingId, data.specifications, (err) => {
          if (err) console.error('Error adding specs:', err);

          Listing.addFeatures(listingId, data.features, (err) => {
            if (err) console.error('Error adding features:', err);
            callback(null, { id: listingId, ...data });
          });
        });
      });
    });
  }
};

module.exports = listingService;
