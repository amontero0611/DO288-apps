var http = require('http'); 
var os = require("os");
var hostname = os.hostname();

// Create a server object 
http.createServer(function (req, res) { 
	
	// http header 
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	
	var url = req.url; 
	
	if(url ==='/health') { 
        res.write('Bien gracias! desde el pod ' + hostname +'\n'); 
        console.log('Bien por ahora');
		res.end(); 
	} 
	else if(url ==='/ready') { 
        res.write('Listo! desde el pod ' + hostname + '\n'); 
        console.log('Listo para la guerra');
		res.end(); 
	} 
	else { 
		res.write('Hola! desde el pod '+ hostname +'\n'); 
		res.end(); 
	} 
}).listen(8080, function() { 
	
	// The server object listens on port 8080 
	console.log("server start at port 8080"); 
}); 
