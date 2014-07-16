/* Usando il modulo vrutils incluso filtra l'array.
  Il modulo fornisce fra le tante, la funzione:

  isDivisibleBy(item, number,callback).
    dove callback ha la seguente struttura:
      callback(err, isDivisible);

  SCOPO: filtrare l'array dato, in modo che il risultante abbia al suo interno soli numeri divisibili per 3!
  HINT: entrambe le funzioni sono asyncrone!!!

*/
var vrutils = require('./vrutils');

// esempio utilizzo 1
vrutils.isDivisibleBy(5, 2, function(err, isDivisible) {
  console.log(isDivisible);
});

// esempio 2
vrutils.getJson('pippo', function(err, json) {
  console.error(err);
  console.log(json);
});

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// QUI IL TUO CODICE!
