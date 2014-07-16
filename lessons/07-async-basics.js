var arr = [1, 2, 3, 4];

var fn = function(item, cb) {
  setTimeout(function() {
    var val = item * 10;
    cb(null, val);
  }, 0);
  return 'CIAO';
};
var i = 0;
arr.forEach(function(item) {
  fn(item,  function(err, val) {
    arr[i++] = val;
    console.log(val);
  })
});
console.log(arr);
console.log('FINE ESECUZIONE... Sicuri?');

setTimeout(function() {
  console.log(arr);
}, 200);

var arr2 = [101, 202, 303, 404];

arr2 = arr2.map(function(item) {
  fn(item,  function(err, val) {
    console.log(val);
    return val;
  });
});

console.log('ARR2:', arr2);

setTimeout(function() {
  console.log('ARR2 dopo 200ms:', arr2);
}, 200);