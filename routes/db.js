var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('data.db', (err) => {
   if (err) {
      console.error(err.message);
   }
   console.log('Connected to data.db');
});

// CREATE TABLE clusterData(time_recieved datetime, duck_id TEXT, message_id TEXT, payload TEXT, path TEXT);

/* GET data route */
router.get('/', function (req, res, next) {
   res.render('db', {title: 'Express'});
});

router.get('/data', function (req, res, next) {
   let sql = 'SELECT time_recieved, duck_id, message_id, payload FROM clusterData'

   db.all(sql, [], (err, rows) => {
      if (err) {
         throw err;
      }
      rows.forEach((row) => {
         console.log(row); //For debug
      });
      
      res.json(rows);
   });
   
});

router.get('/data/:duckId', function (req, res, next) {
   let sql = 'SELECT time_recieved, duck_id, message_id, payload, path FROM clusterData WHERE duck_Id = ?'

   db.all(sql, [req.params.duckId], (err, rows) => {
      if (err) {
         throw err;
      }
      rows.forEach((row) => {
         console.log(row); //For debug
      });

      res.json(rows);
   });
});

router.get('/data/ducks', function (req, res, next) {
   let sql = 'SELECT DISTINCT duck_id FROM clusterData ORDER BY duck_id'

   db.all(sql, [], (err, rows) => {
      if (err) {
         throw err;
      }
      rows.forEach((row) => {
         console.log(row); //For debug
      });

      res.json(rows);
   });
});



module.exports = router;