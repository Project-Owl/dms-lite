var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();

var db;

// Test DB connection
openDB();
closeDB();

// This will be updated
// CREATE TABLE clusterData(time_recieved datetime, duck_id TEXT, message_id TEXT, payload TEXT, path TEXT);

/* GET data route */
router.get('/', function (req, res, next) {
   res.render('db', {
      title: 'Express'
   });
});

function openDB() {
   db = new sqlite3.Database('data.db', (err) => {
      if (err) {
         console.error(err.message);
      }
      console.log('Connected to data.db');
   });
}

function closeDB() {
   db.close((err) => {
      if (err) {
         return console.error(err.message);
      }
      console.log('Close the database connection.');
   });
}

function getAllData() {
   var values;

   openDB();
   let sql = 'SELECT time_recieved, duck_id, message_id, payload FROM clusterData'

   db.all(sql, [], (err, rows) => {
      if (err) {
         throw err;
      }
      rows.forEach((row) => {
         console.log(row); //For debug
      });

      values = rows;
   });
   closeDB();

   return values;
}

function getDataByDuckId(duckId) {
   var values;

   openDB();
   let sql = 'SELECT time_recieved, duck_id, message_id, payload, path FROM clusterData WHERE duck_Id = ?'

   db.all(sql, [duckId], (err, rows) => {
      if (err) {
         throw err;
      }
      rows.forEach((row) => {
         console.log(row); //For debug
      });

      values = rows;
   });
   closeDB();

   return values;
}

function getUniqueDucks() {
   var values;

   openDB();
   let sql = 'SELECT DISTINCT duck_id FROM clusterData'

   db.all(sql, [], (err, rows) => {
      if (err) {
         throw err;
      }
      rows.forEach((row) => {
         console.log(row); //For debug
      });

      values = rows;
   });
   closeDB();

   return values;
}

function getLastCount(count) {
   var values;

   openDB();
   let sql = 'SELECT time_recieved, duck_id, message_id, payload FROM clusterData DESC LIMIT ?'

   db.all(sql, [count], (err, rows) => {
      if (err) {
         throw err;
      }
      rows.forEach((row) => {
         console.log(row); //For debug
      });

      values = rows;
   });
   closeDB();

   return values;
}


module.exports = router;