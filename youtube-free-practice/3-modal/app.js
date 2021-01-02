/**
 * Todo: select modal-btn -> listen for event click - when modal-btn clicked -> add .open-modal to modal-overlay.
 * Todo: select close-btn -> listen for event click - when close-btn clicked -> remove .open-modal to modal-overlay.
 * Todo: select modal-overlay for add/remove .open-modal on it. *
 */

// *======= SELECTOR =======*
const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

// *======= EVENT LISTENER =======*
modalBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);
// *======= FUNCTION =======*
function showModal() {
  modalOverlay.classList.add("open-modal");
}

function closeModal() {
  modalOverlay.classList.remove("open-modal");
}
