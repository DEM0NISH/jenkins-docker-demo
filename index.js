const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello from Docker + Jenkins!');
});
server.listen(4000, () => console.log('Running on port 4000'));