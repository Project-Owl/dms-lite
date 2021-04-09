var express = require('express');
var router = express.Router();
var db = require('./db.js');

/* GET data route */
router.get('/', function(req, res, next) {


  db.getAllData().then((ducks) => {
    res.render('data',
        {
          title: 'Express',
          something: ducks
        });

  });

});

router.get('/getAllData', function (req, res, next) {
  db.getAllData().then((response) => {
    console.log(response);

    res.json(response);
  });
});

router.get('/getDataByDuckId/:duckId', function (req, res, next) {
  db.getDataByDuckId(req.params.duckId).then((response) => {
    console.log(response);

    res.json(response);
  });
});

router.get('/getUniqueDucks', function (req, res, next) {
  db.getUniqueDucks().then((response) => {
    console.log(response);

    res.json(response);
  });
});

router.get('/getLastCount/:count', function (req, res, next) {
  db.getLastCount(req.params.count).then((response) => {
    console.log(response);

    res.json(response);
  });
});


module.exports = router;
