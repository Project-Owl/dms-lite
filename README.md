![logo](public/images/DMS-LITE.png)

 [![Slack](https://img.shields.io/badge/Join-Slack-blue)](https://www.project-owl.com/slack)
 
## About
The PaPi and DMS LITE is a collaborative effort to collect all the data from a [ClusterDuck Protocol](https://github.com/Code-and-Response/ClusterDuck-Protocol) network locally. It provides a local interface to see network activity and data traffic. The PaPi was brought to life for areas when there is no internet connection available at all. The PaPi can store data and acts as a local MQTT broker to communicate with the PaPa Duck. 

## How it works 

All messages and data from the [ClusterDuck Protocol](https://github.com/Code-and-Response/ClusterDuck-Protocol) network are sending to the PaPa Duck, the PaPa Duck sends all the messages to the PaPi over wifi. The PaPa Duck can send those messages over wifi since the PaPi is turned into a local Access point. The messages go through the MQTT Broker and then they are stored into a Database.

### DMS LITE
The DMS LITE is the Lightweight version of the cloud DMS, which offers more features and functionality. DMS LITE gives you simple network activity and data visuals. 

The PaPa Duck is running a different Firmware then the regular ClusterDuck Protocol PaPa example.

### Example Of ClusterDuck Protocol Network

![](public/images/CDP-NETWORK-EXPLAIN.jpg)

### Local ClusterDuck Protocol Network

![](public/images/PAPI-EXPLAIN-3.jpg)

## Parts required

- Raspberry Pi
- Micro SD-Card 16GB or more
  - Raspbian OS installed
- Mouse and Keyboard
- Wired Ethernet Connection 

- Latest Copy of [ClusterDuck Protocol](https://github.com/Code-and-Response/ClusterDuck-Protocol)

## How To Install
The PaPi and DMS LITE both need some setup before you can start seeing your data. To turn the Raspberry Pi into the PaPi, you will need to install multiple modules. 

NOTE: *You need an Internet Connection to install the packages and the DMS LITE application. After the Raspberry Pi is turned into an Access Point it doesn't have WiFi capabilities anymore and you will need a LAN connection for final setup.*


### NodeJs
`sudo apt-get update`

`sudo apt-get upgrade`

`curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -`
`sudo apt-get install -y nodejs`

### Mosquitto
`sudo apt-get mosquitto mosquitto-clients`

### Python 

NOTE: *If Python 3 is installed and set as the default, you can skip to the next section. You can test this by typing `python3 -V` into the terminal window.*

`sudo apt-get install -y build-essential tk-dev libncurses5-dev libncursesw5-dev libreadline6-dev libdb5.3-dev libgdbm-dev libsqlite3-dev libssl-dev libbz2-dev libexpat1-dev liblzma-dev zlib1g-dev libffi-dev tar wget vim`

`wget https://www.python.org/ftp/python/3.8.3/Python-3.8.3.tgz`

`sudo tar zxf Python-3.8.3.tgz`

`cd Python-3.8.3`

`sudo ./configure --enable-optimizations`

`sudo make -j 4`

`sudo make altinstall`

`echo "alias python=/usr/local/bin/python3.8" >> ~/.bashrc`

`source ~/.bashrc`

`python -V`

### Install Sqlite3

`sudo apt-get install sqlite3`

You can initialize your database inside the project folder using these commands to create the db file and schema.

`sqlite3 data.db`

`CREATE TABLE clusterData(timestamp datetime, duck_id TEXT, message_id TEXT, payload TEXT, path TEXT);`

### Install paho-mqtt for Python

`sudo -H pip3 install --upgrade pip`

`pip3 install paho-mqtt`

### Install sqlite3 for Python

`pip3 install sqlite3`

### RaspAp
`curl -sL https://install.raspap.com | bash`

# Run

`python3 sqlwriter.py`

`npm run start`

NOTE: *You need to run the two scripts in two separate terminals.*


![logo](public/images/footer.png)
