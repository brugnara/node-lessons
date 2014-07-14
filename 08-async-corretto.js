var async = require('async');

var arr = [1, 2, 3, 4];
var fn = function(item, cb) {
  setTimeout(function() {
    cb(null, item * 10);
  }, 0);
};

async.forEach(arr,  function(item, cb) {
  fn(item,  cb);
}, function(err) {
  console.log('FINE ESECUZIONE');
});