let computers = [
  {
    brand: "MSI",
    RAM: "16 gb",
    price: 1700,
    quantity: 2,
  },
  {
    brand: "Lenovo",
    RAM: "8 gb",
    price: 1100,
    quantity: 2,
  },
  {
    brand: "MacBook Pro 14'",
    RAM: "16 gb",
    price: 1800,
    quantity: 1,
  },
  {
    brand: "Dell",
    RAM: "16 gb",
    price: 1500,
    quantity: 3,
  },
];

const getComputers = () => {
  console.log("loading..");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(computers);
      reject(Error("Have been an error"));
    }, 2000);
  });
};

const buyCompu = () => {
  return new Promise((resolve, reject) => {
    console.log("buying...");
    setTimeout(() => {
      let compu = computers[Math.floor(Math.random() * 4)];
      resolve(compu);
      reject(Error("Have been an error"));
    }, 2000);
  });
};

getComputers()
  .then((computers) => {
    computers.forEach((element) => {
      console.log(element);
    });
    return buyCompu();
  })
  .then((buy) => {
    console.log(buy);
    computers = computers.filter(
      (compu) => compu.brand.toLowerCase() !== buy.brand.toLowerCase()
    );
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("Computers after sell", computers));
