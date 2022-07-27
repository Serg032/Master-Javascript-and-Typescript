/**
 * MAPS
 * Con los maps podemos acceder a cada uno de los elementos
 * a diferencia de los SETS.
 */

const old_gadgets = {
  seis: "radio",
  siete: "Sobremesa",
  ocho: "Compac-disk",
};

const gadgets = new Map(Object.entries(old_gadgets));

gadgets
  .set(1, "TV")
  .set(2, "PC")
  .set(3, "Phone")
  .set("cuatro", "PC")
  .set("cinco", "PC")
  .set(true, 5);

console.log(gadgets);

let view = gadgets.get(2);
console.log(view);

let entries = gadgets.entries();

console.log(entries);
