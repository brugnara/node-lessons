var ee = require('event-emitter');

var emitter = ee();

emitter.on('hi', function(args) {
  console.log('first hi!', args);
});

setTimeout(function() {
  emitter.emit('hi', {
    hello:'world'
  });
}, 5000);

return;

// What happens if we add one more on?
emitter.on('hi', function(args) {
  console.log('second hi!', args);
});