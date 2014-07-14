var myVal = 'cippalippa';

var obj = {
  hello: 'world',
  bool: true,
  numeric: 2,
  external: myVal,
  nullValue: null,
  'complex-name': 'value',
  nested: {
    obj: {
      key1: 'val1'
    },
    key2: 'val2'
  }
};

console.log(JSON.stringify(obj));