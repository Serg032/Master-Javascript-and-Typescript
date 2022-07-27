// await === then()

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
    }, 2000);
  });
};

const getMyItems = async () => {
  let myItems = await getItems();
  console.log(myItems);
};

getMyItems();
