module.exports = function(sequelize, DataTypes) {
    var Trails = sequelize.define('Trails', {
      trailName: DataTypes.STRING,
      trailDescription: DataTypes.TEXT,
      trailLength: DataTypes.INTEGER
   })
   return Trails;
};
    
  