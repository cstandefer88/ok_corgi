var express = require('express');
var router = express.Router();
var Corgi = require('../models/corgi');

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
