
var restify = require('restify');
var cache = {};

var server = restify.createServer();
var port = 9999;

// questa funzione è la stessa dell'esercizio 3, ma bisogna aggiungere uno strato di cache gestita dall'oggetto
// cache. Se una parola è già stata chiesta, dovrà quindi risparmiare la chiamata al servizio esterno e restituire
// il valore esattamente come per esercizio 03
server.post('/md5');

server.listen(port, function() {
  console.log('Listening on port', port);
});