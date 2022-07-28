"use strict";
class Car {
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.started = false;
        this.speed = 0;
    }
    start() {
        this.started = true;
    }
    off() {
        this.started = false;
    }
    speed_up(much) {
        this.speed += much;
    }
    break_down(less) {
        this.speed -= less;
    }
    get how_much_speed() {
        return `The car is fast as ${this.speed}km/h.`;
    }
    get carStarted() {
        return this.started;
    }
}
let my_car = new Car("Ferrari", "440", 2022, "White");
my_car.start();
my_car.speed_up(200);
my_car.break_down(33);
console.log(my_car.how_much_speed);
console.log(my_car);
