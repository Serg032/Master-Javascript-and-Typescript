let names = ["Sergio", "Victor", "Marta", "Veronica"];

// Clasico
for (let index = 0; index < names.length; index++) {
  const element = names[index];
  console.log(element);
}

// for of (contenido)
for (const name of names) {
  console.log("for of", name);
}

// for in (indices, (tambien contenido si quiero))
// for in JSON
for (const key in names) {
  console.log("for in", key);
}

// forEach
const nameBox = document.createElement("p");
names.forEach((name, indice, arr) => {
  console.log("for each", name, indice, arr);
});

// Iterables

const miIterable = names[Symbol.iterator]();
console.log(miIterable);
console.log(typeof miIterable);
console.log(miIterable.next());
console.log(miIterable.next());
console.log(miIterable.next());
console.log(miIterable.next());
console.log(miIterable.next());
