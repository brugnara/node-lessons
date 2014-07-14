var calc = {
  sum: function(a, b) {
    return parseFloat(a) + parseFloat(b);
  },
  diff: function(a, b) {
    return parseFloat(a) - parseFloat(b);
  }
};

console.log('Module calc loaded!');

module.exports = calc;