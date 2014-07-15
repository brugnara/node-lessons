var pattern = /che/;
var str = 'Ma chi è che fa quel *** de rumore li. Me par che i sia, me par che i fae aposta! Che diamine!';

// rimpiazziamo 'che' con CHE. Ma accade qualcosa di inatteso...
var replaced = str.replace(pattern, 'CHE');
console.log(replaced);

// di default, sostituisce solo UNA entry. Come risolvere?
// Con i flags ( o modifiers)! RIFERIMENTO: http://www.w3schools.com/jsref/jsref_obj_regexp.asp
pattern = /che/g;
replaced = str.replace(pattern, 'CHE');
console.log(replaced);

// tuttavia, il replace avviene case sensitive.
// Il modifier che fa la ricerca 'insensitive' è facilmente ricordabile: i
pattern = /che/gi;
replaced = str.replace(pattern, 'CHE');
console.log(replaced);
