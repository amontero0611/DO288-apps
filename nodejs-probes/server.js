var http = require('http'); 

// Create a server object 
http.createServer(function (req, res) { 
	
	// http header 
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	
	var url = req.url; 
	
	if(url ==='/health') { 
		res.write('Fine!'); 
		res.end(); 
	} 
	else if(url ==='/ready') { 
		res.write('Up!'); 
		res.end(); 
	} 
	else { 
		res.write('Hello World!'); 
		res.end(); 
	} 
}).listen(8080, function() { 
	
	// The server object listens on port 8080 
	console.log("server start at port 8080"); 
}); 
