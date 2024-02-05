const clickArticle = document.getElementById("article-info");
const bodyColor = document.getElementById("bg-color");
const body = document.body;

console.log(body.style);
clickArticle.addEventListener("click", () => {
  alert("WELCOME TO JURASSIC PARK BEATCH");
});

body.addEventListener("click", () => {
  if (body.style.backgroundColor === "rgb(255, 192, 203)") {
    body.style.backgroundColor = "#ffdead";
  } else {
    body.style.backgroundColor = "rgb(255, 192, 203)";
  }
});
