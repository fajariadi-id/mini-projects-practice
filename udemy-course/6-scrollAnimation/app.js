// *======= SELECTOR =======*
const boxes = document.querySelectorAll(".box");

// *======= EVENT LISTENER =======*
window.addEventListener("scroll", checkBoxes);

// *======= FUNCTION =======*
function checkBoxes() {
  const triggerBottom = window.innerHeight;
  //? console.log("trigger", triggerBottom);
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    //? console.log("boxtop ", boxTop);
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

checkBoxes();
