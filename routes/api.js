/*
 * Serve JSON to our AngularJS client
 */
var express = require('express');
var router = express.Router();

// JSON Datasource - ideally we'd get this data from some database
router.get('/datasource', function(req, res, next){
  var fs = require('fs');
  var file = __dirname + '/../external_data/data.json';
  
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      console.log('Error: ' + err);
      return;
    }
  res.json(JSON.parse(data));
  });
});

module.exports = router;
