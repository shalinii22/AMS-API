const User = require('../models/user');

const newUser = (req, res) => {
    User.findOne({ userName: req.body.userName }, (err, data) => {
        if (!data) {
            const newUser = new User({
                name: req.body.name,
                userName: req.body.userName,
                password: req.body.password,
                email: req.body.email,
                airportCode: req.body.airportCode
            })

            newUser.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"User already exists"});
        }
    })    
};

const assignUserToAirport = (req, res) => {
    let airportCode = req.params.airportCode;
    let userName = req.body.userName;
    User.findOne({userName: userName}, (err, data) => {
        if(err || !data || !airportCode) {
            return res.json({message: "User doesn't exist."});
        }
        else {
            data.airportCode = airportCode;
            data.save(err => {
                if (err) { 
                return res.json({message: "Failed to add user to airport.", error:err});
                }
                return res.json(data);
            })  
        } 
    })
  };

  module.exports = {
    newUser,
    assignUserToAirport,
};