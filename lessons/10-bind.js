var MyClass = function(val) {
  this.prop = val;
};

MyClass.prototype.fn = function() {
  console.log(this.prop);
};

var mc = new MyClass('ciao');
mc.fn();

var mc2 = new MyClass('pippo');

mc.fn.bind(mc2).call();
