// *======= SELECTOR =======*
const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

let idx = 1;
let speed = 300 / speedEl.value;
const text = "Fajar Riadi";

// *======= EVENT LISTENER =======*
speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});

// *======= FUNCTION =======*
function writing() {
  textEl.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(() => {
    writing();
  }, speed);
}

writing();
