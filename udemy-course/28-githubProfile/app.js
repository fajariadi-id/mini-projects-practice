// *======= API =======*
const API_URL = "https://api.github.com/users/";

// *======= SELECTOR =======*
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

// *======= EVENT LISTENER =======*
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const uname = search.value;
  if (uname) {
    getUser(uname);

    search.value = "";
  }
});

// *======= ASYNC FUNCTION =======*
async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);

    createCard(data);
    getRepos(username);
  } catch (err) {
    console.log(err);

    if (err.response.status == 404) {
      catchErr("Please enter the right username!");
    }
  }

  // axios(API_URL + username)
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));
}

async function getRepos(uname) {
  try {
    const { data } = await axios(API_URL + uname + "/repos?sort=created");

    createRepos(data);
  } catch (err) {
    console.log(err);

    catchErr("Problem fetching repos!");
  }
}

// *======= FUNCTION =======*
function createCard(user) {
  const { avatar_url, name, bio, followers, following, public_repos } = user;

  main.innerHTML = `
  <div class="card">
    <div class="img-container">
      <img
        src="${avatar_url}"
        alt=""
        class="avatar"
      />
    </div>
    <div class="user-info">
      <h2>${name}</h2>
      <p>
        ${bio}
      </p>

      <ul>
        <li>${followers} <strong>Follower</strong></li>
        <li>${following} <strong>Following</strong></li>
        <li>${public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>`;
}

function createRepos(repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 5).forEach((repo) => {
    const { name, html_url } = repo;
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = html_url;
    repoEl.target = "_blank";
    repoEl.classList.add("repo");
    repoEl.innerText = name;

    reposEl.appendChild(repoEl);
  });
}

function catchErr(msg) {
  main.innerHTML = `
  <div class="card">
    <p>${msg}</p>
  </div>`;
}
