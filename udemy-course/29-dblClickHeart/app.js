// let clickTime = 0
let timesClicked = 0;

// *======= SELECTOR =======*
const loveMe = document.querySelector(".loveMe");
const heartIcon = document.querySelector(".fa-heart");

const times = document.getElementById("times");

// *======= EVENT LISTENER =======*
loveMe.addEventListener("dblclick", (e) => {
  heartIcon.classList.toggle("toggle");

  createHeart(e);
});

// loveMe.addEventListener('click', (e) => {
//   if(clickTime === 0) {
//       clickTime = new Date().getTime()
//   } else {
//       if((new Date().getTime() - clickTime) < 800) {
//           createHeart(e)
//           clickTime = 0
//       } else {
//           clickTime = new Date().getTime()
//       }
//   }
// })

// *======= FUNCTION =======*
function createHeart(e) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  // const x = e.clientX;
  // const y = e.clientY;

  // const leftOffset = e.target.offsetLeft;
  // const topOffset = e.target.offsetTop;

  // const xInside = x - leftOffset;
  // const yInside = y - topOffset;

  // console.log(e.target, xInside, yInside);

  // heart.style.top = `${yInside}px`;
  // heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => heart.remove(), 1000);
}
