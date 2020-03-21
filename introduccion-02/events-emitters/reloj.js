const EventEmitter = require('events').EventEmitter
var util = require("util") // Utils me permite hacer que otro modulo herede las funciones de eventos, en éste caso


const Reloj = function(){
  const self = this;
  setInterval(() => {
    self.emit('tick-tock')
  }, 1000);
}

// util.inherits(Clase que va a heredar, Clase de la que se va a heredar);
util.inherits(Reloj,EventEmitter);
module.exports = Reloj;

