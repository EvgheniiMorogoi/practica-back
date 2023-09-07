const http = require('http');

const port = 3002; // Change this to your desired port

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
