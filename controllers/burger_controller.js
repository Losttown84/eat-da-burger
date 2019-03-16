var express = require('express');
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  // res.send("hello")
  burger.selectAll (function(data) {
    var object = {
      burgers: data
    };
    console.log("Object", object)
    res.render("index", object);
  });
});

router.post("/burgers", function(req, res) {
  console.log("About to save", req.body);
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne({
    devour: true
  }, condition, function(data) {
    res.redirect("/");
  });
});

module.exports = router;