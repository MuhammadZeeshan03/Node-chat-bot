const https = require('https');

const apiKey = 'a5b655cc-13f7-4194-a177-a98e3e2e51d7';
const phoneId = 27692;
const sendMessageEndpoint = `https://api.maytapi.com/api/bff6c255-dc4c-4c7d-9b8b-dfdcacaf4394/${phoneId}/sendMessage`;

const data = {
    "to_number": "923121759818",
    "type": "text",
    "message": "Hello World!"
  }

const options = {
  hostname: 'api.maytapi.com',
  path: sendMessageEndpoint,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-maytapi-key': apiKey,
  },
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(JSON.stringify(data));
req.end();
