var MyClass = function(val) {
  this.prop = val;
};

MyClass.prototype.fn = function() {
  console.log('fn', this.prop);
};

MyClass.prototype.fn2 = function() {
  setTimeout(function() {
    console.log('fn2', this.prop);
  }.bind(this), 0);
};

// O meno elegantemente:
MyClass.prototype.fn3 = function() {
  var self = this;
  setTimeout(function() {
    console.log('fn3', self.prop);
  }, 0);
};

var mc = new MyClass('ciao');
mc.fn();

// cosa accadrà ora?
mc.fn2();
mc.fn3();

var mc2 = new MyClass('pippo');

mc.fn.bind(mc2).call();
