const events = require('events');

const EventEmitter = events.EventEmitter;

const ee = new EventEmitter();

ee.once('cansado', () => {
  console.log('El jugador está cansado por primera vez')
})
ee.on('cansado', (dorsal) => {
  console.log(`El jugador numero ${dorsal} está cansado`);
})
ee.on('herido', (dorsal) => {
  console.log(`El jugador numero ${dorsal} está herido`);
})

ee.emit('cansado', 7);
ee.emit('cansado', 10);
ee.emit('cansado', 11);
ee.emit('cansado', 13);

ee.removeAllListeners('cansado');
// ee.removeAllListeners();

ee.emit('cansado', 6);
ee.emit('cansado', 3);
ee.emit('herido', 11);