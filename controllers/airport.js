const Airport = require('../models/airport');

const newAirport = (req, res) => {
    Airport.findOne({ name: req.body.name }, (err, data) => {
        if (!data) {
            const newAirport = new Airport({
                name:req.body.name,
                code: req.body.code,
                location: req.body.location,
                country: req.body.country,
            })

            newAirport.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })
        //if there's an error or the Airport is in db, return a message         
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"Airport already exists"});
        }
    })    
};

const getAllAirports = (req, res) => {
    Airport.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

const getAirportByCode = (req, res) => {
    let code = req.params.code;

    Airport.findOne({code:code}, (err, data) => {
    if(err || !data) {
        return res.json({message: "Airport doesn't exist."});
    }
    else return res.json(data);
    });
};

/*
//POST 1 tea comment
const newComment = (req, res) => {
  let name = req.params.name; //get the tea to add the comment in
  let newComment = req.body.comment; //get the comment
  //create a comment object to push
  const comment = {
      text: newComment,
      date: new Date()
  }
  //find the tea object
  Tea.findOne({name:name}, (err, data) => {
      if(err || !data || !newComment) {
          return res.json({message: "Tea doesn't exist."});
      }
      else {
          //add comment to comments array of the tea object
          data.comments.push(comment);
          //save changes to db
          data.save(err => {
              if (err) { 
              return res.json({message: "Comment failed to add.", error:err});
              }
              return res.json(data);
          })  
      } 
  })
};

//DELETE 1 tea
const deleteOneTea = (req, res) => {
    let name = req.params.name; // get the name of tea to delete

    Tea.deleteOne({name:name}, (err, data) => {
    //if there's nothing to delete return a message
    if( data.deletedCount == 0) return res.json({message: "Tea doesn't exist."});
    //else if there's an error, return the err message
    else if (err) return res.json(`Something went wrong, please try again. ${err}`);
    //else, return the success message
    else return res.json({message: "Tea deleted."});
    });
};

//DELETE teas
const deleteAllTea = (req, res) => {
    Tea.deleteMany({}, err => {
        if(err) {
          return res.json({message: "Complete delete failed"});
        }
        return res.json({message: "Complete delete successful"});
    })
};

*/

module.exports = {
    newAirport,
    getAllAirports,
    getAirportByCode
};
