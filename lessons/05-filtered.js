var arr = 'ciao come va'.split(' ');

var filtered = arr.filter(function(item) {
  return item != 'va';
});

console.log(filtered);