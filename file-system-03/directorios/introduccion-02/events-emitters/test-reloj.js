const Reloj = require('./reloj');
let seg = 0

const reloj = new Reloj();

reloj.on('tick-tock', () => {
  seg += 1;
  if (seg == 6) {
    process.exit()
  }
  console.log(seg)
})

reloj.once('tick-tock', () => {console.log('First')})