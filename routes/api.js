/*
 * Serve JSON to our AngularJS client
 */
var express = require('express');
var router = express.Router();

router.get('/name', function(req, res){
  res.json({
    name: 'DashBoard'
  });
});

module.exports = router;
