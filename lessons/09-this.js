var MyClass = function() {
  this.prop = 'ciao';
};

MyClass.prototype.fn = function() {
  console.log(this.prop);
};

MyClass.prototype.fn2 = function() {
  setTimeout(function() {
    console.log(this.prop);
  }, 0);
};

var mc = new MyClass();
mc.fn();

// cosa accade se usiamo il this all'interno di una callback? Perché accade ciò?
mc.fn2();