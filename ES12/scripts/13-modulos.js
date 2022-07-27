/**
 * Hay que modificar el script del head de HTML type="module"
 * Para pader trabajar con modulos de js hay que estar trabajando
 * un servidor we.
 * Para ello puedo instalar un servidor web local (check node).
 * npm install live-server -g
 * entramos a la carpeta en la que tenenmos el index.html
 * ejecutamos el servidor: live-server .
 *  */
import utils from "./14-mi-modulo.js";
import names from "./14-mi-array.js";

// document.body.style = "background:red";
console.log("Archivo Main de mi proyecto");
utils.imprimirArray(names);
utils.saludo("Sergio");
