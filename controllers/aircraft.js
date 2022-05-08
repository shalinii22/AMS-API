const Aircraft = require('../models/aircraft');

const newAircraft = (req, res) => {
    Aircraft.findOne({ uniqueId: req.body.uniqueId }, (err, data) => {
        if (!data) {
            const newAircraft = new Aircraft({
                name: req.body.name,
                uniqueId: req.body.uniqueId,
                manufacturerName: req.body.manufacturerName,
                weight: req.body.weight,
                passengerCapacity: req.body.passengerCapacity,
                fuelCapacity: req.body.fuelCapacity,
                airlinesCode: req.body.airlinesCode
            })

            newAircraft.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"Aircraft already exists"});
        }
    })    
};

const getAircraftByAirlinesCode = (req, res) => {
    let airlinesCode = req.params.airlinesCode;
    Aircraft.find({airlinesCode: airlinesCode}, (err, data) => {
    if(err || !data) {
        return res.json({message: "No Aircraft added to your airlines."});
    }
    else return res.json(data);
    });
};

const deleteAircraft = (req, res) => {
    let aircraftUniqueId = req.params.uniqueId;

    Aircraft.deleteOne({uniqueId:aircraftUniqueId}, (err, data) => {
        if( data.deletedCount == 0) return res.json({message: "Aircraft doesn't exist."});
        else if (err) return res.json(`Something went wrong, please try again. ${err}`);
        else return res.json({message: "Aircraft deleted."});
    });
};

module.exports = {
    newAircraft,
    getAircraftByAirlinesCode,
    deleteAircraft
};
