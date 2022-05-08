const mongoose = require("mongoose");

const AirportSchema = new mongoose.Schema({
    name: {type:String, required:true},
    code: {type:String, required:true},
    location: {type:String, required:true},
    country: {type:String, required:true},
});

const Airport = mongoose.model('Airport', AirportSchema);
module.exports = Airport;
