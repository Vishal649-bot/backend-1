const http = require('http');
const fs = require('fs');

const filePath = "./message.txt";
let mess;

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    mess = data;
    const server = http.createServer((req, res) => {
        const url = req.url;
        const method = req.method;
        if (url === '/') {
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write(`<body><h2>${mess}</h2><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
            res.write('</html>');
            return res.end();
        }
        if (url === '/message' && method === 'POST') {
            const body = [];
            req.on('data', (chunk) => {
                console.log(chunk);
                body.push(chunk);
            });
            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const message = parsedBody.split('=')[1];
                fs.writeFileSync('message.txt', message);
                mess = message; // Update the message variable
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>My First Page</title><head>');
            res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
            res.write('</html>');
            res.end();
        }
    });

    server.listen(3000, () => {
        console.log('Server is listening on port 3000');
    });
});









