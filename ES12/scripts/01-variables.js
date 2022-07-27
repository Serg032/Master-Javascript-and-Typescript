// Javascript Moderno, Ecmascript 2021, ES12, ES.NEXT

// Los .js se añaden al html, como <script>, en el <head> o al final del <body>.

// Variables: var, let, const

// Var: ámbito global o funcional
var nombre = "Sergio Radigales";

function mostrarNombre() {
  // variables solo dispoinible en la funcion (ambito dentro)
  var nombre = "Pepe";
  var apellidos = "Radigales";
  console.log("Dentro", nombre, apellidos);
}

mostrarNombre();

console.log("Fuera", nombre);

// Let: ámbito de bloque (ahorro de memoria)

let pais = "España";

console.log(pais);

function mostrarPais() {
  console.log(pais);
}

mostrarPais();

if (pais == "España") {
  let continente = "Europa";
  console.log(continente);
}

// console.log(continente); ERROR (ahorro de memoria)
// continente no accesible desde fuera del bloque.

// const: constantes o variables que su contenido no es variable.
