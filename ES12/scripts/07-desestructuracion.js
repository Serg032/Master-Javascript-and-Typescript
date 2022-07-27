let fruits = ["apple", "orange", "watermelo", "pear"];

// Clásico
// let apple = fruits[0];
// console.log(apple);

// Desestructuracion array
let [ap, or, wt, pr] = fruits;
console.log(or);

// Desestructurar Objetos
let person = {
  name: "John",
  age: 24,
  country: "UK",
};

let { name, age, country } = person;

// Desestructurar string
let user = "Sergio Radigales 1231231G Madrid";
let [userName, fullName, dni, city] = user.split(" ");

// Crear varibles

let language = "JS",
  framework = "React",
  editor = "Visual Studio Code";

//   Utilidad parametros funciones

const showUser = ({
  name,
  fullName = "apellido desconocido",
  city = "BCN",
}) => {
  console.log(name, fullName, city);
};

showUser("Sergio", "Radigales", "VLN");
showUser({ name: "Sergio", city: "VLN" });
