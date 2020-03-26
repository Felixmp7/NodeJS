const fs = require('fs');

// Para renombrar archivos o directorios

// fs.rename('Nombre previo', 'Nombre nuevo', callback(error))
// fs.rename('leer.js','read.js', error => {
//   if (error) {
//     throw error;
//   } else {
//     console.log('El archivo fue renombrado');
//   }
// })


fs.rename(
  "introduccion-02/primer-modulo",
  "introduccion-02/first-module",
  error => {
    if (error) {
      throw error;
    } else {
      console.log("El directorio fue renombrado");
    }
  }
);

// Tambien puedo usar rename para mover archivos o directorios, simplemente cambiando el path en los params