var util = require('util');
// entriamo nel vivo con qualcosa di più specifico
// estraiamo dall'array di parole le sole contenenti la lettera h (minuscola)

// creiamo array
var str = 'Che bella frase piena di chi cosa come quando? Hotel miralago, ivi compreso un baobab in giardino. Charly chaplin. MITICI';
var arr = str.split(' ');
var patt = new RegExp('h');

var filtered = arr.filter(function(el) {
  return el.match(patt);
  // potevamo usare anche:
  // return el.match(/h/);
});
console.log(1, filtered);

// Vediamo ora di estrarre da arr le parole che iniziano per c (minuscole e maiuscole)
filtered = arr.filter(function(el) {
  return el.match(/^c/i);
});
console.log(2, filtered);

// Ora quelle che finiscono con i (minuscola)
filtered = arr.filter(function(el) {
  return el.match(/i$/);
});
console.log(3, filtered);

// Proviamo a capire perché esiste RegExp, essendo più comodo /pattern/!
// Cosa fare se volessimo estrarre le parole che iniziano e finiscono con la stessa lettera?
// dovremo costruire il pattern al volo! Vediamo come
filtered = arr.filter(function(el) {
  var char = el[0];
  var pattern = util.format('%s.*%s', char, char);
  var re = new RegExp(pattern);
  return el.match(re);
});
console.log(4, filtered);

// proviamo ad estrarre da una stringa, solo i numeri.

// Come mai questa non funziona?
str = 'Stringa con numeri 12345 ed anche un bel 01234567. Come capire quale estrarre?';
console.log(5, str.match(/\d/));

// Proviamo il modificatore /g!
console.log(6, str.match(/\d/g));

// Però, noi vogliamo il numero intero!
console.log(7, str.match(/.*\d+.*/));

// non basta. Ora sappiamo che la stringa matcha la nostra re ma non ci da informazioni utili
console.log(8, str.match(/(\d+)/g));

// PErfetto! Prendiamo ora solo i numeri di 5 cifre \b dice che deve essere una parola univoca. Altrimenti matcherebbe
// tutti i numeri lunghi almeno 5 tagliandoli. Provateci!
console.log(9, str.match(/\b(\d{5})\b/g));
