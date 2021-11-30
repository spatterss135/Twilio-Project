require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+13093265224',
//      to: '+12624882909'
//    })
//   .then(message => console.log(message.sid));

async function sendMessage(){
    let promise = await client.messages
      .create({
         body: 'Hey Baby?',
         from: '+13093265224',
         to: '+12624882909'
       })
       
}

// var promise = client.messages.list();
// promise.then(function(messages) {
//   console.log(messages); //=> [MessageInstance, MessageInstance, MessageInstance, ...]
// });

async function getMessageList() {
    let promise = await client.messages.list()
    console.log(promise)
}

// sendMessage()
