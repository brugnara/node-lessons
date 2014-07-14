var obj = {
  len: 0,
  fn: function(err, data) {
    obj.len = data.length;
    console.log(data);
  }
};

obj.fn(null, 'ciao come va'.split(' '));
console.log(obj.len);