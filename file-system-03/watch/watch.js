const fs = require("fs");

const config = JSON.parse(fs.readFileSync('config.json', 'UTF-8'));
console.log(fs.readFileSync("config.json", "UTF-8"), 'Archivo en formato JSON');
console.log(config, 'Archivo transformado a objeto');

// fs.watchFile('Ruta del archivo', callback(version actual, version anterior))
fs.watchFile('config.json', (act, prev) => {
  // console.log(act);
  // console.log(prev);
  console.log('El archivo cambió');
  const config = JSON.parse(fs.readFileSync("config.json", "UTF-8"));
  console.log(config);
  // process.exit()
})



