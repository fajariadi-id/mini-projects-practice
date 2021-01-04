// *======= SELECTOR =======*
const container = document.querySelector(".container");

// *======= GLOBAL VAR =======*
const unsplashImg = "https://source.unsplash.com/random/";
const rows = 10;
const cols = 3;

for (let i = 0; i < rows * cols; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashImg}${randomSize()}x${randomSize()}`;

  container.appendChild(img);
}

// *======= EVENT LISTENER =======*

// *======= FUNCTION =======*
function randomSize() {
  return Math.floor(Math.random() * rows) + 300;
}
