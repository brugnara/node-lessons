var sum = require('./12-module-sum');
console.log(sum(1, 3));

// cache dei moduli!!
var calc = require('./12-module-calc');
var diff = require('./12-module-calc').diff;
console.log(calc.sum(1, 3));
console.log(calc.diff(3, 2));
console.log(diff(3, 2));

// modulo come classe, utile per inheritance
var Calc = require('./12-module-class');

var c = new Calc(5, 4);
console.log(c.sum());
console.log(c.diff());

var c2 = new Calc(5, 4);
console.log(c2.sum());
console.log(c2.diff());