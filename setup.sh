#!/bin/bash
#######################################
# Bash script to install dependencies for Project Owl Dms-lite
# Written by @hawk4031
#######################################

# Colors
CNC='\033[m'
CBWHT='\033[1;37m'
CBRED='\033[1;31m'

if [ -f "~/.dms/setupRun" ]; then
	printf "${CBWHT}This setup has already been run. Exiting.${CNC}"
	exit 1
fi

errormsg() {
	printf 1>&2 "${CBRED}Error:${CNC} %s\n" "$*"
	exit 1
}

printf "${CBWHT}Gathering NodeJS information${CNC} \n"
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo bash -

printf "${CBWHT}Updating package databases${CNC} \n"
sudo apt update -y

printf "${CBWHT}Upgrading packages${CNC} \n"
sudo apt upgrade -y

printf "${CBWHT}Performing dist-upgrade${CNC} \n"
sudo apt dist-upgrade -y

printf "${CBWHT}Installing DMS Lite dependencies{$CNC}v \n"
sudo apt install nginx sqlite3 mosquitto mosquitto-clients python3-pip nodejs -y

sudo -H pip3 install --upgrade pip
pip3 install paho-mqtt pyserial

npm install sqlite3
npm install

printf "${CBWHT}Configuring systemd services${CNC} \n"

# Replace REPLACEPATH in service files and output a copy to /etc/systemd/system
sed -e "s|REPLACEPATH|$PWD|g" dms-lite.service | sudo tee /etc/systemd/system/dms-lite.service
sed -e "s|REPLACEPATH|$PWD|g" dms-serial-python-writer.service | sudo tee /etc/systemd/system/dms-serial-python-writer.service
sed -e "s|REPLACEPATH|$PWD|g" dms-wifi-python-writer.service | sudo tee /etc/systemd/system/dms-wifi-python-writer.service

#sudo cp dms-lite.service /etc/systemd/system/dms-lite.service
#sudo cp dms-serial-python-writer.service /etc/systemd/system/dms-serial-python-writer.service
#sudo cp dms-wifi-python-writer.service /etc/systemd/system/dms-wifi-python-writer.service

sudo systemctl daemon-reload

# Make sure new services are set to run on boot
sudo systemctl enable dms-lite
sudo systemctl enable dms-serial-python-writer
sudo systemctl enable dms-wifi-python-writer

# Start the services now
sudo systemctl start dms-lite
sudo systemctl start dms-serial-python-writer
sudo systemctl start dms-wifi-python-writer

# After this initial setup is all completed, let's create this file
# The presence of it means we have already run this script and it
# shouldn't be run again. This is checked at the beginning of this
# script.
mkdir ~/.dms
touch ~/.dms/setupRun

printf "${CBWHT}Setup is complete!{$CNC} \n"
