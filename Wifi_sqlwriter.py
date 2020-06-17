from time import gmtime, strftime
import paho.mqtt.client as mqtt
import sqlite3
from sqlite3 import Error
import json

status_topic = "status"
dbFile = "data.db"

# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    client.subscribe(status_topic)

# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
    theTime = strftime("%Y-%m-%d %H:%M:%S", gmtime())

    result = (theTime + "\t" + str(msg.payload))
    print(msg.topic + ":\t" + result)
    if (msg.topic == status_topic):
        text = json.loads(msg.payload)
        print (json.dumps(text))
        writeToDb(theTime, text["DeviceID"], text["MessageID"], text["Payload"], text["path"])
    return

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

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect("127.0.1.1", 1883, 60)

try:
    db = sqlite3.connect(dbFile)
    db.cursor().execute("CREATE TABLE IF NOT EXISTS clusterData (timestamp datetime, duck_id TEXT, message_id TEXT, payload TEXT, path TEXT)")
    db.commit()
    db.close()
except  Error as e:
    print(e)

# Blocking call that processes network traffic, dispatches callbacks and
# handles reconnecting.
# Other loop*() functions are available that give a threaded interface and a
# manual interface.
client.loop_forever()
