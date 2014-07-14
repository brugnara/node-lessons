var MyClass = function() {
  this.prop = 'ciao';
};

MyClass.prototype.fn = function() {
  console.log(this.prop);
};

var mc = new MyClass();
mc.fn();