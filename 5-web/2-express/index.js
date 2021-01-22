const express = require('express');

const server = express();
server.get('/', (req, res) => {
  res.send('Got request from /');
});
server.get('/faq', (req, res) => {
  res.send('FAQ Section');
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
