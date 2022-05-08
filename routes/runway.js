const express = require('express');
const router  = express.Router(); 

const runwayController = require('../controllers/runway'); 
router.post('/api/runway', runwayController.newRunway);
router.get('/api/runway/:airportCode', runwayController.getRunwayByAirportCode);
module.exports = router;
