const Airlines = require('../models/airlines');

const newAirlines = (req, res) => {
    Airlines.findOne({ code: req.body.code }, (err, data) => {
        if (!data) {
            const newAirlines = new Airlines({
                name: req.body.name,
                code: req.body.code,
                origin: req.body.origin,
                country: req.body.country,
                allowedAirports: req.body.allowedAirports
            })

            newAirlines.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"Airlines already exists"});
        }
    })    
};

const getAllAirlines = (req, res) => {
    Airlines.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

const getAirlinesByAirportCode = (req, res) => {
    let airportCode = req.params.airportCode;
    Airlines.find(({allowedAirports:{$elemMatch:{code: airportCode}}}), (err, data) => {
    if(err || !data) {
        return res.json({message: "No Airlines added to your airport."});
    }
    else return res.json(data);
    });
};

const addAirlineToAirport = (req, res) => {
  let airlinescode = req.params.airlinesCode;
  let airportCode = req.body.airportCode;
  const airport = {
      code: airportCode,
  };
  Airlines.findOne({code: airlinescode}, (err, data) => {
      if(err || !data || !airportCode) {
          return res.json({message: "Airlines doesn't exist."});
      }
      else {
          data.allowedAirports.push(airport);
          data.save(err => {
              if (err) { 
              return res.json({message: "Failed to add airlines to airport.", error:err});
              }
              return res.json(data);
          })  
      } 
  })
};

const removeAirlinesFromAirport = (req, res) => {
    let airlinescode = req.params.airlinesCode;
    let airportCode = req.body.airportCode;
    const airportToBeRemoved = {
        code: airportCode,
    };
    Airlines.findOne({code: airlinescode}, (err, data) => {
        if(err || !data || !airportCode) {
            return res.json({message: "Airlines doesn't exist."});
        }
        else {
            data.allowedAirports.splice(data.allowedAirports.findIndex(airport => airport.code === airportToBeRemoved.code) , 1)
            data.save(err => {
                if (err) { 
                return res.json({message: "Failed to add airlines to airport.", error:err});
                }
                return res.json(data);
            })  
        } 
    })
  };

module.exports = {
    newAirlines,
    getAllAirlines,
    getAirlinesByAirportCode,
    addAirlineToAirport,
    removeAirlinesFromAirport
};
