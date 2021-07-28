// *======= SELECTOR =======*
const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

// *======= GLOBAL VAR =======*
let edit = false;

const todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

// *======= EVENT LISTENER =======*
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

// *======= FUNCTION =======*
function addTodo(todo) {
  let text = input.value;

  if (todo) {
    text = todo.text;
  }

  const todoLi = document.createElement("li");
  if (text && !edit) {
    todoLi.innerText = text;

    todoLi.addEventListener("click", () => {
      todoLi.classList.toggle("completed");
      updateLocalStorage();
    });

    if (todo && todo.completed) {
      todoLi.classList.add("completed");
    }

    todoLi.addEventListener("dblclick", () => {
      todoLi.remove();
      updateLocalStorage();
    });

    todoLi.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      edit = true;
      todoLi.classList.add("edit");
      input.value = todoLi.innerText;
      input.focus();
    });

    todosUL.appendChild(todoLi);

    updateLocalStorage();
  } else if (text && edit) {
    const todosLi = document.querySelectorAll("li");
    todosLi.forEach((todoLi) => {
      if (todoLi.classList.contains("edit")) {
        todoLi.innerText = input.value;
        todoLi.classList.remove("edit");
        todoLi.classList.add("success");

        setTimeout(() => {
          todoLi.classList.remove("success");
        }, 3000);
      }
    });
    edit = false;

    updateLocalStorage();
  } else {
    input.classList.add("danger");
    setTimeout(() => {
      input.classList.remove("danger");
    }, 2000);
  }

  input.value = "";
}

function updateLocalStorage() {
  const todosLi = document.querySelectorAll("li");

  const todos = [];

  todosLi.forEach((todoLi) => {
    todos.push({
      text: todoLi.innerText,
      completed: todoLi.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

// input.addEventListener("input", (e) => {
//   const values = e.target.value
//     .split("/")
//     .filter((value) => value.trim())
//     .map((value) => value.trim());

//   console.log(values);

//   const arr = [];
//   arr.push({
//     val: {
//       text: values[0],
//       kg: values[1],
//     },
//     bool: true,
//   });

//   console.log(arr);
// });
