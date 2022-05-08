const express = require("express");
const helmet = require('helmet');
const compression = require('compression');
const airportRoutes = require('./routes/airport');
const airlineRoutes = require('./routes/airlines');
const aircraftRoutes = require('./routes/aircraft');
const runwayRoutes = require('./routes/runway');
const userRoutes = require('./routes/user');
require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();

app.use(express.json());

app.use(helmet());
app.use(compression());

app.use(express.static('./view'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/view/index.html');
});

app.use('/', airportRoutes);
app.use('/', airlineRoutes);
app.use('/', aircraftRoutes);
app.use('/', runwayRoutes);
app.use('/', userRoutes);

const listener = app.listen(process.env.PORT || 8080, () => {
    console.log('AirportManagementSystem API is listening on port ' + listener.address().port)
});

mongoose.connect(
    process.env.MONGODB_URI,
    {
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
      replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    },
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);



