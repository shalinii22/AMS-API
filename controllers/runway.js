const Runway = require('../models/runway');

const newRunway = (req, res) => {
    Runway.findOne({ code: req.body.code }, (err, data) => {
        if (!data) {
            const newRunway = new Runway({
                code: req.body.code,
                width: req.body.width,
                length: req.body.length,
                frequencyOfUsage: req.body.frequencyOfUsage,
                airportCode: req.body.airportCode,
            })

            newRunway.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"Runway already exists"});
        }
    })    
};

const getRunwayByAirportCode = (req, res) => {
    let airportCode = req.params.airportCode;
    Runway.find({airportCode: airportCode}, (err, data) => {
    if(err || !data) {
        return res.json({message: "No Aircraft added to your airport."});
    }
    else return res.json(data);
    });
};

module.exports = {
    newRunway,
    getRunwayByAirportCode,
};