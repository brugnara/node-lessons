var arr = 'la solita frase inutile ma comunque comoda! Inserisco un altro ma qui per rompere!'.split(' ');

var pos;
console.log(1, pos = arr.indexOf('ma'));

// Offset
console.log(2, arr.indexOf('ma', pos + 1));

console.log(3, arr.indexOf('aldebaran'));

// Non funziona!
console.log(4, arr.indexOf(/^c/));
