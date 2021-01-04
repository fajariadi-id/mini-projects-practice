// *======= SELECTOR =======*
const btn = document.querySelector(".btn");
const search = document.querySelector(".search");
const input = document.querySelector(".input");

// *======= EVENT LISTENER =======*
btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

// *======= FUNCTION =======*
