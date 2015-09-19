/**
 * Created by colinjlacy on 9/13/15.
 */
var http = require('http'),
	fs = require('fs');

http.createServer(function (req, res) {
	if(req.url=='/index.html' || req.url=='/') {
		fs.readFile('./webapp/index.html',function(err,data){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	} else {
		var file = __dirname + "/webapp" + req.url;
		fs.readFile(file, function (err, data) {
			res.end(data);
		});
	}
}).listen(8000, "127.0.0.1");

console.log('server listening on port 8000');