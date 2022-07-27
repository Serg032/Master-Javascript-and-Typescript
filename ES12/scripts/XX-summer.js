window.addEventListener("load", () => {
  let form = document.querySelector("#form");

  let place = document.getElementById("place").value;
  let club = document.getElementById("club").value;
  let music = document.getElementById("music").value;
  console.log(place);

  let div = document.createElement("div");
  document.body.append(div);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstP = document.createElement("p");
    let secondP = document.createElement("p");
    let thirdP = document.createElement("p");

    firstP.innerHTML = place;
    secondP.innerHTML = club;
    thirdP.innerHTML = music;

    let arr = [firstP, secondP, thirdP];
    for (const p of arr) {
      div.append(p);
    }

    place = " ";
    music = " ";
    club = " ";
  });
});
