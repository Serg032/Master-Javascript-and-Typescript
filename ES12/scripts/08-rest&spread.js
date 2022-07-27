// Spread
let heroes = ["Batman", "Spiderman", "Superman"];

console.log(...heroes);

const showHeroes = (hero1, hero2) => {
  console.log(`
    *** Fav Heroes ***
        - ${hero1}
        - ${hero2}
    end.
    `);
};

showHeroes(...heroes);

let superHeroes = ["Flash", "Catwoman", ...heroes];
console.log(superHeroes);

// Rest
const films = (film1, film2, ...moreFilms) => {
  console.log(film1);
  console.log(film2);
  for (const film of moreFilms) {
    console.log(film);
  }
};

films(...superHeroes);
