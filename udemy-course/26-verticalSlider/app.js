let active = 0;

// *======= SELECTOR =======*
const sliderContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const downBtn = document.querySelector(".down-button");
const upBtn = document.querySelector(".up-button");

const slidesLength = rightSlide.querySelectorAll("div").length;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

// *======= EVENT LISTENER =======*
upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

// *======= FUNCTION =======*
function changeSlide(direction) {
  if (direction === "up") {
    active++;
    if (active > slidesLength - 1) {
      active = 0;
    }
  } else if (direction === "down") {
    active--;
    if (active < 0) {
      active = slidesLength - 1;
    }
  }

  const sliderHeight = sliderContainer.clientHeight;
  rightSlide.style.transform = `translateY(-${sliderHeight * active}px)`;
  leftSlide.style.transform = `translateY(${sliderHeight * active}px)`;
}
