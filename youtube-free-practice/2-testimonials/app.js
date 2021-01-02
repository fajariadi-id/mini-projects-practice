/**
 * todo: select id of person-img, author, job, and info for adding data from [reviews] into it id
 * todo: listen for window DOMContentLoaded event - when the page is loaded -> show content on [reviews]
 * todo: select prev-btn -> listen for click event -- when it clicked -> decrease index of [reviews]
 * todo: select next-btn -> listen for click event -- when it clicked -> increase index of [reviews]
 */

// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// *======= SELECTOR =======*
// get person data
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// get functional btn
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// *======= EVENT LISTENER =======*
window.addEventListener("DOMContentLoaded", showPerson);
prevBtn.addEventListener("click", prevPerson);
nextBtn.addEventListener("click", nextPerson);

// *======= FUNCTION =======*
let reviewsIndex = 0; // initSTate array reviews

function showPerson() {
  const item = reviews[reviewsIndex];
  // get person data
  img.src = item.img;
  author.innerText = item.name;
  job.innerText = item.job;
  info.innerText = item.text;
}

function prevPerson() {
  reviewsIndex--;

  if (reviewsIndex < 0) {
    reviewsIndex = reviews.length - 1;
  }
  showPerson();
}

function nextPerson() {
  reviewsIndex++;

  if (reviewsIndex > reviews.length - 1) {
    reviewsIndex = 0;
  }
  showPerson();
}
