/**
 * SETS
 */

let gadgets = new Set(["Tablet", "Movil", "PC"]);

// Añadir
gadgets.add(23);

// Eliminar
gadgets.delete("Tablet");

// Mostrar tamaño set (sin length)
let size = gadgets.size;

// Comprobar existencia
let has = gadgets.has("Tablet");
console.log(has);

// Eliminar todo el contenido
gadgets.clear();

// Recorrer el set
for (const gadget of gadgets) {
  console.log(gadget);
}

console.log("size:", size);
