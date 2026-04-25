const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/submit', contactController.submitInquiry);
router.get('/all', contactController.getInquiries);

module.exports = router;
