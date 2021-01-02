/**
 * todo: select .switch-btn -> listen for click event - when it cliked -> add .slide to .switch-btn.
 * todo: select .preloader - listen for window load - when page done loading -> add .hide-preloader to .preloader
 * todo: select .video-container for adding method play() and pause()
 */

// *======= SELECTOR =======*
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");
const btn = document.querySelector(".switch-btn");

// *======= EVENT LISTENER =======*
window.addEventListener("load", doneLoading);
btn.addEventListener("click", slide);

// *======= FUNCTION =======*
function doneLoading() {
  preloader.classList.add("hide-preloader");
}

function slide() {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
}
