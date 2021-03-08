import paho.mqtt.client as mqtt

# topic = "junrey/pn/c1/comlab/temperature"
topic = "junrey/pn/c1/comlab/#"

def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))
    print(" ")
    print("This is a subscriber client")
    print("Subscribed topic: " + topic)
    print(" ")

    client.subscribe(topic)

def on_message(client, userdata, msg):
    print(msg.topic + ": " + str(msg.payload.decode()))

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect("mqtt.eclipse.org", 1883, 60)

client.loop_forever()