// *======= SELECTOR =======*
const textarea = document.getElementById("textarea");
const tagsElement = document.getElementById("tags");

textarea.focus();

// *======= EVENT LISTENER =======*
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    e.target.value = "";
    randomSelect();
  }
});

// *======= FUNCTION =======*
function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim())
    .map((tag) => tag.trim());

  console.log(tags);
  tagsElement.innerHTML = "";

  tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.innerText = tag;
    tagsElement.appendChild(tagElement);
  });
}

function randomSelect() {
  const highlightLoop = 30;
  const times = 100;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    randomTag.classList.add("highlight");

    setTimeout(() => {
      randomTag.classList.remove("highlight");
    }, times);
  }, times);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      randomTag.classList.add("highlight");
    }, times);
  }, highlightLoop * times);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  const random = Math.floor(Math.random() * tags.length);
  console.log(random);
  return tags[random];
}
