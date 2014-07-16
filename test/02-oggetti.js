var extend = require('util')._extend;
// var obj2 = extend({}, obj1);

var arr = 'ciao come va!'.split(' ');
var arr2 = extend([], arr);

//var arr2 = arr.map(function(el) {
//  return el;
//});

arr.push('Bene grazie');

console.log(arr);
console.log(arr2);

var a = 10;
var b = a;

a+= 10;

console.log(a);
console.log(b);

