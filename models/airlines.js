const mongoose = require("mongoose");

const AirlinesSchema = new mongoose.Schema({
    name: {type:String, required:true},
    code: {type:String, required:true},
    origin: {type:String, required:true},
    country: {type:String, required:true},
    allowedAirports: [{ code: String }]
});

const Airlines = mongoose.model('Airlines', AirlinesSchema);
module.exports = Airlines;
