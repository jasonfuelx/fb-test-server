const http = require('http');

const server = http.createServer( (req,res) => {
	res.end('Hey it works');
});

server.on('clientError',(err,socket) => {
	socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(8000,"13.91.97.104", () => {
	console.log('hey we are connected')
});