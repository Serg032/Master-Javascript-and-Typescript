let title = "Lord of de Rings";
let genre = "Action";
let time = "2 hours";

let film = {
  title,
  genre,
  time,
  [genre + " 2022"]: "YEEAAA",
  show() {
    // Método
    return `${this.title}, ${this.genre}, ${this.time}`;
  },
};
console.log(film);
console.log(film.show());
console.log(Object.values(film));
console.log(Object.entries(film));

Object.entries(film).forEach(([key, value]) => {
  console.log(key, value);
});
