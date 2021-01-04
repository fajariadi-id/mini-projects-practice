const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const song = document.getElementById(sound);
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    soundStop();
    song.play();
  });

  document.getElementById("buttons").appendChild(btn);
});

// *======= SELECTOR =======*
// *======= EVENT LISTENER =======*
// *======= FUNCTION =======*
function soundStop() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
