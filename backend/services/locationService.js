const Location = require('../models/locationModel');

const locationService = {
  getStates: (callback) => {
    Location.getAllStates((err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  getDistricts: (stateId, callback) => {
    Location.getDistrictsByState(stateId, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  getCities: (districtId, callback) => {
    Location.getCitiesByDistrict(districtId, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  getAllCities: (callback) => {
    Location.getAllCities((err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }
};

module.exports = locationService;
