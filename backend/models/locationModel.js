// models/locationModel.js
const db = require('../config/db');

const Location = {
  // States
  getAllStates: (callback) => {
    const sql = 'SELECT * FROM states ORDER BY name ASC';
    db.query(sql, callback);
  },

  getStateBySlug: (slug, callback) => {
    const sql = 'SELECT * FROM states WHERE slug = ?';
    db.query(sql, [slug], callback);
  },

  // Districts
  getDistrictsByState: (stateId, callback) => {
    const sql = 'SELECT * FROM districts WHERE state_id = ? ORDER BY name ASC';
    db.query(sql, [stateId], callback);
  },

  // Cities
  getCitiesByDistrict: (districtId, callback) => {
    const sql = 'SELECT * FROM cities WHERE district_id = ? ORDER BY name ASC';
    db.query(sql, [districtId], callback);
  },

  getCityBySlug: (slug, callback) => {
    const sql = 'SELECT * FROM cities WHERE slug = ?';
    db.query(sql, [slug], callback);
  },

  // Search/Global
  getAllCities: (callback) => {
    const sql = `
      SELECT c.*, d.name as district_name, s.name as state_name 
      FROM cities c
      JOIN districts d ON c.district_id = d.id
      JOIN states s ON d.state_id = s.id
      ORDER BY c.name ASC
    `;
    db.query(sql, callback);
  }
};

module.exports = Location;
