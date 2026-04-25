const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

router.get('/states', locationController.getStates);
router.get('/districts/:stateId', locationController.getDistricts);
router.get('/cities/:districtId', locationController.getCities);
router.get('/cities', locationController.getAllCities);

module.exports = router;
