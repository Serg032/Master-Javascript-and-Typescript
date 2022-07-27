// Separadores numericos. Permiten meter guiones bajos entre cifras para una mejor legibilidad

let number = 4000000;

let number2 = 5_000_000;
console.log(number);
console.log(typeof number2, number2);

// Replace y ReplaceAll

let phrase = "Motorbike big acc. I Saw another motorbike";
let newPhrase = phrase.replace("Motorbike", "Car");
let secondNewPhrase = phrase.toLowerCase().replaceAll("motorbike", "bicycle");

console.log(phrase);
console.log(newPhrase);
console.log(secondNewPhrase);

// Asignadores logicos

let name = "Serg";
let id = 29;

name ||= id;
name &&= id;

name ??= id;

console.log(name);
