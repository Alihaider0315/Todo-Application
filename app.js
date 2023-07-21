let todoInp = document.getElementById("todoInp");
let showList = document.getElementById("showList");

function addTodo() {
  let todoText = todoInp.value;

  let todoTextNode = document.createTextNode(todoText);

  let todoLi = document.createElement("li");
  todoLi.setAttribute("class", "todoList");
  todoLi.appendChild(todoTextNode);
  showList.appendChild(todoLi);

  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("onclick", "deletedTodo(this)");
  let deleteTextNode = document.createTextNode("DELETE");
  deleteBtn.appendChild(deleteTextNode);
  todoLi.appendChild(deleteBtn);

  let editBtn = document.createElement("button");
  editBtn.setAttribute("onclick", "editTodo(this)");
  let editText = document.createTextNode("EDIT");
  editBtn.appendChild(editText);
  todoLi.appendChild(editBtn);

  todoInp.value = "";
}

function deletedTodo(element) {
  element.parentNode.remove();
}

function editTodo(element) {
  element.parentNode.firstChild.nodeValue = prompt(
    "Edit Value",
    element.parentNode.firstChild.nodeValue
  );
}

function deleteAll() {
  showList.innerHTML = "";
}
