var http = require('http');
const { type } = require('os');
http.createServer(function(req, res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("first program");
    res.end("Surya Narayan Chaudhary");
}).listen(9000)