var async = require('async');

var arr = [1, 2, 3, 4];
var fn = function(item, cb) {
  setTimeout(function() {
    cb(null, item * 10);
  }, 0);
};

async.forEach(arr,  function(item, cb) {
  fn(item,  function(err, val) {
    console.log(val);
    cb(err, val);
  });
}, function(err) {
  console.log('FINE ESECUZIONE');
});

// each
async.each(arr,  function(item, cb) {
  fn(item,  function(err, val) {
    console.log(val);
    cb(err, val);
  });
}, function(err) {
  console.log('FINE ESECUZIONE');
});