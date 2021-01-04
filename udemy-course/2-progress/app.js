let active = 1;

// *======= SELECTOR =======*
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");

// *======= EVENT LISTENER =======*
next.addEventListener("click", () => {
  active++;
  if (active > circles.length) {
    active = circles.length;
  }
  updateActive();
});

prev.addEventListener("click", () => {
  active--;
  if (active < 1) {
    active = 1;
  }
  updateActive();
});

// *======= FUNCTION =======*
function updateActive() {
  circles.forEach((circle, i) => {
    if (i < active) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (active === 1) {
    prev.disabled = true;
  } else if (active === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
