module.exports = function(sequelize, DataTypes) {
    var Trails = sequelize.define('Trails', {
      trailName: DataTypes.STRING,
      trailDescription: DataTypes.STRING,
      trailLength: DataTypes.INTEGER
   })
   return Trails;
};
    
  