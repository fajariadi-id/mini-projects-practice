// *======= SELECTOR =======*
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// *======= EVENT LISTENER =======*
btns.forEach((btn) => {
  btn.addEventListener("click", actionBtn);
});

// *======= FUNCTION =======*
let count = 0; // set initial count

function actionBtn(e) {
  const classes = e.target.classList;
  if (classes.contains("decrease")) {
    count--;
  } else if (classes.contains("increase")) {
    count++;
  } else {
    count = 0;
  }

  if (count > 0) {
    value.style.color = "green";
  } else if (count < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "var(--clr-black)";
  }
  value.innerText = count;
}
