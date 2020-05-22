var express = require('express');
var router = express.Router();

/* GET data route */
router.get('/', function(req, res, next) {
  res.render('data', { title: 'Express' });
});









module.exports = router;
