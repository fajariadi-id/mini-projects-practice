let active = 0;

// *======= SELECTOR =======*
const container = document.querySelector(".container");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const slides = document.querySelectorAll(".slide");

// *======= EVENT LISTENER =======*
window.addEventListener("DOMContentLoaded", changeBg);

rightBtn.addEventListener("click", () => {
  active++;
  if (active > slides.length - 1) {
    active = 0;
  }

  changeBg();
  changeSlide();
});

leftBtn.addEventListener("click", () => {
  active--;
  if (active < 0) {
    active = slides.length - 1;
  }

  changeBg();
  changeSlide();
});

// *======= FUNCTION =======*
function changeBg() {
  container.style.backgroundImage = slides[active].style.backgroundImage;
}

function changeSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[active].classList.add("active");
}
