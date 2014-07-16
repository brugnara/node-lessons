var expect = require('chai').expect;

var arr = [1, 2, 3, 4];

var mappingFn = function(el) {
  if ((el % 2)) {
    return el;
  } else {
    return el * 2;
  }
  // return (el % 2) ? el : (el * 2);
};

// fn deve sommare i numeri moltiplicando per 2 quelli pari
var reduceFn = function(prev, curr) {
  return prev + curr;
};

var res = arr.map(mappingFn).reduce(reduceFn);
console.log(res);
expect(res).to.equal(16);