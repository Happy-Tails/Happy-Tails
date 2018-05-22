module.exports = function(sequelize,dataTypes){
    var Login = sequelize.define("Login",{
        "email":{
            "type": dataTypes.STRING,
            "allowNull":false,
            "isEmail":true
        },
        "password":{
            "type": dataTypes.STRING,
            "allowNull":false
        },
        "firstName":{
            "type": dataTypes.STRING,
            "allowNull":false
        },
        "lastName":{
            "type": dataTypes.STRING,
            "allowNull":false
        },
        "pupsName":{
            type:dataTypes.STRING
        }
    })
    return Login;
}