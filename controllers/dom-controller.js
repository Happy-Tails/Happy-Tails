// Node Dependencies
var express = require('express');
var domRouter = express.Router();
var models = require('../models'); // Pulls out the Models
var path = require('path');
var passport = require("passport");



// PASSPORT JS SESSION FUNCTIONS
// ----------------------------------------------------

// Global Variable to Store User Session 
var USER_SESSION = null;

// Sign in User
function signInUser(req, res, error, user, info){
  if(error) { res.redirect('/login'); } // return res.status(500).json(error);
  if(!user) { res.redirect('/login');} // return res.status(401).json(info.message);

  // Set the session to global variable
  USER_SESSION = user;
  console.log(USER_SESSION);

  // Render Trails
  res.redirect('/view/trail');
}

// Require User Session (to protect the routes)
function isUser(req, res, next){
  // check if the user is logged in (using our Global variable work around)
  if(USER_SESSION == null){
    req.session.messages = "You need to login to view this page";
    res.redirect('/login');
  }
  else{
    next();
  }
  
}



// PUBLIC ROUTES (No User Auth Needed)
// ----------------------------------------------------

// Index Home Page Render
domRouter.get('/', function (req, res){
  res.render('index');
});


// Sign up Page (DOM Render)
domRouter.get('/signup', function (req, res){
  res.render('signup');
});


// Login Page (DOM Render)
domRouter.get('/login', function (req, res){
  res.render('login');
});



// LOGIN, LOGOUT, & SIGN-UP ROUTES
// ----------------------------------------------------
domRouter.post('/user/login', function(req, res, next) {
  passport.authenticate('local', function(error, user, info) {
    signInUser(req, res, error, user, info);
  })(req, res, next);
});


domRouter.post('/user/signup', function(req, res, next){
  console.log(req.body.username, req.body.password);
  passport.authenticate('local-signup', function(error, user, info) {
    signInUser(req, res, error, user, info);
  })(req, res, next);
});

domRouter.get('/user/logout', function(req, res) {
  req.session.destroy();

  // Remove the session to global variable
  USER_SESSION = null;

  // Redirect to Homepage
  res.redirect('/');
});




// SECURE ROUTES (Require a Login Session)
// ----------------------------------------------------
// User Sees All Trail entries in the Database (DOM Render)
domRouter.get('/view/trail', isUser, function(req, res){
  // Find all trails tied to the current user (so we can exclude them later)
  models.Trails.findAll({
    include: [{
      model: models.Users,
      where: {id: USER_SESSION.id} // Pulled from our global session variable
    }]
  })

});


// ----------------------------------------------------


// Export routes
module.exports = domRouter;