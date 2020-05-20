# dms-lite
DMS Lite for the PAPI Project 


##NodeJs
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

##Mosquitto
Sudo apt-get mosquitto mosquitto-clients

##Python
sudo apt-get install -y build-essential tk-dev libncurses5-dev libncursesw5-dev libreadline6-dev libdb5.3-dev libgdbm-dev libsqlite3-dev libssl-dev libbz2-dev libexpat1-dev liblzma-dev zlib1g-dev libffi-dev tar wget vim
wget https://www.python.org/ftp/python/3.8.3/Python-3.8.3.tgz
sudo tar zxf Python-3.8.0.tgz
cd Python-3.8.0
sudo ./configure --enable-optimizations
sudo make -j 4
sudo make altinstall
echo "alias python=/usr/local/bin/python3.8" >> ~/.bashrc
source ~/.bashrc
python -V

##RaspAp
curl -sL https://install.raspap.com | bash
