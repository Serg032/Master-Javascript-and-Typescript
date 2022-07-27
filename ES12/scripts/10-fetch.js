window.addEventListener("DOMContentLoaded", () => {
  let caja = document.querySelector(".contenedor");
  caja.innerHTML = "Cargando...";

  // Peticion AJAX moderna
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json()) // 1º then convertivos respuesta a json con .json().
    .then((data) => {
      console.log("data 82.", data[82].title);
      console.log(data);
      caja.innerHTML = "";
      showData(caja, data);
    })
    .catch((err) => console.log(err.message, "Ajax failure")); // 2º mostramos en consola esos datos convertidos a json.

  //   DOM

  const showData = (contenedor, items) => {
    items.forEach((item) => {
      let data = `
            <article>
                <h2>${item.title}</h2>
                <p>${item.body}</p>
            </article>
            <hr/>
        `;

      caja.innerHTML += data;
    });
    return items;
  };

  showData();
});
