var http = require('http');
const { type } = require('os');
http.createServer(function(req, res){
    res.writeHead(200,{'content-type':'text/html'});
    res.end("hello word");
}).listen(8090)