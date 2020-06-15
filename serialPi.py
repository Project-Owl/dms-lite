
from time import gmtime, strftime
import sqlite3
import serial
from sqlite3 import Error
import json

dbFile = "data.db"

  
ser = serial.Serial('/dev/ttyUSB0',115200)

   
def writeToDb(theTime, duckId, messageId, payload, path):
    conn = sqlite3.connect(dbFile)
    c = conn.cursor()
    print ("Writing to db...")
    try:
        c.execute("INSERT INTO clusterData VALUES (?,?,?,?,?)", (theTime, duckId, messageId, payload, path))
        conn.commit()
        conn.close()
    except Error as e:
        print(e)
          
while True:
    theTime = strftime("%Y-%m-%d %H:%M:%S", gmtime())
    payload = ser.readline()
    print(payload.decode('utf8'))
    a = json.loads(payload.decode('utf8').replace("'", '"'))
    print(a)
#     writeToDb(theTime, p["DeviceID"], p["MessageID"], p["Payload"], p["path"])

try:
    db = sqlite3.connect(dbFile)
    db.cursor().execute("CREATE TABLE IF NOT EXISTS clusterData (timestamp datetime, duck_id TEXT, message_id TEXT, payload TEXT, path TEXT)")
    db.commit()
    db.close()
except  Error as e:
    print(e)
