var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//linking controllers to the server
var route1 = require("./controllers/crud-controller.js");
var route2 = require("./controllers/dom-controller.js");
app.use(route1);
app.use(route2);
app.use(express.static("public"))

db.sequelize.sync({force:true}).then(function(){ //only use force true for testing force:true will drop and replace the database
    app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  });