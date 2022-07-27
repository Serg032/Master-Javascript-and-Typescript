let nombre = "Sergio";
let number = 32;
let decimal = 234.5;

let mayor_edad = true;
let menor_edad = Boolean(0); // 1 es true, 0 es false.

let arr = [123, 123, 123];

console.log(
  typeof nombre,
  typeof number,
  typeof decimal,
  typeof menor_edad,
  typeof arr
);

let film = {
  title: "Space Jam",
  genre: "Cartoons",
  year: 1996,
  director: "Tarantino",
  mostrar: function () {
    return `
    **** SPECIAL FILM **** \n
    Title: ${this.title} \n
    Genre: ${this.genre} \n
    Country: ${this.country} \n 
    Year: ${this.year} \n
    `;
  },
};

film.country = "EEUU";
delete film["year"];

console.log(film.mostrar());
for (property in film) {
  console.log("values", film[property]);
}
