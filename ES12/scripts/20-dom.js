/**
 * Como seleccionar elementos con id
 * Como seleccionar elementos con class
 * Si voy a seleccionar clases o ids del dom, primero debo
 * añadir un evento window.
 */

// let contenedor = document.getElementById("contenedor");
// console.log(contenedor);
// contenedor.style.border = "solid 2px black";
// contenedor.style.background = "grey";
// contenedor.style.height = "100px";
// contenedor.innerHTML = "Hola, estoy aprendiendo DOM";
// let paragraph = document.createElement("p");
// paragraph.style.color = "white";
// paragraph.innerHTML = "Wooow";
// contenedor.append(paragraph);
// console.log(paragraph);
//

document.addEventListener("DOMContentLoaded", () => {
  let container = document.getElementById("contenedor");
  let color = document.querySelector("#color");
  let height = document.querySelector("#height");
  let bk = document.querySelector("#bk");
  let check = document.querySelector("#checkbox");

  color.addEventListener("click", () => {
    switch (color.value) {
      case "white":
        container.style.color = "white";
        break;
      case "black":
        container.style.color = "black";
        break;
      case "red":
        container.style.color = "red";
    }
  });

  height.addEventListener("click", () => {
    switch (height.value) {
      case "100px":
        container.style.height = "100px";
        break;
      case "200px":
        container.style.height = "200px";
        break;
      case "300px":
        container.style.height = "300px";
    }
  });

  bk.addEventListener("click", () => {
    switch (bk.value) {
      case "white":
        container.style.background = "white";
        break;
      case "black":
        container.style.background = "black";
        break;
      case "grey":
        container.style.background = "grey";
    }
  });

  // Doesn't work

  // check.ariaChecked === true
  //   ? (container.style.border = "3px solid purple")
  //   : (container.style.border = "0px solid black");

  let paragraph = document.querySelectorAll(".text");

  const postText = (text) => {
    paragraph.forEach((element) => {
      element.innerHTML = text;
    });
  };

  postText("Hello, I'm learning document.querySelectoAll");
});
