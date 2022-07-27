// Strings clasicos
let nombre = "Sergio";
let apellidos = "Radigales Pastor";
let profesion = "Desarrollador Web";
// let nya = nombre + " " + apellidos + "\n" + profesion;
// console.log(nya);

// \n => salto de linea en consola

// Template strings

// let plantilla = `hola
// soy Sergio
// `;

// let interpolacion = `interpolacion
// ${nombre} ${apellidos}
// ${profesion}`;

// console.log(plantilla);
// console.log(interpolacion);

let cajaFicha = document.createElement(`section`);
let fichaTecnica = `
<div class = "ficha">
    <h2>${nombre} ${apellidos}</h2>
    <h3>${profesion}</h3>
    <p>Forma parte del equipo de Victor Robles Web.es</p>
</div>
`;
cajaFicha.innerHTML = cajaFicha;

document.addEventListener("DOMContentLoaded", function () {
  document.body.appendChild(cajaFicha);
});
