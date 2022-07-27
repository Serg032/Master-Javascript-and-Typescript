const saludo = (persona = "Usuario", año = 2022) => {
  return `Te mando un saldo ${persona}, año ${año}`;
};

console.log(saludo());
console.log(saludo("Carlos", 1993));

// JSON

let shop = {
  name: "GAME",
  games: ["GTA", "WWE", "FIFA"],
  //   show: function () {
  //     console.log(`
  //     Shop Name: ${this.name}
  //     Games to sell: ${this.games}
  //     `);
  //   },
  show: () => {
    console.log(`
    Shop Name: ${shop.name}
    Games to sell: ${shop.games.forEach((game) => {
      console.log(game);
    })}
    `);
  },
};

shop.show();
