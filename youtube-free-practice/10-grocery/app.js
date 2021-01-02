// *======= SELECTOR =======*
const form = document.querySelector(".grocery-form");
const groceryContainer = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const alert = document.querySelector(".alert");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");

const input = document.getElementById("grocery");

// *======= EVENT LISTENER =======*
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);

// load UI
window.addEventListener("DOMContentLoaded", loadUI);

// *======= FUNCTION =======*
// Edit Option
let editElement;
let editFlag = false;
let editID = "";

// adding item
function addItem(e) {
  e.preventDefault();
  const value = input.value;
  console.log(value);
  const id = new Date().getTime().toString();
  // when submit item
  if (value && !editFlag) {
    createItem(id, value);
    displayAlert("item added!", "success");
    groceryContainer.classList.add("show-container");
    localStorageCreate(id, value);
    inputDefault();
    // when edit item
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("item edited!", "success");
    localStorageUpdate(editID, value);
    inputDefault();
  } else {
    displayAlert("please input something!", "danger");
  }
}

// create item that added
function createItem(id, value) {
  const element = document.createElement("article");
  element.classList.add("grocery-item");
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `
  <p class="title">${value}</p>
  <div class="btn-container">
    <button type="button" class="edit-btn">
      <i class="fas fa-edit"></i>
    </button>
    <button type="button" class="del-btn">
      <i class="fas fa-trash"></i>
    </button>
  </div>`;
  // access del-btn and edit-btn
  const delBtn = element.querySelector(".del-btn");
  const editBtn = element.querySelector(".edit-btn");
  delBtn.addEventListener("click", delItem);
  editBtn.addEventListener("click", editItem);

  list.appendChild(element);
}

function delItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  displayAlert("item deleted", "danger");

  if (list.children.length === 0) {
    groceryContainer.classList.remove("show-container");
  }
  localStorageDelete(id);
  inputDefault();
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editID = element.dataset.id;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  input.value = editElement.innerHTML;
  editFlag = true;
  submitBtn.innerText = "edit";
}

// clear item
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  groceryContainer.classList.remove("show-container");
  displayAlert("all items are deleted!", "danger");
  inputDefault();
  // remove all from local storage
  localStorage.removeItem("list");
}

// display alert
function displayAlert(text, action) {
  alert.innerText = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(() => {
    alert.innerText = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}

function inputDefault() {
  input.value = "";
  editFlag = false;
  editID = "";
  submitBtn.innerText = "submit";
}

// *======= LOCAL STORAGE =======*
/**
 * localStorage API
 * setItem - add record to localStorage - save as string with JSON.stringify()
 * getItem - JSON.parse() -> untuk mengubah string JSON menjadi js object
 * removeItem
 */

// add data to local storage
function localStorageCreate(id, value) {
  const grocery = { id, value };
  const items = localStorageRead();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

// get data from local storage
function localStorageRead() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// edit data storage
function localStorageUpdate(id, value) {
  let items = localStorageRead();
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// delete data storage
function localStorageDelete(id) {
  let items = localStorageRead();
  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// *== LOAD DATA FROM STORAGE ==*
function loadUI() {
  const items = localStorageRead();
  if (items.length > 0) {
    items.forEach((item) => {
      createItem(item.id, item.value);
    });
    groceryContainer.classList.add("show-container");
  }
}
