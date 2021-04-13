console.log("index.js");

// var mqtt = require('mqtt');
// var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
// or
var client  = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

// var client  = mqtt.connect({ host:'mqtt.eclipse.org/mqtt', port: 443})
// or
// var client  = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')
  client.on('connect', function () {
    $('#sub-button').on('click', function(){
      var publish_topic_input =$('#publishTopic').val();
      var publishPayload = $('#publishPayload').val();
      var subscribe_input = $('#subscribe-input').val();
      if (publish_topic_input == subscribe_input){
        $('#pub-button').on('click',function(){
          $('#messageTable').append(`<tr><td>${publish_topic_input}</td><td>${publishPayload}</td></tr>`);
          client.publish(publish_topic_input, publishPayload)
          // publish_topic_input =""
          // publishPayload ="";
          
        })
      }
    })
  client.subscribe('messages', function (err) {
    if (!err) {
      client.publish('messages', 'hello mqtt')
    }
  })
})

client.on('message', function (publish_topic_input, publishPayload) {
  // message is Buffer
  console.log(publish_topic_input.toString())
//   client.end()
})






// pub_button.addEventListener('click', () => {
//   var table = document.getElementsByClassName('table');
//   var messageHolder = table.append(`<tr><td>${publish_topic_input}</td><td>${publishPayload}</td></tr>`)
//   client.publish('messages', messageHolder)
//   pub_input.value = "";
// })

// $('#pub-button').on('click',function(){
//   var table = document.getElementsByClassName('table');
//   var messageHolder = table.prepend(`<tr><td>${publish_topic_input}</td><td>${publishPayload}</td></tr>`)
//   client.publish('messages', messageHolder)
//   pub_input.value = "";
// })