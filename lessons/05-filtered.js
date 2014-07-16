var arr = 'ciao come va'.split(' ');

var filtered = arr.filter(function(item) {
  return item != 'va';
});

Array.prototype.filtroMio = function() {
  if (arr.length == 2) {
    return this
  }
  return [];
};

var ar2 = arr.filtroMio();
console.log(ar2);

console.log(filtered);