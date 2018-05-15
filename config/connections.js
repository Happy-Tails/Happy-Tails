var Sequelize = require("sequelize");


   var sequelize = new Sequelize ("sequelize_library","root","root",{  //the first argument should be my database if there is an error
       host: "localhost",
       dialect:"mysql",
       pool:{
           max:5,
           min:0,
           idle:10000
       }
   });

  module.exports = sequelize;