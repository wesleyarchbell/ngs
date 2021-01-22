const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Receievd request');
  res.end('Hello World\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
