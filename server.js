const http = require('http');

const server = http.createServer( (req,res) => {
	res.end('Hey it works');
});

server.on('clientError',(err,socket) => {
	socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen('8000',"dev.tr.fuelx.com", () => {
	console.log('hey we are connected')
});