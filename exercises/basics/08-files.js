// scrivi su un file, 10 righe contenenti ognuna un numero casuale da 50 a 200.
// devi scrivere una riga per volta, aspettando tanti millisecondi quanto è il numero da scrivere,
// fra una scrittura e l'altra. NON importa l'ordine con cui sarà scritto il file.
// Lo scopo è essere CERTI che TUTTO sia stato scritto.
// Stampa un OK riga # salvata per ogni riga ed un OK FINITO a SCRITTURA COMPLETA

// VIETATO l'uso di funzioni sincrone.
var fileName = 'chupa_cabra.txt';
var async = require('async');
var fs = require('fs');
var arr = [];

function agg() {
  return Math.round(Math.random() * (200-50)) + 50;
};

for (var i=0;i<10;i++) {
  var rnd = agg();
  arr.push(rnd);
  //
}
/*
async.forEach(arr,  function(item, cb) {
  fn(item,  function(err, val) {
    console.log(val);
    cb(err, val);
  });
}, function(err) {
  console.log('FINE ESECUZIONE');
  cb(err);
});
*/

async.forEach(arr, function(item, cb) {
  setTimeout(function() {
    fs.appendFile(fileName, item + '\n', function(err) {
      if (!err) {
        console.log('OK');
      } else {
        console.error(err);
      }
      // cb(err);
      cb(new Error('cazzo dio'));
    });
  }, parseInt(item, 10));
}, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('OK FINITO');
  }
});

