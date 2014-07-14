var len = 0;

setTimeout(function() {
  len = 10;
}, 0);

setTimeout(function() {
  len = 20;
}, 100);

console.log(len);

setTimeout(function() {
  console.log(len);
}, 0);