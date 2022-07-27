// Operador ternario
let persona = ["Sergio Radigales", 29];

if (persona[1] >= 18) {
  // condicion clasica
  console.log("mayor de edad");
} else {
  console.log("Menor de edad");
}

persona[1] >= 18 ? console.log("mayor") : console.log("menor"); // ternaria

// Diferencia entre == y === y != y !==

// == (contenido) no evalua el tipo de dato y === (contenido y tipo de dato)
let edad = 80;
let edad2 = "80";

edad === edad2 ? console.log("igual") : console.log("distinto");
