"use strict";
/**
 * En el caso de tener mas de un archivo Typescript,
 * para hacerlo automatico:
 * tsc *.ts -w
 * tsc -w.
 * tsc -p ./ -w.
 */
let date = new Date();
console.log(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
