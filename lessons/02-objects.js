var obj = {
  len: 0,
  fn: function(err, data) {
    obj.len = data.length;
    obj.len2 = data.length;
    console.log(1, this.len);
    console.log(2, data);
  }
};

obj.fn(null, 'ciao come va'.split(' '));

obj.valoreCiao = 'pippo';
obj['valoreCiao2'] = 'pippo';

console.log(3, obj.len);
console.log(4, obj.len2);

console.log(5, obj);