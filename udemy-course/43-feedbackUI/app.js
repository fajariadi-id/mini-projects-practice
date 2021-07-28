// *======= SELECTOR =======*
const panel = document.getElementById("panel");
const sendBtn = document.getElementById("send");

const ratingContainer = document.querySelector(".ratings-container");
const ratings = document.querySelectorAll(".rating");

// *======= GLOBAL VAR =======*
let selectedRating = "";
console.log(selectedRating);

// *======= EVENT LISTENER =======*
ratingContainer.addEventListener("click", (e) => {
  const img = e.target;
  const small = img.nextElementSibling.innerText;
  console.log(small);
  if (img.parentNode.classList.contains("rating")) {
    removeActive();
    img.parentNode.classList.add("active");
    selectedRating = small;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
  <i class="fas fa-heart"></i>
  <strong>Thank You!</strong>
  <br>
  <strong>Feedback: ${selectedRating}</strong>
  <p>We'll use your feedback to improve our customer support</p>
  `;
});

// *======= FUNCTION =======*
function removeActive() {
  ratings.forEach((rating) => rating.classList.remove("active"));
}
