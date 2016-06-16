const http = require('http');
const fs = require('fs');

const server = http.createServer( (req,res) => {

	const requestHeader = JSON.stringify(req.headers);

	fs.appendFile('view-header-logs.json', `${requestHeader}\n` , (err) => {
		if(err) throw err;
		console.log('The data has been appended to the view-header-logs.json file');
	})
	res.writeHead(200);
	res.end('Everything Works');
});

server.on('clientError',(err,socket) => {
	socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(8000,"127.0.0.1", () => {
	console.log('hey we are connected')
});