const http = require('http');
// console.log(http);

const host = '127.0.0.1';
const port = '9000';


// Para crear un servidor, simplemente utilizamos el método createServer que recibe un callback

const server = http.createServer( (llamado, response) => {
  // Lo que quiero que el server responda
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })

  response.end('<h1>Hola Mundo!</h1>');
})

//Evento para escuchar en un puerto y un host
server.listen(port, host, () => console.log(`El server está corriendo en ${host}:${port}`));