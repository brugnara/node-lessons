var arr =  [1, 2, 3, 4];

var reduced = arr.reduce(function(prev, curr) {
  return prev + curr;
});

console.log(reduced);