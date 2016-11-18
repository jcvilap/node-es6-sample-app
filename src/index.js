import { createServer } from 'http';

createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Node + ES6 running');
}).listen(3000, '127.0.0.1');

console.log('serving from http://127.0.0.1:3000');
