const car = (() => {
  // Definicion de variables (_privadas)
  let _brand,
    _speed = 0,
    _doors;
  // Definicion de metodos (funciones)
  const setBrand = (brand) => {
    _brand = brand;
    return _brand;
  };

  const getBrand = () => {
    return _brand;
  };

  const speedUp = () => {
    _speed += 30;
    return _speed;
  };

  const breakDown = () => {
    _speed -= 10;
    return _speed;
  };

  const getSpeed = () => {
    return _speed;
  };

  const setDoors = (doors) => {
    _doors = doors;
    return _doors;
  };

  const getDoors = () => {
    return _doors;
  };

  /* Para poder utilizar los metodos fuera de la Closure
   tengo que hacer un return.
*/

  return {
    setBrand,
    getBrand,
    speedUp,
    breakDown,
    getSpeed,
    setDoors,
    getDoors,
  };
})();

car.setBrand("BMW");
car.speedUp();
car.speedUp();
car.speedUp();
car.breakDown();
car.breakDown();
car.setDoors(3);
console.log(
  "Brand:",
  car.getBrand(),
  "Speed:",
  car.getSpeed(),
  "Doors:",
  car.getDoors()
);
