const express = require('express');
const router  = express.Router(); 

const userController = require('../controllers/user'); 
router.post('/api/user', userController.newUser);
router.post('/api/user/:airportCode', userController.assignUserToAirport);
module.exports = router;
