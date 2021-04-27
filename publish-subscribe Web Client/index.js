

var client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt');

client.on('connect', function () {
  console.log("connected");
  alert("Connected!");
})

function publishFunction() {
  var publish_topic_input = $('#publishTopic').val();
  var publishPayload = $('#publishPayload').val();
  
  if (publish_topic_input != "" && publish_topic_input != "") {
    client.publish(publish_topic_input, publishPayload)
  } else {
    alert("Please input topic and Payload");
  }
}

function subscribeFunction() {
  var subscribe_input = $('#subscribe-input').val();
  if (subscribe_input != "") {
    client.subscribe(subscribe_input, function (error) {
      if (error) {
        console.log("Error!");
      }
    });
  }else{
    alert("Please input a subscribe topic!");
  }

}

client.on('message', function (publish_topic_input, publishPayload) {
  if (publish_topic_input == $('#subscribe-input').val()) {
    console.log(publish_topic_input);
    console.log($('#subscribe-input').val());
    $('#messageTable').append(`<tr><td>${publish_topic_input}</td><td>${publishPayload}</td></tr>`);
  }
})





//Buang ang broker
// console.log("index.js");

// // var client  = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')
// var client  = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')

// client.on('connect', function () {
//     console.log('connected')
  
// })

// client.on('message', function (pub_topic, message) {
//   if(pub_topic == document.getElementById('sub-input-topic').value){
//     document.getElementById('messageTable').innerHTML += `<tr><td>${pub_topic}</td><td>${message}</td></tr>`;  
//   }
// })

// function publishFunction(){
//   let pub_topic_input = $('#publishTopic').val();
//   let pub_payload_input = $('#publishPayload').val();

//   if(pub_topic_input != "" && pub_payload_input != ""){
//     client.publish(pub_topic_input,pub_payload_input);
//   }else{
//     alert("Input the topic and payload!");
//   }
// }

// function subscribeFunction(){
//   let sub_topic_input = $('#subscribe-input').val();
//   if(sub_topic_input != ""){
//     client.subscribe(sub_topic_input, function(error){
//       if(error){
//         console.log("Error in subscribing topic!");
//       }
//     });
//   }else{
//     alert("Input the topic!");
//   }
// }
