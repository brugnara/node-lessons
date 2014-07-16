var json = {
  key: 'valore',
  key2: 'valore2',
  nested: {
    key: 'valore3',
    key2: {
      key: 'cippalippa'
    }
  }
};

console.log(json.key);

console.log(json.nested.key2.key);

console.log(json.nested.key2.key4444);

// console.log(json.nested.key4444.key);

var funzioneEsternaCheMiRitornaUnValore = function() {
  return oggettoInesistente.key0;
};

var fn = function(json, cb) {
  var err = null;
  var ret = null;
  try {
    // console.log(json.nested.key4444.key);
    var valore = funzioneEsternaCheMiRitornaUnValore();
    ret = valore;
  } catch(e) {
    err = e;
  }
  cb(err, ret);
};

fn(json, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    if (data === 0) {
      throw new Error('division by zero');
    }
    console.log(10/data);
    console.log('Brao mona');
  }
});

console.log('Post eccezione');

/*
* 1 == '1' => true
* 1 == 1 => true
* 1 === '1' => false
* */