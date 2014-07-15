var fn = function() {
  console.log('fn', Math.random());
};

var fn2 = function() {
  console.log('fn2', Math.random());
};

var interval1 = setInterval(fn, 1000);
var interval2 = setInterval(fn2, 250);

setTimeout(function() {
  clearInterval(interval1);
  clearInterval(interval2);
}, 5000);