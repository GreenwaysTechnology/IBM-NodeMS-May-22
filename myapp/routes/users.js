var express = require('express');
var router = express.Router();
// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

/* GET users listing. */
router.get('/', function (req, res, next) {
  //data from mongo db
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });

});

module.exports = router;
