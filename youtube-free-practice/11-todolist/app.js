// Selector
const todoInput = document.querySelector(".todo-input"); // input
const todoBtn = document.querySelector(".todo-btn"); // submit btn
const todoList = document.querySelector(".todo-list"); // ul
const filterOption = document.querySelector(".filter-todo"); // select

// Event Listener
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", delDone);
filterOption.addEventListener("click", filterTodo);

// Function

function addTodo(event) {
  event.preventDefault(); // prevent refresh
  // div.todo
  const divTodo = document.createElement("div");
  divTodo.classList.add("todo");
  // li.todo-item
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value; // ambil input value
  // masukin li kedalam div
  divTodo.appendChild(newTodo);
  // check button
  const doneBtn = document.createElement("button");
  doneBtn.classList.add("done-btn");
  doneBtn.innerHTML = '<i class="fas fa-check"></i>';
  divTodo.appendChild(doneBtn);
  // delete button
  const delBtn = document.createElement("button");
  delBtn.classList.add("del-btn");
  delBtn.innerHTML = '<i class="fas fa-trash"></i>';
  divTodo.appendChild(delBtn);
  // masukkan div.todo ke ul
  todoList.appendChild(divTodo);
  // Clear input value
  todoInput.value = "";
}

function delDone(e) {
  const item = e.target;
  // delete button
  if (item.classList[0] === "del-btn") {
    const todo = item.parentElement; // ngincer div buat di hapus
    // Animation
    todo.classList.add("shifted");
    // nunggu transisi baru ngisi tempat todo list yg di hapus
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // done button
  if (item.classList[0] === "done-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("done");
  }
}

function filterTodo(e) {
  // nangkep semua isi ul (todo) dalam array
  const todos = todoList.childNodes;
  // looping isi ul (array) buat nangkep value di-option
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("done")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("done")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
