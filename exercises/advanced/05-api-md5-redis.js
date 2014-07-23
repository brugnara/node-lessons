
var restify = require('restify');
var redis = require('redis');

var server = restify.createServer();
var port = 9999;

// questa funzione è la stessa dell'esercizio 4. Invece di usare l'oggetto cache, questa volta useremo redis per
// gestire le chiavi. La chiave inserita nella cache, deve scadere dopo 1 minuto! Una richiesta per una stessa parola
// fatta sopo un minuto, dovrà quindi richiamare api esterna!
server.post('/md5');

server.listen(port, function() {
  console.log('Listening on port', port);
});