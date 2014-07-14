var arr = 'ciao come va'.split(' ');

arr.forEach(function(item) {
  console.log(item);
});

var mapped = arr.map(function(item) {
  return item.toUpperCase();
});

console.log(mapped);