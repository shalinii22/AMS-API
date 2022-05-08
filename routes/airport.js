const express = require('express');
const router  = express.Router(); 

const airportController = require('../controllers/airport'); 
router.post('/api/airport', airportController.newAirport); 
router.get('/api/airports', airportController.getAllAirports);
router.get('/api/airport/:code', airportController.getAirportByCode);
module.exports = router;
