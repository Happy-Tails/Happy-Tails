# Happy-Tails
An application for finding the best hiking trails for you and pup

packages: 
express,
bodyparser,
sequelize,
sequelize CLI,
mysql2,
path

database configuration can be set in the config.json file in the connections folder
{
  "development": {
    "username": "root",
    "password": "root",
    "database": "HappyTails",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "dialectOptions":{
      "socketPath":"/Applications/MAMP/tmp/mysql/mysql.sock"
    }
  },
  "test": {
    "username": "yvozkxvpljehts",
    "password": "dda33cf921213df04657aaa9d6a75816187689abb5615145286a83fa01a73671",
    "database": "den7jptg2ngmhh",
    "host": "ec2-54-83-19-244.compute-1.amazonaws.com",
    "dialect": "mysql"
  },
  "production": {
    "username": "yvozkxvpljehts",
    "password": "dda33cf921213df04657aaa9d6a75816187689abb5615145286a83fa01a73671",
    "database": "den7jptg2ngmhh",
    "host": "ec2-54-83-19-244.compute-1.amazonaws.com",
    "dialect": "mysql"
  }
}

