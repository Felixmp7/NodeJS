const http = require('http');
const fs = require('fs');
// console.log(http);

const host = '127.0.0.1';
const port = '9000';


// Para crear un servidor, simplemente utilizamos el método createServer que recibe un callback

const server = http.createServer( (llamado, response) => {
  // Investigar primer parámetro que recibe createServer
  console.log(llamado)
  if (llamado.url == '/') {
    fs.readFile('./index.html', 'UTF-8', (error,content) => {
      response.writeHead(200, {
        "Content-Type": "text/html"
      });
      response.end(content);
    })
  } else {
    response.writeHead(404, {
      "Content-Type": "text/html"
    });
    response.end('<h1>Error 404, la pagina no existe</h1>');
  }

})

//Evento para escuchar en un puerto y un host
server.listen(port, host, () => console.log(`El server está corriendo en ${host}:${port}`));