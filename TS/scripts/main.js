"use strict";
/**
 * Fichero de configuracion ts: tsc -init
 * Compilar un fichero ts: tsc "fichero.ts"
 * Si hacemos continuamente cambios en el fichero ts,
 * deberiamos volver a compilar el archivo para crear
 * un fichero .js y añadirlo al index (head).
 * Para ello necesitamos el modo WATCH. tsc "fichero.ts" -w.
 */
let nname = "Sergio";
let web = "www.sergio.es";
console.log(`The name is ${nname}. The web is ${web}`);
console.log(`Hi from SRC inside.`);
// let datalist = document.querySelector("#techs")
// let option1 = document.createElement("option").value = "Vue.js"
// let option2 = document.createElement("option").value = "Next.js"
// let option3 = document.createElement("option").value = "React.js"
// let option4 = document.createElement("option").value = "Typescript"
// let option5 = document.createElement("option").value = "Javascript"
// let arr = [option1, option2, option3, option4, option5]
// for (const option of arr) {
//     datalist?.appendChild(option)
// }
