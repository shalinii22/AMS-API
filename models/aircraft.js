const mongoose = require("mongoose");

const AircraftSchema = new mongoose.Schema({
    name: {type:String, required:true},
    uniqueId: {type:String, required:true},
    manufacturerName: {type:String, required:true},
    weight: {type:Number},
    passengerCapacity: {type:Number},
    fuelCapacity: {type:Number},
    airlinesCode: {type:String, required:true}
});

const Aircraft = mongoose.model('Aircraft', AircraftSchema);
module.exports = Aircraft;
