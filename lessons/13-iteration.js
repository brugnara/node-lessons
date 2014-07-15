// array iterations

var arr = [1, 2, 3, 4];

arr.forEach(function(item) {
  console.log(item);
});

var len = arr.length;

for (var i=0;i<len;i++) {
  console.log(arr[i]);
}

var i = 0;
for (;i<len;i++) {
  console.log(arr[i]);
}

i = 0;
for (;i<len;) {
  console.log(arr[i++]);
}

i = 0;
while(i<len) {
  console.log(arr[i++]);
}

// object iteration

var obj = {
  key1: 1,
  key2: 2,
  key3: 3,
  key4: 4
};

for (var k in obj) {
  var el = obj[k];
  console.log(k, el);
}

obj.nested = {
  subKey1: 11,
  subKey2: 12,
  subKey3: 13,
  subKey4: 14
};

var fn = function(obj) {
  for (var k in obj) {
    console.log(k, obj[k]);
  }
};

fn(obj);

// ricorsiva!
var fn2 = function(obj) {
  for (var k in obj) {
    var el = obj[k];
    if (typeof el === 'object') {
      fn2(el);
    } else {
      console.log(k, el);
    }
  }
};

fn2(obj);