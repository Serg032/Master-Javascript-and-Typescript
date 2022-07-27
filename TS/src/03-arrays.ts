let people: string[] = ["Victor", "Paco", "Fran"]
let years:number[] = [2000,2001,2002]
// people.push(3) // This doesn't work.
people.push("Antwan")
// years.push(true) // This doesn't work.

console.log(people)
console.log(years)

// Tuplas.

let film:[string, boolean, number] = ["Batman", true, 1990]
film.push(false)

console.log(typeof film)
console.log(typeof film[0])