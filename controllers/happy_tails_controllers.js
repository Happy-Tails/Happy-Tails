var Trail = require("../models/happy_tails");
var express = require("express");

var router = express.Router();
var path = require("path");
router.get("/",function(req,res){
    res.sendFile(path.join(__dirname, "../views/layouts/index.html"));
});
router.get("/form",function(req,res){

});
router.get("/api/trails",function(req,res){
    Trail.findAll().then(function(data){
        res.json(data);
    })
})

router.post("/api/trails",function(req,res){

})


module.exports = router;