![logo](public/images/DMS-LITE.png)

# About

The PaPi and DMS-LITE is an effort to collect all the data from a ClusterDuck Protocol network locally. It provides a local interface to see network activity and data traffic. The PaPi was brought to live for areas when there is no internet connection available at all. The papi can store data and acts as an local MQTT broker to communicate with the PaPa Duck. 

# how it works 
All mesages and data from the ClusterDuck Protocol network are being send to the PaPa Duck, the PaPa Duck sends all the messages to the PaPi over wifi. The PaPa Duck can send thiose messages over wifi since the PaPi is turned into a local Access point. 
![](public/images/CDP-NETWORK-EXPLAIN.jpg)

# Install

### NodeJs
sudo apt-get update

sudo apt-get upgrade

curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

### Mosquitto
sudo apt-get mosquitto mosquitto-clients

### Python
sudo apt-get install -y build-essential tk-dev libncurses5-dev libncursesw5-dev libreadline6-dev libdb5.3-dev libgdbm-dev libsqlite3-dev libssl-dev libbz2-dev libexpat1-dev liblzma-dev zlib1g-dev libffi-dev tar wget vim

wget https://www.python.org/ftp/python/3.8.3/Python-3.8.3.tgz

sudo tar zxf Python-3.8.3.tgz

cd Python-3.8.3

sudo ./configure --enable-optimizations

sudo make -j 4

sudo make altinstall

echo "alias python=/usr/local/bin/python3.8" >> ~/.bashrc

source ~/.bashrc

python -V

### Install Sqlite3

sudo apt-get install sqlite3

You can initialize your database inside the project folder using these commands to create the db file and table

sqlite3 data.db

CREATE TABLE clusterData(timestamp datetime, duck_id TEXT, message_id TEXT, payload TEXT, path TEXT);

### Install paho-mqtt for Python

sudo -H pip3 install --upgrade pip

pip3 install paho-mqtt

### Install sqlite3 for Python

pip3 install sqlite3

### RaspAp
curl -sL https://install.raspap.com | bash

# Run

python3 sqlwriter.py

npm run start
