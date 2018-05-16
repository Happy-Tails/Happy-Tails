module.exports = function(sequelize, DataTypes) {
    var Trails = sequelize.define('Trails', {
      trailName: DataTypes.STRING,
      trailImageURL: DataTypes.STRING
   })
};
    
  