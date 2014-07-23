
var restify = require('restify');

var server = restify.createServer();
var port = 9999;

// deve chiamare l'api documentata su http://www.jsontest.com/ e tornare l'IP con altri dati, ecco un esempio:
var result = {
  ip: '1.2.3.4'
};
server.get('/ip', function(req, res, cb) {
  // do!
  cb();
});

// questa funzione
// 1. va fatta funzionare
// 2. dovrà accettare in post (form based, quindi non come JSON o come query) un parametro 'text'.
// 3. dovrà quindi restituire in plain text l'md5 ottenuto dalle api jsontest.com
// 4. occhio ai tranelli
server.post('/md5', function(res, req, cb) {
  cb();
});

server.listen(port, function() {
  console.log('Listening on port', port);
});