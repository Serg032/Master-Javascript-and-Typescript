type companies = {
    name:string,
    area: string,
    services: string[],
    money: number,
    show: () => string
}

let company: companies = {
    name: "Microsoft",
    area: "IT",
    services: ["Software", "Hardware"],
    money: 55_000_000_000,
    show(){
        return this.name + " " + this.area
    }
}

console.log(company.show())
console.log(typeof company.services)



// company.area = 2