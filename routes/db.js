var express = require('express');
const sqlite3 = require('sqlite3').verbose();

var db;

// Test DB connection
openDB();
closeDB();

// This will be updated
// CREATE TABLE clusterData(timestamp datetime, duck_id TEXT, message_id TEXT, payload TEXT, path TEXT);

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
   return new Promise((resolve, reject) => {
      openDB();
      let sql = 'SELECT timestamp, duck_id, topic, message_id, payload, path, hops, duck_type  FROM clusterData ORDER BY timestamp DESC'
      console.log(sql)
      db.all(sql, (err, rows) => {
         if (err) {
            reject(err);
         }
         resolve(rows);
      });
      closeDB();
   });
}

function getDataByDuckId(duckId) {
   return new Promise((resolve, reject) => {
      openDB();
      let sql = 'SELECT timestamp, duck_id, topic, message_id, payload, path, hops, duck_type FROM clusterData WHERE duck_Id = ?'

      db.all(sql, [duckId], (err, rows) => {
         if (err) {
            reject(err);
         }
         resolve(rows);
      });
      closeDB();
   });
}

function getUniqueDucks() {
   return new Promise((resolve, reject) => {
      openDB();
      let sql = 'SELECT DISTINCT duck_id FROM clusterData;'
      
      db.all(sql, (err, rows) => {
         console.log(rows);
         if (err) {
            reject(err);
         }
         resolve(rows);
      });
      //closeDB();
   });
}

function getLastCount(count) {
   return new Promise((resolve, reject) => {
      openDB();
      let sql = 'SELECT timestamp, duck_id, topic, message_id, payload, path, hops, duck_type  FROM clusterData DESC LIMIT ?'

      db.all(sql, [count], (err, rows) => {
         if (err) {
            reject(err);
         }
         resolve(rows);
      });
      closeDB();
   });
}

function getDuckPlusData() {
   return new Promise((resolve, reject) => {
      openDB();
      let sql = 'SELECT timestamp, duck_id, topic, message_id, payload, path, hops, duck_type  FROM ( SELECT ROW_NUMBER() OVER ( PARTITION BY duck_id ORDER BY timestamp DESC ) RowNum, timestamp, duck_id, topic, message_id, payload, path, hops, duck_type  FROM clusterData ) WHERE RowNum = 1;'

      db.all(sql, (err, rows) => {
         if (err) {
            reject(err);
         }
         resolve(rows);
      });
      closeDB();
   });
}


module.exports = {getAllData, getDataByDuckId, getUniqueDucks, getLastCount, getDuckPlusData};
