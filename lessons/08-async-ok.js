var async = require('async');

var arr = [1, 2, 3, 4];
var fn = function(item, cb) {
  setTimeout(function() {
    cb(null, item * 10);
  }, 0);
};


async.series([
  function(cb) {
    async.forEach(arr,  function(item, cb) {
      fn(item,  function(err, val) {
        console.log(val);
        cb(err, val);
      });
    }, function(err) {
      console.log('FINE ESECUZIONE');
      cb(err);
    });
  },
  function(cb) {
    fn(2002, cb);
  }
], function(err){
  console.log('Ho finito ancora');
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