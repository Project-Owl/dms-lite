#!/bin/bash
#######################################
# Bash script to install dependencies for Project Owl Dms-lite
# Written by @hawk4031
#######################################

if [ "$EUID" -ne 0 ]; then
	echo "This script requires elevated privileges to run. Please re-run with sudo"
	exit
fi

if [ -f "~/.dms/setupRun" ]; then
	echo "This setup has already been run. Exiting."
	exit
fi

echo "Changing default python to python3 for current user"
grep -qxF 'alias python="/usr/bin/python3"' ~/.bashrc || echo 'alias python="/usr/bin/python3"' >> ~/.bashrc
source ~/.bashrc

echo "Gathering NodeJS information"
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo bash -

echo "Updating package databases"
sudo apt update -y

echo "Upgrading packages"
sudo apt upgrade -y

echo "Installing DMS Lite dependencies"
sudo apt install nginx sqlite3 mosquitto mosquitto-clients python3-pip nodejs -y

sudo -H pip3 install --upgrade pip
pip3 install paho-mqtt pyserial

npm install sqlite3
npm install

echo "Configuring systemd services"

# Replace REPLACEPATH in service files and output a copy to /etc/systemd/system
sed -i "s|REPLACEPATH|$PWD|g" dms-lite.service
sed -i "s|REPLACEPATH|$PWD|g" dms-serial-python-writer.service
sed -i "s|REPLACEPATH|$PWD|g" dms-wifi-python-writer.service

sudo cp dms-lite.service /etc/systemd/system/dms-lite.service
sudo cp dms-serial-python-writer.service /etc/systemd/system/dms-serial-python-writer.service
sudo cp dms-wifi-python-writer.service /etc/systemd/system/dms-wifi-python-writer.service

sudo systemctl daemon-reload
sudo systemctl start dms-lite

# After this initial setup is all completed, let's create this file
# The presence of it means we have already run this script and it
# shouldn't be run again. This is checked at the beginning of this
# script.
mkdir ~/.dms
touch ~/.dms/setupRun
