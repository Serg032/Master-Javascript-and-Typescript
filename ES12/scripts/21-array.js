// Buscar en un Array // Find

let people = ["John", "Jossef", "Toni", "Serg", "Virginia"];

let search = people.find((person) => person === "Jossef");
let search1 = people.find((person) => person.length === 4); //Devuelve la primera coincidencia

// Devuelve coincidencia o undefined

console.log(search);
console.log(search1);

// Buscar en un array // findIndex

let search2 = people.findIndex((person) => person === "Serg");
// Devuelve el indice, si no lo encuentra -1
console.log(search2);

// arrayFrom. Crea array basandose en objeto iterable.

let arrayLetras = Array.from("sergioradigales");
console.log(arrayLetras);

let arrayNumerosCuadrado = Array.from([1, 2, 3, 4, 5, 6], (number) =>
  Math.pow(number, 2)
);
console.log(arrayNumerosCuadrado);

// let test = Array.from(people, people + "from");
// console.log(test);

// Comprobar si existe un elemento en un array // includes

console.log(people.includes("Sergio"));

// Filtrar arrays // filter

let newPeople = people.filter((person) => person.length > 4);
console.log(newPeople);
