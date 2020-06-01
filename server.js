require("dotenv").config();
const express = require("express");
const router = require('express').Router()
const path = require('path')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require("mongoose");
const session = require('express-session');
const dbConnection = require('./connection');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');

const user = require("./routes/user");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT;

app.use(morgan('dev'))
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

mongoose.Promise = global.Promise

app.use(
  session({
      secret: 'special-harkening', 
      store: new MongoStore({ mongooseConnection: dbConnection }),
      resave: false,
      saveUninitialized: false 
  })
)

app.use(passport.initialize())
app.use(passport.session()) 
app.use('/user', user)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

mongoose.connect(process.env.MONGODB_URI);
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
