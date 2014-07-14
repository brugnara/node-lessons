var expect = require('chai').expect;

var arr = [1, 2, 3, 4];

// fn deve sommare i numeri moltiplicando per 2 quelli pari
var fn = function(prev, curr) {
  return prev + ((curr % 2 == 0) ? curr*2 : curr);
};

expect(arr.reduce(fn)).to.equal(16);