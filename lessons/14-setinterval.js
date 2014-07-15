var fn = function() {
  console.log('fn', Math.random());
};

var fn2 = function() {
  console.log('fn2', Math.random());
};

setInterval(fn, 1000);
setInterval(fn2, 250);