var http = require('http');
let url = require('url');
let fs = require('fs');
let event = require('events');


http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    console.log(q.pathname == "/");
    let html_filename = q.pathname == "/" ? "index.html" 
                                          : `.${q.pathname}.html`;
    fs.readFile(html_filename, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }
    });
}).listen(8080); 