// *======= SELECTOR =======*
const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

// *======= EVENT LISTENER =======*
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loadData();
  }, 2000);
});

// *======= FUNCTION =======*
function loadData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"   alt="" />';
  title.innerText = "Lorem ipsum dolor sit amet";
  excerpt.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  profileImg.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  name.innerText = "John Doe";
  date.innerText = "Oct 08, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_text.forEach((text) => text.classList.remove("animated-bg-text"));
}
