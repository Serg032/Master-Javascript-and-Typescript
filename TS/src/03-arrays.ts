let people: string[] = ["Victor", "Paco", "Fran"]
let years:number[] = [2000,2001,2002]
// people.push(3) // This doesn't work.
people.push("Antwan")
// years.push(true) // This doesn't work.

console.log(people)
console.log(years)

// Tuplas.

let film:[string, boolean, number] = ["Batman", true, 33]
film.push(false)

console.log(typeof film)
console.log(typeof film[0])
console.log(film.length)

// Enum. Enumeracion. Define un tipo de dato con valores definidos

enum PersonalData {
    name = "Sergio",
    dni = "03233333G",
    address = "C/Rio Torote",
    city = "Madrid"
}

console.log("enum type:",typeof PersonalData)
console.log("enum name:", PersonalData.name )

// Castear una variable. Convertir un dato a otro tipo de dato.

/**
 * Number()
 * String()
 */

let unknown_text:any = 234234
let formated_text:string = <string>unknown_text
console.log(typeof formated_text)
console.log(formated_text)