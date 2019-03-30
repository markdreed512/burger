var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/index", function(req, res) {
    burger.selectAll(function(tableData) {
      var hbsObject = {
        burgers: tableData
      };
      // console.log("hbs object: ", hbsObject);
      res.render("index", hbsObject);
    });
  });
router.post("/api/burger", function(req, res){
    burger.insertOne(req.body.name, function(data){
      res.render("index", data)
    });
});
router.put("/api/burger", function(req, res){
  console.log("Inside put: " ,req.body.name)
  var id = req.body.name;
  burger.updateOne(true, id, function(response){
    console.log("update response: ")
  })
  
});
module.exports = router;