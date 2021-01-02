/**
 * todo: select all .question -> iterate each question -> select .question-btn
 * todo: listen for click events on .question-btn - add toggle for .show-text
 * todo: membuka hanya 1 question - add condition - kalo btn yg di-klik tidak sama dengan btn pada title questionnya -> remove .show-text
 */

// *======= SELECTOR =======*
const questions = document.querySelectorAll(".question");

// *======= EVENT LISTENER =======*
questions.forEach((question) => {
  console.log(question);
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((btn) => {
      console.log(btn);
      if (btn !== question) {
        btn.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
