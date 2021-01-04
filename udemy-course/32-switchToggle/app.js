// *======= SELECTOR =======*
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

const toggles = document.querySelectorAll(".toggle");

// *======= EVENT LISTENER =======*
toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => {
    balance(e.target);
  });
});

// *======= FUNCTION =======*
function balance(target) {
  if (good.checked && cheap.checked && fast.checked) {
    if (target == good) {
      fast.checked = false;
    }

    if (target == cheap) {
      good.checked = false;
    }

    if (target == fast) {
      cheap.checked = false;
    }
  }
}
