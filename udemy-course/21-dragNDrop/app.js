// *======= SELECTOR =======*
const empties = document.querySelectorAll(".empty");
const fill = document.querySelector(".fill");

// *======= EVENT LISTENER =======*
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// *======= FUNCTION / classList.add() =======*
function dragStart() {
  this.classList.add("hold");
  setTimeout(() => {
    this.classList.remove("fill", "hold");
  }, 0);

  console.log("drag Start");
}

function dragEnd() {
  this.classList.remove("hold");
  this.classList.add("fill");

  console.log("drag End");
}

function dragOver(e) {
  e.preventDefault();

  console.log("drag Over");
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hovered");

  console.log("drag Enter");
}

function dragLeave() {
  this.classList.remove("hovered");

  console.log("drag Leave");
}

function dragDrop() {
  this.classList.remove("hovered");
  this.append(fill);

  console.log("drag Drop");
}

// *======= FUNCTION / className =======*
// function dragStart() {
//   this.className += " hold";
//   setTimeout(() => {
//     this.className = "";
//   }, 0);

//   console.log("drag Start");
// }

// function dragEnd() {
//   this.className = "fill";

//   console.log("drag End");
// }

// function dragOver(e) {
//   e.preventDefault();

//   console.log("drag Over");
// }

// function dragEnter(e) {
//   e.preventDefault();
//   this.className += " hovered";

//   console.log("drag Enter");
// }

// function dragLeave() {
//   this.className = "empty";

//   console.log("drag Leave");
// }

// function dragDrop() {
//   this.className = 'empty'
//   this.append(fill)

//   console.log("drag Drop");
// }
