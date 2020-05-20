var express = require('express');
var router = express.Router();

/* GET ducks route */
router.get('/', function(req, res, next) {
  res.render('ducks', { title: 'Express' });
});

module.exports = router;
