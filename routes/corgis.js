var express = require('express');
var router = express.Router();
var Corgi = require('../models/corgi');

router.get('/', function(req, res) {
  Corgi.find({}, function(err, corgis) {
    if (err) console.log(err);
    res.json(corgis);
  });
});

router.get('/random', function(req, res) {
  Corgi.findOneRandom({liked: null}, function(err, corgi) {
    if (err) console.log(err);
    res.json(corgi);
  });
});

// BONUS
// router.get('/liked', function(req, res) {
// });

router.post('/', function(req, res, next){
  var newCorgi = new Corgi({
    name: req.body.name,
    image_url: req.body.image_url,
    interests: req.body.interests,
    age: req.body.age,
    liked: null
  });

  newCorgi.save(function(err, corgi) {
    if (err) console.log(err);
    res.json(corgi);
  });
});


router.patch('/:id/like', function(req, res, next){
  Corgi.findByIdAndUpdate(req.params.id, { liked: true }, function(err, corgi){
    if (err) console.log(err);
    res.json(corgi);
  })
});


router.patch('/:id/dislike', function(req, res){
  Corgi.findByIdAndUpdate(req.params.id, { liked: false }, function(err, corgi){
    if (err) console.log(err);
    res.json(corgi);
  })
});

module.exports = router;
