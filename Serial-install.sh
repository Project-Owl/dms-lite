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
curl -fsSL https://deb.nodesource.com/setup_10.x | sudo bash -
sudo apt-get install nodejs -y

echo '##installing Sqlite3'
sudo apt-get install sqlite3 -y

echo '##install pyserial'
pip install pyserial

echo '##install node dependecies'
npm install sqlite3
npm install 

echo '##new terminal and  run npm'
lxterminal -e "npm run start"& 

echo '##new terminal and run python'
lxterminal -e "python serial_sqlwriter.py"&

echo '##launch chrome in kiosk mode'
# Start Chromium in kiosk mode
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' ~/.config/chromium/'Lo$
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/; s/"exit_type":"[^"]\+"$
chromium-browser --disable-infobars --kiosk 'http://localhost:3000'
