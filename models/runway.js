const mongoose = require("mongoose");

const RunwaySchema = new mongoose.Schema({
    code: {type:String, required:true},
    width: {type:Number, required:true},
    length: {type:Number, required:true},
    frequencyOfUsage: {type:Number, required:true},
    airportCode: {type:String, required:true}
});

const Runway = mongoose.model('Runway', RunwaySchema);
module.exports = Runway;
