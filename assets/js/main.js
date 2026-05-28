const button = document.querySelector("#botao");
const ul = document.querySelector(".ul");
const form = document.querySelector(".form");
let contentInput = document.querySelector("#input");

function adicionaTarefa() {
  const divControls = document.createElement("div");
  const remove = document.createElement("button");
  const edit = document.createElement("button");
  const li = document.createElement("li");

  if (contentInput.value === "") {
    contentInput.classList.add("error-placeholder");
    contentInput.placeholder = "Adicione uma Task!!";
  } else {
    contentInput.classList.remove("error-placeholder");
    contentInput.placeholder = "Digite a task";
    contentInput.style.border = "1px solid #8100ba";

    li.innerHTML = contentInput.value;
    contentInput.value = "";

    ul.appendChild(li);
    li.appendChild(divControls);

    divControls.appendChild(remove);
    divControls.appendChild(edit);
    divControls.classList.add("divControls");
    remove.innerHTML = "X";
    edit.innerHTML = "EDIT";
    li.style.borderBottom='1px solid #8100ba'

    remove.addEventListener("click", () => {
      removeTarefa(li);
    });

    edit.addEventListener("click", () => {
      editaTarefa(li);
    });
  }
}

function editaTarefa(liRef) {
  const divControls = document.createElement("div");
  const saveEdit = document.createElement("button");
  const remove = document.createElement("button");
  const edit = document.createElement("button");
  contentInput.value = liRef.firstChild
    ? liRef.firstChild.nodeValue.trim()
    : "";
  button.remove();
  form.appendChild(saveEdit);
  saveEdit.innerHTML = "Editar";

  saveEdit.addEventListener("click", (e) => {
    e.preventDefault();
    liRef.innerHTML = contentInput.value;
    contentInput.value = "";
    saveEdit.remove();
    form.appendChild(button);
    liRef.appendChild(divControls);
    divControls.appendChild(remove);
    divControls.appendChild(edit);
    divControls.classList.add("divControls");
    remove.innerHTML = "X";
    edit.innerHTML = "EDIT";
    remove.addEventListener("click", () => {
      removeTarefa(liRef);
    });

    edit.addEventListener("click", () => {
      editaTarefa(liRef);
    });
  });
}

function removeTarefa(liRef) {
  liRef.remove();
  contentInput.value = "";
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  adicionaTarefa();
});
