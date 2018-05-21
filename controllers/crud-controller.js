// Node Dependencies
var express = require('express');
var crudRouter = express.Router();
var db = require('../models'); // Pulls out the Models


// POST/API Routes for Database changes
// ----------------------------------------------------
crudRouter.post("/user/signup",function(req,res){
  db.Login.create({
      "email": req.body.email,
      "password":req.body.password,
      "firstName":req.body.firstName,
      "lastName":req.body.lastName,
      "pupName":req.body.pupName
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

// Export routes
module.exports = crudRouter;