module.exports = function(sequelize,dataTypes){
    var Login = sequelize.define("Login",{
        "username":{
            "type": dataTypes.STRING,
            "allowNull":false
        },
        "password":{
            "type": dataTypes.STRING,
            "allowNull":false
        }
    })
    return Login;
}