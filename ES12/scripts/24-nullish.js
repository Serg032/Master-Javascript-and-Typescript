// Nullish coalescing operator

const plus = (number1, number2) => {
  //   number1 = null ? 1 : number1;
  //   number2 = null ? 1 : number2;
  number1 = number1 ?? 1;
  number2 = number2 ?? 1;
  console.log("n1:", number1, "n2:", number2);
  return number1 * number2;
};

const showUser = (id, name) => {
  //   let myUser = id + " " + name ?? "User Unknown.";
  id = id ?? "Id Unknown.";
  name = name ?? "Name Unknown.";

  return id + " " + name;
};

console.log(plus(5, 2));
console.log(plus(5));

console.log(showUser(3, "Sergio"));
