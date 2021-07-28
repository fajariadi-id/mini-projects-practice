/**
 * todo: select .about for binding event -> listen for click event - target the data-id on each .tab-btn
 * todo: select all .tab-btn -> iterate each btn -> remove .active from btn AND add .active to target clicked
 * todo: select all .content -> iterate each content -> remove .active from content -> get id from target .data-id -> add .active on content matched the id targeted
 */

// *======= SELECTOR =======*
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

// *======= EVENT LISTENER =======*
about.addEventListener("click", activeTab);

// *======= FUNCTION =======*
function activeTab(e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}
