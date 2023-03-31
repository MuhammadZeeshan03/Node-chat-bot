const axios = require('axios');
const readline = require('readline');

const API_KEY = 'a5b655cc-13f7-4194-a177-a98e3e2e51d7';
const PHONE_ID = '27692';
const BASE_URL = `https://api.maytapi.com/api/${API_KEY}/${PHONE_ID}`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sendMediaMessage(phoneNumber, message) {
  const url = `${BASE_URL}/sendMessage`;
  const headers = {
    'Content-Type': 'application/json',
    'x-maytapi-key': API_KEY
  };
  const data = {
    "to_number": phoneNumber,
    "type": "text",
    "message": message
  }

  axios.post(url, data, { headers })
    .then((response) => {
      console.log('Media message sent successfully!');
    })
    .catch((error) => {
      console.error('Error sending media message:', error);
    });
}

rl.question('User: ', (answer) => {
  if (answer.match(/hi|hey|hello/i)) {
    console.log('Bot: hi, welcome to TechOn. How may we help you today?');
    console.log('1. Customer support');
    console.log('2. Sales');

    rl.question('User: ', (answer) => {
      if (answer === '1') {
        console.log('Bot: customer support will reach out to you.');
        sendMediaMessage('923121759818', 'http://placehold.it/180');
        console.log('Is there anything else I can do for you?');
        console.log('1. Yes');
        console.log('2. No');

        rl.question('User: ', (answer) => {
          if (answer === '1') {
            console.log('Bot: please type your query.');
            rl.question('User: ', (answer) => {
              sendMediaMessage('923121759818', `You said: ${answer}`);
              console.log('Bot: thanks, we\'ll look into it.');
              rl.close();
            });
          } else if (answer === '2') {
            console.log('Bot: thanks for your time.');
            rl.close();
          }
        });
      } else if (answer === '2') {
        console.log('Bot: sales will reach out to you.');
        sendMediaMessage('923121759818', 'http://placehold.it/180');
        console.log('Is there anything else I can do for you?');
        console.log('1. Yes');
        console.log('2. No');

        rl.question('User: ', (answer) => {
          if (answer === '1') {
            console.log('Bot: please type your query.');
            rl.question('User: ', (answer) => {
              sendMediaMessage('923121759818', `You said: ${answer}`);
              console.log('Bot: thanks, we\'ll look into it.');
              rl.close();
            });
          } else if (answer === '2') {
            console.log('Bot: thanks for your time.');
            rl.close();
          }
        });
      }
    });
  } else {
    console.log('Bot: Sorry, I didn\'t understand. Can you please repeat?');
    rl.close();
  }






});
