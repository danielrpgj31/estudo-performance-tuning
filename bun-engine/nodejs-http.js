const http = require ('node:http');
http.createServer((_, resp) => {
    resp.writeHead(200, {
        'content-type' : 'text/plain',
    });
    resp.end('Test: Node');
}).listen(3000);