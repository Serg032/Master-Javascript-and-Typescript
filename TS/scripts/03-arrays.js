"use strict";
let people = ["Victor", "Paco", "Fran"];
let years = [2000, 2001, 2002];
// people.push(3) // This doesn't work.
people.push("Antwan");
// years.push(true) // This doesn't work.
console.log(people);
console.log(years);
// Tuplas.
let film = ["Batman", true, 33];
film.push(false);
console.log(typeof film);
console.log(typeof film[0]);
console.log(film.length);
// Enum. Enumeracion. Define un tipo de dato con valores definidos
var PersonalData;
(function (PersonalData) {
    PersonalData["name"] = "Sergio";
    PersonalData["dni"] = "03233333G";
    PersonalData["address"] = "C/Rio Torote";
    PersonalData["city"] = "Madrid";
})(PersonalData || (PersonalData = {}));
console.log("enum type:", typeof PersonalData);
console.log("enum name:", PersonalData.name);
// Castear una variable. Convertir un dato a otro tipo de dato.
/**
 * Number()
 * String()
 */
let unknown_text = 234234;
let formated_text = unknown_text;
console.log(typeof formated_text);
console.log(formated_text);
