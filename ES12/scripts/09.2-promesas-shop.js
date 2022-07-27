let items = [
  {
    name: "PS5",
    price: 700,
    q: 1,
  },
  {
    name: "MacBook Pro",
    price: 1700,
    q: 1,
  },
  {
    name: "Kuikma 900 Power Hard",
    price: 99.99,
    q: 1,
  },
  {
    name: "Ducati Panigale",
    price: 22700,
    q: 1,
  },
];

const getItems = () => {
  console.log("loading...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
      reject(Error("Have been an error bringing the items"));
    }, 3000);
  });
};

const buyItem = () => {
  console.log("buyin...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let item = items[Math.floor(Math.random() * 4)];
      resolve(item);
    }, 3000);
  });
};

getItems()
  .then((elements) => {
    for (const key in elements) {
      console.log(key, elements[key]);
    }
    return buyItem().then((buy) => {
      console.log("buy", buy);
      for (const item of items) {
        if (buy.name === item.name) {
          item.q = item.q - 1;
          item.timesBuyed = +1;
          console.log(item);
        }
      }
      items.forEach((item) => {
        if (item.q === 0) {
          items = items.filter((item) => item.q !== 0);
        }
      });
    });
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("Finally");
    for (const item of items) {
      console.log(item);
    }
  });

// Promise all
