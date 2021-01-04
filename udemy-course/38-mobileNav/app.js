// *======= SELECTOR =======*
const nav = document.querySelectorAll("li");
const imgs = document.querySelectorAll(".content");

// *======= EVENT LISTENER =======*
nav.forEach((li, idx) => {
  li.addEventListener("click", () => {
    hideAllImgs();
    hideAllActives();

    li.classList.add("active");
    imgs[idx].classList.add("show");
  });
});

// *======= FUNCTION =======*
function hideAllImgs() {
  nav.forEach((li) => li.classList.remove("active"));
}

function hideAllActives() {
  imgs.forEach((img) => img.classList.remove("show"));
}
