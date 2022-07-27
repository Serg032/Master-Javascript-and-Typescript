let person = {
  name: "Sergio",
  fullname: "Radigales",
  address: {
    country: "Spain",
    city: {
      name: "Guadalajara",
      province: "Guadalajara",
    },
  },
};

// let check =
//   person &&
//   person.name &&
//   person.fullname &&
//   person.address &&
//   person.address.country &&
//   person.address.country &&
//   person.address.city.name &&
//   person.address.city.province;

let check = person?.address?.city?.province === undefined ? false : true;

console.log(check);
