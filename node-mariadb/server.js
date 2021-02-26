var http = require('http'); 
var os = require("os");
var hostname = os.hostname();

const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'mariadb', 
     user:'root', 
     password: 'maria',
     connectionLimit: 5
});

var saludo;

async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
    console.log("Querying...");
    const filas = await conn.query("SELECT 'Hola desde MariaDB' as val");
    filas.forEach((fila) => {
        console.log(fila.val);
        saludo=fila.val;
    })
	//const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
    //console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}

asyncFunction();

// Create a server object 
http.createServer(function (req, res) { 
	
	// http header 
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	
	var url = req.url; 
    
    if(url==='/'){
        res.write('Hola! desde el pod '+ hostname +'\n'); 
		res.end(); 
    } 
	else if(url ==='/mariadb') { 
        res.write('Desde el pod ' + hostname +':\n'); 
        res.write(saludo);
        console.log('Saludando desde MariaDB...');
		res.end(); 
	} 
	else { 
        res.write('Oops!');
        res.end();
	} 
}).listen(8080, function() { 
	
	// The server object listens on port 8080 
	console.log("server start at port 8080"); 
}); 
