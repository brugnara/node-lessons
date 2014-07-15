// data una stringa in input, restituire un OGGETTO avente come chiave la parola e come valore, il totale delle occorrenze.
// esempio:
// input: 'sono felice sono serio'
// output:
// {
//   sono: 2,
//   felice: 1,
//   serio: 1
// }

var str = 'sono felice sono serio';
var obj = {};
str.split(' ').forEach(function(el) {
  obj[el] = (obj[el] || 0) + 1;
});

console.log(obj);