let products = [
  {
    name: "Gaming Computer",
    brand: "MSI",
    price: 1200,
  },
  {
    name: "Tablet",
    brand: "Samsung",
    price: 300,
  },
  {
    name: "MacBook Pro 14'",
    brand: "Apple",
    price: 1600,
  },
];

// Una Promesa es un Objeto de Javascript Moderno
// que nos va a garantizar que un dato siempre me va a llegar
// o siempre va a devolver algo ya sea positivo o negativo

const getProducts = () => {
  return new Promise((resolve, reject) => {
    console.log("Loading products...");
    setTimeout(() => {
      resolve(products);
      reject(Error("have been an error"));
      //return => resolve
    }, 3500);
  });
};

const productBuyed = () => {
  return new Promise((resolve, reject) => {
    console.log("Buying...");
    setTimeout(() => {
      resolve({
        name: "Gaming computer",
        client: "Sergio Radigales",
      });
    }, 2000);
  });
};

getProducts()
  .then((items) => {
    for (const item of items) {
      console.log("Available", item);
    }
    return productBuyed(); // Promesa encadenada
  })
  .then((buyed) => {
    console.log("product buyed", buyed);
    products = products.filter((product) => {
      return product.name.toLowerCase() != buyed.name.toLowerCase();
    });
  })
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("Promise finished");
    // for (const product of products) {
    //   console.log("left", product);
    // }
    console.log("final", products);
  });
