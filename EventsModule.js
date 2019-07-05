//event module helps us to bring event driven programming to node.js

// we declare a variable EventEmitter , which will use require method to call the module events.
const EventEmitter = require('events');

// we then need to create an instance of the eventEmitter 
const eventEmit = new EventEmitter();

// now we need to specify what the listner will do to listen for the functions that will be evoked when 
// the emitter will raise and event


eventEmit.on('TutorialPractise',()=>{

  console.log('event started , and the listner listened');

});

// to raise the event we need to emit the event
// this raises the event 'TutorialPractise'
eventEmit.emit('TutorialPractise');


