const express = require('express');
const { getOccupiedERBeds, dischargePatient} = require('../controllers/bed-controller.js');
const router = express.Router();

router.get('/er/occupied', getOccupiedERBeds);
router.put('/free/:bedID', dischargePatient);

module.exports = router;