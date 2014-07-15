var arr = [];

for (var i=0;i<5;i++) {
  arr.push({
    key: Math.round(Math.random() * 100)
  });
}

console.log(1, arr);

console.log();

console.log(21, arr.shift());
console.log(22, arr);

console.log();

console.log(31, arr.slice(2));
console.log(32, arr);
console.log(33, arr.slice(1, 3));

console.log();

console.log(41, arr.splice(2));
console.log(42, arr);

// Esercizio: la classe Array ha MOLTE funzioni. Sperimentane alcune! (http://www.w3schools.com/jsref/jsref_obj_array.asp)