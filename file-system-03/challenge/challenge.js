const fs = require('fs');

fs.access('solved',error => {
  if (error) {
    fs.mkdirSync('solved');
    let levelNumber = ['1','2','3'];
    levelNumber.map( level => {
      fs.mkdirSync(`solved/level${level}`)
    });
    console.log(`Las carpetas nivel 1,2 y 3 fueron creadas con éxito`);

    // Una vez creadas las carpetas... empezar a mover los archivos

    const files = fs.readdirSync('temp');
    // console.log(files);

    files.map( file => {
      // console.log(file.length);
      if (file[9] == 1) {
        fs.renameSync(`temp/${file}`, `solved/level1/${file}`)
      }
      else if (file[9] == 2) {
        fs.renameSync(`temp/${file}`, `solved/level2/${file}`);
      }
      else if (file[9] == 3) {
        fs.renameSync(`temp/${file}`, `solved/level3/${file}`);
      }
    })

    console.log('Se movieron los archivos!');
    // Borrar la carpeta temp
    fs.unlinkSync('temp');
    console.log('Carpeta temp borrada')

    

  } else {
    console.log('La carpeta solved ya existe');
  }
})

// console.log('')