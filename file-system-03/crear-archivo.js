// Crear Archivos

const fs = require('fs');

const texto = 'Aprendiendo Node.js Fácilmente';

// fs.writeFile(Nombre del Archivo, Texto, (error) => {
//   manejar errores
// })

// Éste llamado es asíncrono, debido a que Node lee que va a comenzar a escribir un archivo
// y salta a la siguiente linea (console.log('Comenzando...')) mientras que el callback se añade a la cola de tareas
fs.writeFile('Felix', texto, (error) => {
  if (error) {
    throw error;
  } else {
    console.log('El archivo fue creado exitosamente');
  }
})

console.log('Comenzando a escribir el archivo...')