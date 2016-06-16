const http = require('http');
const fs = require('fs');

const server = http.createServer( (req,res) => {

	const requestHeader = JSON.stringify(req.headers);

	fs.appendFile('view-header-logs.json', `${requestHeader}\n` , (err) => {
		if(err) throw err;
		console.log('The data has been appended to the view-header-logs.json file');
	})
	res.statusCode = 200;
	res.end('Hey it works');
	console.log(typeof req.headers);

});

server.on('clientError',(err,socket) => {
	socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(8000,"127.0.0.1", () => {
	console.log('hey we are connected')
});