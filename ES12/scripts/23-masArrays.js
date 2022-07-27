let people = ["John", "Jossef", "Toni", "Serg", "Virginia"];
let countries = [
  {
    name: "España",
    area: "Europe",
  },
  {
    name: "Francia",
    area: "Europe",
  },
  {
    name: "China",
    area: "Asia",
  },
];
// Some
let exists = people.some((name) => name === "Victor");
console.log(exists);

// every

let isEqual = countries.every((country) => country.area === "Europa");
console.log(isEqual);

// Map => Devuelve Array y el forEach NO.
people.map((person) => console.log(person + " Fullname"));

// Reduce // Ejecuta funcion (reductora) sobre cada elemento de un Array, devolviendo un unico valor

console.log(
  people.reduce((acumulador, valorActual) => {
    let actual_value = `, ${valorActual}`;
    return acumulador + actual_value;
  })
);
