const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (verifyInput() === "success") {
    createItem();
    input.value = "";
  }
});

ul.addEventListener("click", (event) => {
  const target = event.target;

  const buttonCheck = target.closest("button.check");
  const trashBtn = target.closest("button.trash");

  if (buttonCheck) {
    buttonChecked(buttonCheck);
  }

  if (trashBtn) {
    const li = trashBtn.closest("li");
    deleteItem(li);
  }
});

function createItem() {
  const li = createLi();
  ul.appendChild(li);
}

function createLi() {
  const id = generateId();
  li = document.createElement("li");
  li.setAttribute("id", id);
  li.appendChild(createCheckButton());
  li.appendChild(createP(id));

  return li;
}

function createCheckButton() {
  const button = document.createElement("button");
  button.setAttribute("class", "check");
  button.appendChild(elementNotChecked());
  return button;
}

function elementNotChecked() {
  const img = document.createElement("img");
  img.setAttribute("src", "assets/icons/check-default.svg");
  return img;
}

function createP(id) {
  p = document.createElement("p");
  p.setAttribute("id", id);
  p.innerHTML = input.value;
  p.appendChild(createTrashButton());
  return p;
}

function createTrashButton() {
  const button = document.createElement("button");
  button.setAttribute("class", "trash");
  button.appendChild(setTrashImg());
  return button;
}

function setTrashImg() {
  const img = document.createElement("img");
  img.setAttribute("src", "assets/icons/trash.svg");
  return img;
}

function generateId() {
  const lastId = ul.lastElementChild?.id || 1;
  return parseInt(lastId) + 1;
}

function verifyInput() {
  if (input.value.trim() === "") {
    alert("Por favor, insira um item na lista!");
    return "error";
  }

  return "success";
}

function elementChecked() {
  const img = document.createElement("img");
  img.setAttribute("class", "checked");
  img.setAttribute("src", "assets/icons/check-selected.svg");
  return img;
}

function buttonChecked(check) {
  const allButtons = document.querySelectorAll("button.check");

  allButtons.forEach((btn) => {
    btn.replaceChildren(elementNotChecked());
  });

  check.replaceChildren(elementChecked());
}

function deleteItem(li) {
  li.remove();
}
