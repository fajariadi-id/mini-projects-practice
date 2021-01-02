/**
 * todo: set footer date dynamicly
 * todo: select .nav-toggle -> listen for click events - when it clicked -> expand the links dynamicly
 * todo: select .links-container -> get the height of it using method getBounding()
 * todo: select .links -> get total height of all links using method getBounding()
 * todo: listen for window scroll event to get position of scroll page that can be used for parameter
 * todo: select #nav -> get total height of navbar using method getBounding()
 * todo: select .top-link -> add .show-link when scroll event reach (n)px
 * todo: select all .scroll-link -> iterate each link -> listen for click event - when it click get id from hred attribut using method getAtt() and use method slice(1) for start get the string from index 1 -> select each id to get used by method offsetTop to know top position of each element(id)
 *
 */

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// *======= SELECTOR =======*
const nav = document.getElementById("nav");
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const overlay = document.querySelector(".toggle-overlay");
const topLink = document.querySelector(".top-link");
const scrollLink = document.querySelectorAll(".scroll-link");

// *======= EVENT LISTENER =======*
navToggle.addEventListener("click", dynamicExpand);
window.addEventListener("scroll", navTransition, showTopLink);

scrollLink.forEach((link) => {
  link.addEventListener("click", navigateTo);
});

// *======= FUNCTION =======*
function dynamicExpand() {
  // get link container height
  const containerHeight = linksContainer.getBoundingClientRect().height;
  // get total height of all links
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
    overlay.classList.add("show-overlay");
  } else {
    linksContainer.style.height = 0;
    overlay.classList.remove("show-overlay");
  }
}

function navTransition() {
  const scrollHeight = window.pageYOffset;
  showTopLink(scrollHeight);
  const navHeight = nav.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    nav.classList.add("nav-bg");
  } else {
    nav.classList.remove("nav-bg");
  }
}

function showTopLink(height) {
  if (height > 700) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
}

function navigateTo(e) {
  e.preventDefault();
  const id = e.currentTarget.getAttribute("href").slice(1);
  const element = document.getElementById(id);

  const containerHeight = linksContainer.getBoundingClientRect().height;
  const navHeight = nav.getBoundingClientRect().height;

  let position = element.offsetTop - navHeight;

  if (navHeight > 75) {
    position = position + containerHeight + 16;
  }

  window.scrollTo({
    left: 0,
    top: position,
  });
  linksContainer.style.height = 0;
  overlay.classList.remove("show-overlay");
}
