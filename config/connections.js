var Sequelize = require("sequelize");


var sequelize = new Sequelize("sequelize_library", "root", "root", {  //the first argument should be my database if there is an error
    //need to host DB, see JawsDB exercise
    //checkout wiht cc on Heroku 
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }

});


module.exports = sequelize;