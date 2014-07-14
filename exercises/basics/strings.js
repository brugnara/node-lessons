var expect = require('chai').expect;

var string = 'con uno stile di moto così, ed un fisico del genere. può accompagnare solo';

var splitter = function(str) {
  // fix this to return str splitted into phrases.
};

var upperCaser = function(str) {
  // this should return the first char of a given string
};

var joiner = function(ar) {
  // this should return a string with phrases.
};

// result should contain the combined result.
var result = null;

// Do not touch the code after this line!

var splitted = splitter(string);
expect(splitted).to.equal(2);

var upperCased = upperCaser('ciao come va');
expect(upperCased).to.equal('Ciao come va');

var joined = joiner(['Ciao come va', 'Molto bene grazie']);
expect(joined).to.equal('Ciao come va. Molto bene grazie');

expect(result).to.equal('Con uno stile di moto coì, ed un fisico del genere. Può accompagnare solo.');