// Uso normal
const greeting = (name:string):string => {
    return `Hello ${name}`
}
console.log(greeting("Sergio"))

// Nada / void

const voiding = ():void => {
    console.log(new Date().getDate()) 
}

voiding()

// Never. Fin de la aplicacion.

const end = ():never => {
    throw new Error("App closed")
}

// end()

// Parametros funciones en ts
// parametro no obligatorio xxxxxx?:type

const showCountry = (country?:string, continent?:string):string => {
    
    let result = "Not enough data"

    if(country && continent){
        return country + " " + continent
    } else if (!country && continent){
        return `We need a country in ${continent}`
    }else if (country && !continent){
        return `We need a continent for ${country}`
    }

    return result
}

console.log(showCountry(undefined, undefined))

// Tipo de dato funcion.

let music_bands: (data:string[]) => string 

music_bands = function(data:string[]):string{
    // let result = `My favorite artits are `
    // data.forEach(element => {
    //     result += `${element}, `
    // });
    return `My favorite artist are ` + data.toString()
}

console.log(music_bands(["Eminem", "Kanye West"]))


// Tipo literal o alias.
type wear = "especial" | 1 | 2 | 3 | 4 | "buyed"

const tekken = (main:string, wear:wear):string => {
    return `the main is ${main} wearing ${wear}`
}

console.log(tekken("Tiger", 4))