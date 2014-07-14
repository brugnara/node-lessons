var arr = [1, 2, 3, 4];
var fn = function(item, cb) {
  setTimeout(function() {
    var val = item * 10;
    cb(null, val);
  }, 0);
};

arr.forEach(function(item) {
  fn(item,  function(err, val) {
    console.log(val);
  })
});

console.log('FINE ESECUZIONE... Sicuri?');