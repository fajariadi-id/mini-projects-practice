let load = 0;
let int = setInterval(blurry, 20);

// *======= SELECTOR =======*
const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

// *======= FUNCTION =======*
function blurry() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadingText.innerHTML = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
