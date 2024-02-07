const clickArticle = document.getElementById("article-info");
const inputColor = document.getElementById("input-color");
const btnChangeColor = document.getElementById("btn-new-color");
const btnResetColor = document.getElementById("btn-reset");
const body = document.body;

console.log(body.style);
clickArticle.addEventListener("click", () => {
  alert("WELCOME TO JURASSIC PARK BEATCH");
});

/*body.addEventListener("click", () => {
  if (body.style.backgroundColor === "rgb(255, 192, 203)") {
    body.style.backgroundColor = "#ffdead";
  } else {
    body.style.backgroundColor = "rgb(255, 192, 203)";
  }
});*/

btnResetColor.addEventListener("click", () => {
  body.style.backgroundColor = "#ffc0cb";
});
btnChangeColor.addEventListener("click", () => {
  body.style.backgroundColor = `${inputColor.value}`;
});
