const fs = require("fs");

// Primero puedo usar el método access para revisar si la carpeta existe o no.

fs.access('introduccion-02', error => {
  if (error) {
    // La carpeta no existe, entonces la creo
    fs.mkdir('test', error => {
      if (error) {
        throw error;
      } else {
        console.log('La carpeta fue creada')
      }
    })
  } else {
    console.log('La carpeta ya existe...')
  }
})