![logo](public/images/DMS-LITE.png)

 [![Slack](https://img.shields.io/badge/Join-Slack-blue)](https://www.project-owl.com/slack)
 
## About
The PaPi and DMS LITE is a collaborative effort to collect all the data from a [ClusterDuck Protocol](https://github.com/Code-and-Response/ClusterDuck-Protocol) network locally. It provides a local interface to see network activity and data traffic. The PaPi was brought to life for areas when there is no internet connection available at all. The PaPi can store data and acts as a local MQTT broker to communicate with the PaPa Duck. 

## How it Works
To get your data into the PaPi there are two different ways. A USB Serial connection or by WiFi. With the Serial connection the Raspberry Pi reads the incoming messages from the serial monitor by a wired connection from the papaduck and writes the data to the database. With the Wifi connection the Raspberry pi turns into a Acces point and the Papa Ducks sends data over WiFi which then gets recieved by a MQTT broker that then writes ther data to the database.


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


# Setup 
## How To Install
The PaPi and DMS LITE both need some setup before you can start seeing your data. To turn the Raspberry Pi into the PaPi, you will need to install multiple modules. 

NOTE: *You need an Internet Connection to install the packages and the DMS LITE application. After the Raspberry Pi is turned into an Access Point it doesn't have WiFi capabilities anymore and you will need a LAN connection for final setup.*

## Script Install 
Both Raspbian images have Python 2 preinstalled but Raspbian Lite does not have python 3 preinstalled. But you will need to set you Pi to use python 3 as default.

1. check your python version by running: python --version
  *** if you don't see python 3 continue on to 2.**
2. nano ~/.bashrc and add this to the very bottom alias python='/usr/bin/python3'

now try this again python --version you should see your default is python 3 now.

#### For Usb Serial 
1. chmod u+x Serial-install.sh will make the code excutable 
2. ./install.sh will make the code run 
3. sit back and kick up your feet because install will take a bit

After you have installed the required dependencies you can the two scripts.

`python3 Serial_sqlwriter.py`

`npm run start`

In your Browser go to Localhost:3000 to see the dms-lite

NOTE: *You need to run the two scripts in two separate terminals.*

#### For Wifi Acces Point 
1. chmod u+x WiFi-install.sh will make the code excutable 
2. ./install.sh will make the code run 
3. sit back and kick up your feet because install will take a bit

After you have installed the required dependencies you can the two scripts.

`python3 Wifi_sqlwriter.py`

`npm run start`

In your Browser go to Localhost:3000 to see the dms-lite

NOTE: *You need to run the two scripts in two separate terminals.*








![logo](public/images/footer.png)
