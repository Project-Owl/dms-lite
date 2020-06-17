#!/bin/sh
#######################################
# Bash script to install dependencies for Project Owl Dms-lite 
# Written by @Evilgeniusnerd 
#######################################

## Update packages ##

echo '##updating packages' 
sudo apt-get update -y 

echo '##upgrading all packages now...'
sudo apt-get upgrade -y

echo '##installing Node Js now..'
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
sudo apt-get install nodejs -y

echo '##installing Sqlite3'
sudo apt-get install sqlite3 -y

echo '##install sqlite3 for python'
pip3 install sqlite3
