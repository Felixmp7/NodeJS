const fs = require("fs");

// Leer directorios sincronicamente

// const files = fs.readdirSync('../../file-system-03');
// console.log(files);


// Leer Asincrónicamente


const files = fs.readdir('../../file-system-03', (error,filesInDir) => {
  if (error) {
    throw error;
  } else {
    console.log(filesInDir);
  }
});

console.log('Leyendo...');