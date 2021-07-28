// *======= SELECTOR =======*
const filter = document.getElementById("filter");
const result = document.getElementById("result");

// *======= GLOBAL VAR =======*
const users = [];

// *======= EVENT LISTENER =======*
filter.addEventListener("input", (e) => filterUser(e.target.value));

// *======= FUNCTION =======*
// async function getData() {
// const res = fetch("https://randomuser.me/api?results=50");
// const { results } = res.json();
// }

function getUsers() {
  fetch("https://randomuser.me/api?results=50")
    .then((res) => res.json())
    .then((data) => {
      const { results } = data;

      result.innerHTML = "";

      results.forEach((res) => {
        const { name, picture, location } = res;
        const li = document.createElement("li");

        users.push(li);

        li.innerHTML = `
        <img
          src="${picture.large}"
          alt="${name.first}"
        />
        <div class="user-info">
          <h4>${name.first} ${name.last}</h4>
          <p>${location.city}, ${location.country}</p>
        </div>
        `;

        result.appendChild(li);
      });
    });
}

function filterUser(input) {
  users.forEach((user) => {
    const filter = user.innerText.toLowerCase().includes(input.toLowerCase());

    if (filter) {
      user.classList.remove("hide");
    } else {
      user.classList.add("hide");
    }
  });
}

getUsers();
