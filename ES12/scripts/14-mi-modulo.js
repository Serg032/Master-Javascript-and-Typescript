const imprimirArray = (datos) => {
  datos.forEach((element) => {
    console.log(element);
  });
  return datos;
};

const saludo = (name) => {
  console.log(`Hola ${name}`);
};

export default {
  imprimirArray,
  saludo,
};
