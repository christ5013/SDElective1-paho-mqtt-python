import paho.mqtt.client as mqtt
import time


topic = input("\nSubscribed topic: ")

def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))
    print(" ")
    client.subscribe(topic)

def on_message(client, userdata, msg):
    time.sleep(1)
    print(msg.topic + ": " + str(msg.payload.decode()))
        

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect("test.mosquitto.org", 1883, 60)

client.loop_forever()