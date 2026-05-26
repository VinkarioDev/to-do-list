const button = document.querySelector("#botao");
const ul = document.querySelector(".ul");

button.addEventListener("click", () => {
  const span = document.querySelector(".span");
  const li = document.createElement("li");
  const remove = document.createElement("button");
  let contentInput = document.querySelector("#input").value;

  li.innerHTML = contentInput;
  remove.innerHTML = "x";
  ul.appendChild(li);

  li.appendChild(remove);

  remove.addEventListener("click", () => {
    ul.removeChild(li);
  });
});
