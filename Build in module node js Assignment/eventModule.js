
const EventEmitter = require('events');
const myEvent = new EventEmitter();


myEvent.on('Subscribe', () => {
    console.log('Thanks For Subscribing College Wallah!')});
    
myEvent.on('College Wallah' , () =>{});    


myEvent.emit('Subscribe' , 'College Wallah');


