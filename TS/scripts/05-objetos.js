"use strict";
let company = {
    name: "Microsoft",
    area: "IT",
    services: ["Software", "Hardware"],
    money: 55000000000,
    show() {
        return this.name + " " + this.area;
    }
};
console.log(company.show());
console.log(typeof company.services);
// company.area = 2
