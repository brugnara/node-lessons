// Questo serve per alcuni esercizi.
// lo vedremo meglio più avanti

var restify = require('restify');

var server = restify.createServer();
var port = 9999;

// Fixare! Deve tornare la somma ed ok dovrà essere false se passo qualcosa che non è un numero!
server.get('/calc/sum/:a/:b', function(req, res, cb) {
  console.log('Called sum with params:', req.params);
  res.json({
    ok:true,
    params: req.params,
    result: req.params.a + req.params.b
  });
  cb();
});

// deve ricevere un json con a e b come parametri e restituire un json con la risposta!
// gestire sempre in ok l'errore se non arrivassero numeri come parametro
server.post('/calc/sub', function(req, res, cb) {
  // do!
  cb();
});

server.listen(port, function() {
  console.log('Listening on port', port);
});