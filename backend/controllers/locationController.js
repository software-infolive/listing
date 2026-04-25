const locationService = require('../services/locationService');

exports.getStates = (req, res) => {
  locationService.getStates((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getDistricts = (req, res) => {
  locationService.getDistricts(req.params.stateId, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getCities = (req, res) => {
  locationService.getCities(req.params.districtId, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getAllCities = (req, res) => {
  locationService.getAllCities((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
