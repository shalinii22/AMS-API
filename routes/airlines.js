const express = require('express');
const router  = express.Router(); 

const airlinesController = require('../controllers/airlines'); 
router.post('/api/airlines', airlinesController.newAirlines); 
router.get('/api/airlines', airlinesController.getAllAirlines);
router.get('/api/airlines/:airportCode', airlinesController.getAirlinesByAirportCode);
router.post('/api/airlines/:airlinesCode', airlinesController.addAirlineToAirport); 
router.post('/api/airlines/remove/airport/:airlinesCode', airlinesController.removeAirlinesFromAirport); 
module.exports = router;
