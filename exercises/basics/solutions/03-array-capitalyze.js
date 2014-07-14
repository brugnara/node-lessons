var expect = require('chai').expect;

Array.prototype.capitalyze = function() {
  return this.map(function(item, i) {
    return item[0].toUpperCase() + item.slice(1);
  });
};

var arr = 'ciao come va'.split(' ');

expect(arr.capitalyze().join(' ')).to.equal('Ciao Come Va');