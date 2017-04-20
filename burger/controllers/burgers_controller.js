var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback 
  burger.selectAll(function(burgerData) {
    var myObject = { burgers: burgerData };
    console.log(myObject);
    res.render("index", { burger_data: burgerData });
  });
});

// post route
router.post("/burgers/insert", function(req, res) {
  // takes the request object
  burger.insertOne(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

// route to index
router.put("/burgers/update", function(req, res) {
  burger.updateOne(req.body.burger_id, function(result) {
    // callback
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;