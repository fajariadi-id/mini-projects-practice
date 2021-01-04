// *======= GLOBAL VAR =======*
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// *======= SELECTOR =======*
const container = document.querySelector(".container");
const toggle = document.querySelector(".toggle");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

// *======= EVENT LISTENER =======*
toggle.addEventListener("click", () => {
  container.classList.toggle("dark");
  if (container.classList.contains("dark")) {
    toggle.innerText = "Light mode";
  } else {
    toggle.innerText = "Dark mode";
  }
});

// *======= FUNCTION =======*
function setTime() {
  const time = new Date();
  console.log(time);
  const sec = time.getSeconds();
  const min = time.getMinutes();
  const hour = time.getHours();
  const hourNeedle = hour % 12;
  const day = days[time.getDay()];
  const month = months[time.getMonth()];
  const date = time.getDate();
  // console.log(sec, min, hour, day, month, date, hourNeedle);

  timeEl.innerText = `${format(hour)}:${format(min)}`;
  dateEl.innerHTML = `${day}, ${month} <span class="circle">${date}</span>`;

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hourNeedle,
    0,
    11,
    0,
    360
  )}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    min,
    0,
    59,
    0,
    360
  )}deg)`;

  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    sec,
    0,
    59,
    0,
    360
  )}deg)`;
}

function format(time) {
  return time < 10 ? `0${time}` : `${time}`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setInterval(() => {
  setTime();
}, 1000);
