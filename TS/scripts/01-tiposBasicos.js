"use strict";
/**
 * Tipos de datos básicos.
 */
let text = "How are you?";
text = "Hola";
// text = 3 // Hay Error
let number = 4;
number = 11.4;
// number = 123,4 // Los numeros decimales en JS son con ".", "," no lo reconoce.
let truee = true;
// truee = 3
// Comodín, cualquier tipo
let cualquier = "Goal"; // Entiende que hay un string, sino se le detalla un tipo en la declaracion
// cualquier = true
let any = 234;
any = "Any working";
console.log(any);
console.log(truee);
console.log(number);
console.log(text);
// Unknown (parecido al any)
let desconocido = "I'm a text";
desconocido = false;
desconocido = false;
if (typeof desconocido === "number") {
    let my_number = desconocido;
    console.log(my_number);
}
else {
    console.log(`${desconocido} is not a number.`);
}
// let my_number:number = desconocido
// console.log(my_number)
