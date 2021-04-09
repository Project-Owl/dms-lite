
from time import gmtime, strftime
import sqlite3
import serial
from sqlite3 import Error
import json

dbFile = "data.db"

  
ser = serial.Serial('/dev/ttyUSB0',115200)

   
def writeToDb(theTime, duckId, messageId, payload, path, hops, duckType):
    conn = sqlite3.connect(dbFile)
    c = conn.cursor()
    print ("Writing to db...")
    try:
        c.execute("INSERT INTO clusterData VALUES (?,?,?,?,?,?,?)", (theTime, duckId, messageId, payload, path, hops, duckType))
        conn.commit()
        conn.close()
    except Error as e:
        print(e)
          
while True:
    theTime = strftime("%Y-%m-%d %Hs:%M:%S", gmtime())
    payload = ser.readline()
    prstrip = payload.rstrip().decode('utf8')
    if len(prstrip) >0:
      print(prstrip)
      try:
        p = json.loads(prstrip)
        writeToDb(theTime, p["DeviceID"], p["MessageID"], p["Payload"], p["path"],p["hops"],p["duckType"])
      except:
         print(prstrip)
         print("Invalid Packet")
        
        
      

      
try:
    db = sqlite3.connect(dbFile)
    db.cursor().execute("CREATE TABLE IF NOT EXISTS clusterData (timestamp datetime, duck_id TEXT, message_id TEXT, payload TEXT, path TEXT, hops INT, duck_type INT)")
    db.commit()
    db.close()
except  Error as e:
    print(e)
