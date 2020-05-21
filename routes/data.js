var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('data.db', (err) => {
  if(err) {
    console.error(err.message);
  }
  console.log('Connected to data.db');
});

printAllData();

/* GET data route */
router.get('/', function(req, res, next) {
  res.render('data', { title: 'Express' });
});

function printAllData() {
  let sql = 'SELECT * FROM clusterData'
  
  db.all(sql, [], (err, rows) => {
    if(err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row);
    });
  });
}

module.exports = router;
