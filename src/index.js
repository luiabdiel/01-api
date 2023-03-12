const http = require('http');

const users = require('./mock/users')

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

  if (request.url === '/users' && request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application-json' });
    response.end(JSON.stringify(users));
  } else {
    response.writeHead(400, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${request.url}`)
  }
});

server.listen(3000, () => console.log('🔥 server started at http://localhost:3000'));
