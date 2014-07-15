var util = require('util');

console.log('This ' + 'is a concatenated string. A number here: ' + 1);

var arr = [1, 2, 3, 4];
console.log('What happens concatenating an array here?' + arr);
// Accade che viene invocato il metodo toString() (java style)

// cosa accade per un oggetto?

var obj = {
  key1: 1,
  key2: 'stringa',
  key3: true,
  key4: {
    subKey: false
  }
};
console.log('Concatenating an obj: ' + obj);

// concatenazione con console.log (valida solo per nodejs!)
console.log('String1', 'String2', 123, false);

// console.log/error/debug eccetera possono formattare come prinft/sprintf del C
console.log('Ciao numero: %d, ed una stringa %s', 12, 'hola');

// essendo js non fortemente tipizzato, potremmo scrivere anche:
console.log('Ciao numero: %s, ed una stringa %s', 12, 'hola');

// ma questa, darà un risultato ben diverso!
console.log('Ciao numero: %d, ed una stringa %s', 'non sono unnumero!', 'hola');

// se console.log è comodo per output, se vogliamo lavorare su stringhe, useremo il modulo util
var pattern = 'Ciao %s come stai? - %s, grazie!';
var str = util.format(pattern, 'Daniele', "Bene");
console.log(str);

// Possiamo usarlo esattamente come console.log, per concatenare:
str = util.format('Hello', 'World', '!');
console.log(str);

// E combinando le cose (vale anche per console.log
str = util.format(pattern, 'Daniele', 'Male', 'Men despiar!');
console.log(str);

// replace
str = 'ciao come va. Come vot che la vae. Son chi che me rompo le balotole';
console.log(str.replace('che', 'CHE'));