const button = document.querySelector("#botao");
const ul = document.querySelector(".ul");
const mytasks = [];
const form = document.querySelector(".form");

const criaLi = () => document.createElement("li");
const deleteButton = () => document.createElement("button");
const editbutton = () => document.createElement("button");
const saveEditButton = () => document.createElement("button");
const divButtons = () => document.createElement("div");

button.addEventListener("click", () => {
  const remove = deleteButton();
  const edit = editbutton();
  const saveEdit = saveEditButton();
  const divControls = divButtons();
  const li = criaLi();
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
      contentInput.value = li.firstChild ? li.firstChild.nodeValue.trim() : "";
      button.remove();
      form.appendChild(saveEdit);
      saveEdit.innerHTML = "Editar Tarefa";

      saveEdit.addEventListener("click", (e) => {
        e.preventDefault();
        li.innerHTML = contentInput.value;
        contentInput.value=''
        saveEdit.remove();
        li.appendChild(divControls)
        form.appendChild(button);
      });
    });
  }
});
