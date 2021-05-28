#!/bin/sh
#######################################
# Bash script to install dependencies for Project Owl Dms-lite 
# Written by @Evilgeniusnerd 
#######################################

##VERSION 1.1 ###

## Update packages ##

echo '##updating packages' 
sudo apt-get update -y 

echo '##upgrading all packages now...'
sudo apt-get upgrade -y

echo '##installing Node Js now..'
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

echo '##installing Mosquitto...'
sudo apt-get install mosquitto mosquitto-clients -y


echo '##installing Sqlite3'
sudo apt-get install sqlite3 -y

echo '##installing paho-mqtt for python'
sudo -H pip3 install --upgrade pip
pip3 install paho-mqtt

echo '##install node packages'
npm install sqlite3
npm install 

echo '##install RaspAp'
curl --fsSL https://install.raspap.com | bash 
