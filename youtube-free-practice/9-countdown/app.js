/**
 * todo: select .giveaway -> generate innerHTML
 * todo: select .deadline -> generate innerHTML
 * todo: select all .deadline-format h4 -> generate innerHTML
 */

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// *======= SELECTOR =======*
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const timesLeft = document.querySelectorAll(".deadline-format h4");

// *======= EVENT LISTENER =======*
// *======= FUNCTION =======*
tempYear = new Date().getFullYear();
tempMonth = new Date().getMonth();
tempDay = new Date().getDate();
// let futureDate = year - [month] - day - hour - min - sec
let futureDate = new Date(tempYear, tempMonth, tempDay + 1, 0, 0, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
let month = months[futureDate.getMonth()];
let day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

giveaway.innerHTML = `giveaway ends on ${day}, ${date} ${month} ${year} - ${hour}.${min}`;

// get date in ms
const futureTime = futureDate.getTime();

function getTimesLeft() {
  const today = new Date().getTime();
  const gap = futureTime - today;

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr

  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  // calculate all gap
  let days = Math.floor(gap / oneDay);
  let hours = Math.floor((gap % oneDay) / oneHour);
  let mins = Math.floor((gap % oneHour) / oneMin);
  let secs = Math.floor((gap % oneMin) / 1000);

  // set value array
  const values = [days, hours, mins, secs];

  function format(time) {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  }

  timesLeft.forEach((time, index) => {
    time.innerHTML = format(values[index]);
  });

  if (gap < 0) {
    deadline.innerHTML = `<h4 class="expired">sorry, giveaway has expired!</h4>`;
  }
}

let countdown = setInterval(getTimesLeft, 1000);
getTimesLeft();

const newYear = new Date("1 Januari 2021");
console.log(newYear);
