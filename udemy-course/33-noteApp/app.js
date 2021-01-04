// *======= SELECTOR =======*
const container = document.querySelector(".container");
const addBtn = document.getElementById("add");

// *======= EVENT LISTENER =======*
addBtn.addEventListener("click", () => addNote());

const displayNotes = JSON.parse(localStorage.getItem("notes"));
if (displayNotes) {
  displayNotes.forEach((note) => addNote(note));
}

// *======= FUNCTION =======*
function addNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
  <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>

  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>`;

  const delBtn = note.querySelector(".delete");
  const editBtn = note.querySelector(".edit");
  const main = note.querySelector(".main");
  const textarea = note.querySelector("textarea");

  textarea.innerText = text;
  main.innerText = text;
  delBtn.addEventListener("click", () => {
    note.remove();
    updateLocalStorage();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });

  textarea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerText = value;
    updateLocalStorage();
  });

  container.appendChild(note);
}

function updateLocalStorage() {
  const notes = document.querySelectorAll("textarea");
  const notesContainer = [];

  notes.forEach((note) => {
    notesContainer.push(note.value);
  });
  localStorage.setItem("notes", JSON.stringify(notesContainer));
}
