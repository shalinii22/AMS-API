const express = require('express');
const router  = express.Router(); 
 
const aircraftController = require('../controllers/aircraft'); 

router.post('/api/aircraft', aircraftController.newAircraft); 
router.get('/api/aircraft/:airlinesCode', aircraftController.getAircraftByAirlinesCode);
router.delete('/api/aircraft/delete/:uniqueId', aircraftController.deleteAircraft); 

module.exports = router;