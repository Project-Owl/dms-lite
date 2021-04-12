#!/bin/sh

# install SQLite 
sudo pip3 install sqlite3

#Check for db if doesn't exist create it
sqlite3 data.db <<EOF
CREATE TABLE IF NOT EXISTS clusterData (timestamp datetime, duck_id TEXT, topic TEXT, message_id TEXT, payload TEXT, path TEXT, hops INT, duck_type INT);
EOF
