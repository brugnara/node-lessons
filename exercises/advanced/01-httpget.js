var request = require('superagent');

var url = 'http://localhost:9999/hello/mona';

for(var i=0;i<100;i++) {
  request.get(url).end(function(res) {
    if (res.ok) {
      console.log('Perfect!');
    } else {
      console.error('Ostia!');
    }
  });
}