// scrivi su un file, 10 righe contenenti ognuna un numero casuale da 50 a 200.
// devi scrivere una riga per volta, aspettando tanti millisecondi quanto è il numero da scrivere,
// fra una scrittura e l'altra. NON importa l'ordine con cui sarà scritto il file.
// Lo scopo è essere CERTI che TUTTO sia stato scritto.
// Stampa un 'OK item' per ogni riga ed un 'OK FINITO' a SCRITTURA COMPLETA

// VIETATO l'uso di funzioni sincrone.
var async = require('async');
var fs = require('fs');

var fileName = 'chupa_cabra.txt';
var arr = [];
for (var i=0;i<10;i++) {
  arr.push(Math.round(Math.random() * (200-1-50)) + 50);
}

var fn = function(row, cb) {
  fs.appendFile(fileName, row, function(err) {
    if (!err) {
      console.log('OK item');
    }
    cb(err);
  });
};

async.each(arr, function(item, cb) {
  setTimeout(function() {
    fn(item + '\n', cb);
  }, parseInt(item, 10));
}, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('OK FINITO');
  }
});
