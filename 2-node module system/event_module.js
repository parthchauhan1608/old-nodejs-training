
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

//listener
myEmitter.on('event', () => {
    console.log('Hey Parth you Call Event!!');
  });
  // event raise
  myEmitter.emit('event');

  //let pass argument to listener
  myEmitter.on('event', function(a, b) {
    console.log('your answer', a+b);
  });
  myEmitter.emit('event', 6,7);
  