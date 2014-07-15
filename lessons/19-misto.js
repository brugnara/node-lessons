var fn = function(val) {
  return val * 10;
};

console.log(1, fn(10));
console.log(2, fn(null));
console.log(3, fn());

fn = function(val) {
  return (val || 0) * 10;
};
console.log(4, fn());
