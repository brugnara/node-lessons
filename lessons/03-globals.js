var fn = function(data) {
  len = data.length;
};

function fn2(data) {
  var len = data.length;
  console.log(len);
};

var arr = 'ciao come va'.split(' ');

// fn(arr);
fn2(arr);
console.log(len);