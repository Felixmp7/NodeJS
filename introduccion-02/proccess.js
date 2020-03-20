// Process me permite ver procesos
// 1. argv me permite ver y manejar los argumentos que se le pasan a un proceso (FLAGS)

// console.log(process.argv)

// leerOpcion = opcion => {
//   const index = process.argv.indexOf(opcion);
//   if (index === -1) {
//     return false
//   } else {
//     return process.argv[index + 1];
//   }
// }

// const nombre = leerOpcion('-nombre');

// console.log(`El nombre es ${nombre}`);

// // 2. sdtout (standard output) me permite acceder a la salida.

// process.stdout.write("Cual es el apellido: \n") // Si no utilizo el \n , permanece en la misma línea

// // Para permitirle al usuario interactuar con la consola, puedo utilizar un metodo para escuchar un evento.
// // 3. stdin

// process.stdin.on('data', function(apellido){
//   process.stdout.write(`El nombre completo es ${nombre} ${apellido} \n`)
//   process.exit(); // Me sirve para finalizar el proceso automáticamente
// })

// EJERCICIO => SUMA DE NUMEROS HASTA QUE EL USUARIO ESCRIBA UN .

console.log(
  "Escriba una lista de numeros para sumar.",
  `Escriba un '.' para finalizar`
);

let suma = 0;

process.stdin.on('data', function(value){
  const valueTransformed = value.toString().trim();
  const valueValidation = valueTransformed.match(/^[0-9.]*$/);
  // console.log(valueValidation);
  
  if (valueValidation !== null) {
    if (valueTransformed == '.') {
      process.exit();
    } else {
      suma += parseInt(valueTransformed);
    }
  } else {
    return console.log("Debe introducir un valor numérico.");
  }
  // console.log(value.toString().trim()) con éstos metodos convierto a string y elimino espacios en blanco sobrantes
})

process.on('exit', function(){
  process.stdout.write(`La suma total es: ${suma} \n`)
})