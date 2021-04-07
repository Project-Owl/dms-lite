var express = require('express');
var router = express.Router();
var db = require('./db.js');

/* GET settings route */
router.get('/', function(req, res, next) {
  res.render('settings', { title: 'Express' });
});

/* POST db-reset route */
router.post('/db-reset', function (req, res) {
  db.deleteAllData();
});
module.exports = router;
