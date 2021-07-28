// *======= SELECTOR =======*
const container = document.querySelector(".container");
const panels = document.querySelectorAll(".panel");

// *======= EVENT LISTENER =======*
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActive();
    panel.classList.add("active");
  });
});

// *======= FUNCTION =======*
function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
