const fs = require("fs");

// fs.unlink('Ruta del archivo', callback(error))

const fileName = "test.txt";
fs.unlink(fileName, error => {
  if (error) {
    throw error;
  } else {
    console.log(`El archivo ${fileName} fue borrado exitosamente`);
  }
})

console.log('Comenzando la depuración...');
