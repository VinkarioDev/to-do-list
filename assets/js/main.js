const button = document.querySelector("#botao");
const ul = document.querySelector(".ul");
const mytasks = [];

button.addEventListener("click", () => {
  const li = document.createElement("li");
  const remove = document.createElement("button");
  const edit = document.createElement("button");
  const divControls = document.createElement("div");
  divControls.classList.add("divControls");
  let contentInput = document.querySelector("#input");

  if (contentInput.value === "") {
    contentInput.classList.add("error-placeholder");
    contentInput.placeholder = "Adicione uma Task!!";
    contentInput.style.border = "1px solid red";
  } else {
    contentInput.classList.remove("error-placeholder");
    contentInput.placeholder = "Digite a task";
    contentInput.style.border = "1px solid #8100ba";
    li.innerHTML = contentInput.value;
    contentInput.value = "";
    remove.innerHTML = "x";
    edit.innerHTML = "edit";
    ul.appendChild(li);

    li.appendChild(divControls);
    divControls.appendChild(remove);
    divControls.appendChild(edit);
    remove.addEventListener("click", () => {
      ul.removeChild(li);
    });

    edit.addEventListener("click", () => {
       divControls.remove()
      contentInput.value = li.textContent;
     
    });
  }
});
