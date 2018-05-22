// Node Dependencies
var express = require('express');
var crudRouter = express.Router();
var models = require('../models'); // Pulls out the Models

//Do we need to put a connection.connection function here?

// POST/API Routes for Database changes

//CRUD

//caling our createTrail function
createTrail();

function createTrail() {
    console.log("Adding your new trail...\n");
    var query = connection.query(
    //Need to put in correct table name
      "INSERT INTO tableName SET ?",
      {
        name: "trail name",
        description: "trail description",
        length: "trail length"
      },
      function(err, res) {
        console.log(res.affectedRows + " trail added!\n");
        // Call updateTrail AFTER the INSERT completes
        updateTrail();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }
  
  function updateTrail() {
    console.log("Updating your saved trails...\n");
    var query = connection.query(
    //Need to put in the correct table name
      "UPDATE tableName SET ? WHERE ?",
      [
          {},
          {}
      ],
      function(err, res) {
        console.log(res.affectedRows + " trails updated!\n");
        // Call deleteTrail AFTER the UPDATE completes
        deleteTrail();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }
  
  function deleteTrail() {
    console.log("Deleting selected trail...\n");
    connection.query(
    //Need to add correct tableName
      "DELETE FROM tableName WHERE ?",
      {
        name: "name of trail you want to delete"
      },
      function(err, res) {
        console.log(res.affectedRows + " trail(s) deleted!\n");
        // Call readTrails AFTER the DELETE completes
        readTrails();
      }
    );
  }
  
  function readTrails() {
    console.log("Selecting all trails...\n");
    connection.query("SELECT * FROM tableName", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }
  
// ----------------------------------------------------

// Export routes
module.exports = crudRouter;