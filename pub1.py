import paho.mqtt.client as mqtt
import time

topic = "junrey/pn/c1/comlab/temperature"
payload = "20 Celcius"

def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))
    print(" ")
    print("This is a publisher client")
    print("Published topic: " + topic)
    print("Published payload: " + payload)
    print(" ")

client = mqtt.Client()
client.on_connect = on_connect

client.connect("mqtt.eclipse.org", 1883, 60)

time.sleep(1)
while True:
    client.loop()
    client.publish(topic, payload)
    time.sleep(1)
