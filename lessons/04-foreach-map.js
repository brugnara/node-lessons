var arr = 'ciao come va'.split(' ');
var fn = function(item) {
  console.log(item);
  return item;
};

arr.forEach(fn);

var mapped = arr.map(function(item) {
  return item.toUpperCase();
});

var result = arr.forEach(fn);

console.log(result);

console.log(mapped);