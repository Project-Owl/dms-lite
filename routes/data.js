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

// CREATE TABLE clusterData(time_recieved datetime, duck_id TEXT, message_id TEXT, payload TEXT, path TEXT);

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

function printDuckAllIds() {
  let sql = 'SELECT DISTINCT duck_id FROM clusterData ORDER BY ORDER BY duck_id'
  
  db.all(sql, [], (err, rows) => {
    if(err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row);
    });
  });
}

function printAllDuckIdData(duckId) {
  let sql = 'SELECT DuckId duck_id FROM clusterData WHERE DuckId = ?'
  
  db.all(sql, [duckId], (err, rows) => {
    if(err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row);
    });
  });
}

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
