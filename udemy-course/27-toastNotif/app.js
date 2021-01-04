const arrMessages = [
  "Message Number 1",
  "Message Number 2",
  "Message Number 3",
  "Message Number 4",
];

const arrTypes = ["info", "success", "error"];

// *======= SELECTOR =======*
const toasts = document.getElementById("toasts");
const button = document.getElementById("button");

// *======= EVENT LISTENER =======*
button.addEventListener("click", () => createNotif());

// *======= FUNCTION =======*
function createNotif() {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(getRandomType());

  notif.innerText = getRandomMessage();
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 2000);
}

function getRandomMessage() {
  const randomNumber = Math.floor(Math.random() * arrMessages.length);
  return arrMessages[randomNumber];
}

function getRandomType() {
  const randomNumber = Math.floor(Math.random() * arrTypes.length);
  return arrTypes[randomNumber];
}
