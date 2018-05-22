var db = require("../models");
var express = require("express");

var router = express.Router();
var path = require("path");

//Here are our routes and the logic needed to make them happen
router.get("/",function(req,res){
    res.sendFile(path.join(__dirname, "../views/layouts/index.html"));
});
router.get("/sign_up",function(req,res){
    res.sendfile(path.join(__dirname, "../views/layouts/signup.html"));
});
router.get("/api/trails",function(req,res){
    db.Trail.findAll().then(function(data){
        res.json(data);
    });
});

router.post("/api/trails",function(req,res){
    db.Trail.create({

    });
});

//GET route for one user's email and password
router.get("/api/login",function(req,res){  
    db.Login.findOne({
        where:{
            email: req.body.email,
            password: req.body.password
        }
    }).then((data)=>{
        res.sendStatus(200)
      }).catch((err)=>{
        res.status(500).json({
          error: "Email or Password is incorrect."
        });
      });
});

//POST route for login information 
router.post("/api/login",function(req,res){
    db.Login.create({
        email: req.body.email,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        pupName:req.body.pupName
    }).then(() =>{
        res.redirect("/")
    }).catch((err)=>{
        res.status(500).json({
            error:err.message
        });
    });
});
module.exports = router;