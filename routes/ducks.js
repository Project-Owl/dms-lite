var express = require('express');
var router = express.Router();
var db = require('db.js');

/* GET ducks route */
router.get('/', function(req, res, next) {
  res.render('ducks', { title: 'Express' });
});

router.get('/data', function (req, res, next) {
  res.json(db.getAllData());
});

router.get('/data/:duckId', function (req, res, next) {
  res.json(db.getDataByDuckId(req.params.duckId));
});

router.get('/data/ducks', function (req, res, next) {
  res.json(db.getUniqueDucks());
});

router.get('/data/latest/:count', function (req, res, next) {
  res.json(db.getLastCount(req.params.count));
});


module.exports = router;
