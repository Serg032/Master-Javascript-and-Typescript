// Para mandar info mediante POST, tenemos que convertir
// la info que vamos a mandar a JSON string.

let newPost = JSON.stringify({
  title: "New POST from Serg.",
  body: "POST's body",
  userId: 29,
});

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: newPost,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));
