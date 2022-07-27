let cars = [];
/**
 * Base de la POO.
 * Molde para crear un abojeto.
 * Crear diferentes elementos similares
 * pero con propiedades diferentes.
 */

class Car {
  // #price = 1000000;
  // _owner = "Carlos";
  /** Propiedades o atributos.
   * Para definir los atributos vamos a
   * utilizar un constructor
   */
  constructor() {
    // Método que se ejecuta primero.
    this.brand = "Opel";
    this.model = "Corsa";
    this.speed = 0;
    this.color = "Black";
    this.year = 2022;
  }

  //   Métodos (funcionalidades)
}

class RandomCar {
  public = 10;
  constructor(brand, model, speed, color, year) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.color = color;
    this.year = year;
  }
  //   Métodos (funcionalidades)
  moreSpeed() {
    this.speed++;
  }
  lessSpeed() {
    this.speed--;
  }
  //   Métodos SET y GET (setters y getters)
  set setBrand(brand) {
    this.brand = brand;
  }
  get getBrand() {
    return this.brand;
  }

  get getSpeed() {
    return this.speed;
  }

  /**Métodos estáticos
   * se pueden llamar sin necesidad de instancia a la clase.
   * utilidades rapidas.
   */

  static greet(name) {
    return `Hello ${name}`;
  }
}

/**Crear Objeto */

// let myCar = new Car();
// console.log(myCar);

// let second_car = new RandomCar("Audi", "A5", 320, "Black", 2022);
// let speed = second_car.speed;
// console.log(speed);

// cars = cars.concat(second_car);
// console.log("Cars", cars);

// console.log(RandomCar.greet("Sergio"));
// console.log(second_car.public);
//

// console.log(second_car.brand);

/**
 * Herencia
 * tengo una clase padre y creo subclase
 * que hereda de la clase padre todas la propiedad y metodos
 */

// class Quad extends RandomCar {}

// let myQuad = new Car();
// console.log("My Quad", myQuad);
// console.log("Quad brand:", myQuad.brand);

class F1Team {
  constructor(team, drivers, championships) {
    this.team = team;
    this.drivers = drivers;
    this.championships = championships;
  }

  info() {
    return `
    ${this.team} will be champion. 
    Right now we race by ${this.drivers}
    and we have ${this.championships}.
    `;
  }

  winner() {
    return this.championships++;
  }

  set setteam(team) {
    return (this.team = team);
  }

  get f1team() {
    return this.team;
  }

  set setdrivers(drivers) {
    return (this.drivers = drivers);
  }

  get getdrivers() {
    return this.drivers;
  }

  set setchampionships(championships) {
    return (this.championships = championships);
  }

  get getchampionships() {
    return this.championships;
  }
}
// let ford = new F1Team("Ford", "Carlos & Manuel", 0);
// console.log(ford);
// console.log(ford.drivers);
// let setTeam = (ford.setteam = "Hyundai");
// console.log(ford);

class F2Team extends F1Team {
  constructor(team, drivers, championships, engine, since) {
    super(team, drivers, championships); // me permite tener disponibles las propiedades de la clases padre.
    this.engine = engine;
    this.since = since;
  }
}

let hispaniaRacing = new F2Team(
  "Hipania Racing",
  "Lucía & Charles",
  2,
  "Seat",
  "2015"
);
hispaniaRacing.setteam = "Hispania Rc. F1";
console.log(hispaniaRacing);
hispaniaRacing.winner();
let info = hispaniaRacing.info();
console.log(info);
