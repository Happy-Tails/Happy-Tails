// Node Dependencies
var express = require('express');
var crudRouter = express.Router();
var db = require('../models'); // Pulls out the Models

//Do we need to put a connection.connection function here?

// POST/API Routes for Database changes
// ----------------------------------------------------
crudRouter.post("/user/signup",function(req,res){
  db.Login.create({
      "email": req.body.email,
      "password":req.body.password,
      "firstName":req.body.firstName,
      "lastName":req.body.lastName,
      "pupsName":req.body.pupName
  }).then(() =>{
      res.redirect("/")
  }).catch((err)=>{
      res.status(500).json({
          error:err.message
      })
  })
})
crudRouter.get("/user/login/:user/:password",function(req,res){  
  db.Login.findOne({
      where:{
          "email": req.params.user,
          "password": req.params.password
      }
  }).then((data)=>{
    if(data.length==0){
      console.log("no data")
      res.sendStatus(400);
    }
    else{
      console.log(data);
      res.json(data)
    }
    }).catch((err)=>{
      res.status(500).json({
        error: err.message
      })
    })
})

//CRUD

//caling our createTrail function


function createTrail() {
    console.log("Adding your new trail...\n");
    db.Trails.create({
        name: "trail name",
        description: "trail description",
        length: "trail length"
    }).then(function(err, res) {
        console.log(res.affectedRows + " trail added!\n");
        // Call updateTrail AFTER the INSERT completes
        updateTrail();
      });
    //Need to put in correct table name
      
  
    // logs the actual query being run
    //console.log(query.sql);
  }
  
  function updateTrail() {
    console.log("Updating your saved trails...\n");
    db.Trails.update({

    }).then(function(err, res) {
        console.log(res.affectedRows + " trails updated!\n");
        // Call deleteTrail AFTER the UPDATE completes
        deleteTrail();
      });
    //Need to put in the correct table name
      
      
    
  
    // logs the actual query being run
    //console.log(query.sql);
  }
  
  function deleteTrail() {
    console.log("Deleting selected trail...\n");
    db.Trails.destroy({
      where:{
        id: req.params.id
      }
    }).then(function(err, res) {
        console.log(res.affectedRows + " trail(s) deleted!\n");
        // Call readTrails AFTER the DELETE completes
        readTrails();
      });
    //Need to add correct tableName
      
    
  }
  
  function readTrails() {
    console.log("Selecting all trails...\n");
    db.Trails.findAll().then(function(res,err){
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }
createTrail();  
// ----------------------------------------------------

// Export routes
module.exports = crudRouter;