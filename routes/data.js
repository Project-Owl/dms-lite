var express = require('express');
var router = express.Router();
var db = require('./db.js');

/* GET data route */
router.get('/', function(req, res, next) {
  res.render('data', { title: 'Express' });
});

router.get('/data', function (req, res, next) {
  db.getAllData().then((response) => {
    console.log(response);

    res.json(response);
  });
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
