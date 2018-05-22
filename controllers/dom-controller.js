// Node Dependencies
var express = require('express');
var domRouter = express.Router();
var models = require('../models'); // Pulls out the Models
var path = require('path');
var passport = require("passport");




// PUBLIC ROUTES (No User Auth Needed)
// ----------------------------------------------------

// Index Home Page Render
domRouter.get('/', function (req, res){
  res.sendFile(path.join(__dirname, "../views/layouts/index.html"));
});
domRouter.get('/index', function (req, res){
  res.sendFile(path.join(__dirname, "../views/layouts/index.html"));
});

// Sign up Page (DOM Render)
domRouter.get('/signup', function (req, res){
  res.sendFile(path.join(__dirname,"../views/layouts/signup.html"));
});


// Login Page (DOM Render)
domRouter.get('/login', function (req, res){
  res.sendFile(path.join(__dirname,"../views/layouts/login.html"));
});

domRouter.get('/viewAccount',function(req,res){
  res.sendFile(path.join(__dirname,"../views/layouts/viewAccount.html"));
})

domRouter.get('/addTrails',function(req,res){
  res.sendFile(path.join(__dirname,"../views/layouts/addTrails.html"));
})
// LOGIN, LOGOUT, & SIGN-UP ROUTES
// ----------------------------------------------------
// domRouter.get('/user/login/:email/:pass', function(req, res) {
//   models.Login.findOne({
//     where:{
//       "email":req.params.email,
//       "password":req.params.pass
//     }
//   }).then(function(result){
//     if(!result){
//       res.status(400).end()
//     }
//     res.json(result);
//     res.redirect("/");
//   })
// });


// domRouter.post('/user/signup', function(req, res, next){
//   console.log(req.body.username, req.body.password);
//   models.Login.create({
//     "email":req.body.email,
//     "password":req.body.password,
//     "firstName":req.body.firstName,
//     "lastName":req.body.lastName,
//     "pupName":req.body.pupName
//   }).then(function(result,err){
//     if(err){
//       res.status(500).end()
//     }
//     res.redirect("/")
//   })
// });

domRouter.get('/user/logout', function(req, res) {
  res.redirect('/');
});




// SECURE ROUTES (Require a Login Session)
// ----------------------------------------------------
// User Sees All Trail entries in the Database (DOM Render)
domRouter.get('/view/trail', function(req, res){
  // Find all trails tied to the current user (so we can exclude them later)
  models.Trails.findAll({
    include: [{
      model: models.Users,
      //where: {id: USER_SESSION.id} // Pulled from our global session variable
    }]
  })

});


// ----------------------------------------------------


// Export routes
module.exports = domRouter;