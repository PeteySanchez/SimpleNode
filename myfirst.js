var http = require('http');
var dateStuff = require('./myfirstmodule.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var dateNow = dateStuff.myDateTime();
    res.end(dateNow);
    // res.end('Hello World!');
}).listen(8080);
