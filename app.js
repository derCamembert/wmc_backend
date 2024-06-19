var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

//TODO DB
const {connectDB} = require("./src/db/util.service.db");
const {initializeDB} = require("./src/db/Cars.service.db");
//TODO Datenbank: connectDB & isRunningDB & initializeDB
connectDB();
initializeDB()
    .catch(error => console.log("INIT ERROR:", error));

//TODO CORS
//Cors erstellen - WICHTIG : Vor den Routen erstellen
var cors = require('cors');

//Cors Options einrichten - WICHTIG : Vor den Routen erstellen
const corsOptions = {
    origin: '*', //Zugriff aller IPs erlauben
};

app.use(cors(corsOptions));

//TODO MEINE Routen
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carRouter = require('./routes/cars');


//******Middleware


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//TODO Meine ROUTEN in der Middleware anmelden
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cars', carRouter);



module.exports = app;
