// *======= SELECTOR =======*
const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

// *======= EVENT LISTENER =======*
smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCup(idx));
});

window.addEventListener("DOMContentLoaded", updateBigCup);

// *======= FUNCTION =======*
function highlightCup(idx) {
  const full = smallCups[idx].classList.contains("full");
  const nextCup = smallCups[idx].nextElementSibling;

  if (full && !nextCup.classList.contains("full")) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCup = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCup) * 320}px`;
    percentage.innerText = `${(fullCups / totalCup) * 100}%`;
  }

  if (fullCups === totalCup) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
    percentage.innerText = "Horayy! We Made It!";
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000} L`;
  }
}
