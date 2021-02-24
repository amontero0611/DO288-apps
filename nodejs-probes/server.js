var http = require('http'); 

// Create a server object 
http.createServer(function (req, res) { 
	
	// http header 
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	
	var url = req.url; 
	
	if(url ==='/health') { 
		res.write('Vivito y coleando!\n'); 
		res.end(); 
	} 
	else if(url ==='/ready') { 
		res.write('OK!\n'); 
		res.end(); 
	} 
	else { 
		res.write('Hello World!\n'); 
		res.end(); 
	} 
}).listen(8080, function() { 
	
	// The server object listens on port 8080 
	console.log("server start at port 8080"); 
}); 
