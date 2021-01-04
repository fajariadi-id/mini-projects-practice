// *======= SELECTOR =======*
const pokeContainer = document.getElementById("poke-container");

// *======= GLOBAL VAR =======*
const API_URL = "https://pokeapi.co/api/v2/pokemon/";
const totalPoke = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const colorsContainer = Object.keys(colors);

// *======= EVENT LISTENER =======*

// *======= FUNCTION =======*
const fetchPoke = async () => {
  for (let i = 1; i <= totalPoke; i++) {
    await getPoke(i);
  }
};

const getPoke = async (id) => {
  const url = API_URL + id;
  const res = await fetch(url);
  const data = await res.json();
  createPokeCard(data);
};

const createPokeCard = (pokemon) => {
  const { id, name, types } = pokemon;
  const idStr = id.toString().padStart(3, "0");

  const typesContainer = types.map((type) => type.type.name);
  const typeColor = colorsContainer.find(
    (type) => typesContainer.indexOf(type) > -1
  );
  const bgColor = colors[typeColor];

  const pokeEl = document.createElement("div");
  pokeEl.classList.add("pokemon");
  pokeEl.style.backgroundColor = bgColor;

  pokeEl.innerHTML = `
  <div class="img-container">
    <img
      src="https://pokeres.bastionbot.org/images/pokemon/${id}.png"
      alt=""
    />
  </div>
  <div class="info">
    <span class="number">#${idStr}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${typeColor}</span> </small>
  </div>`;

  pokeContainer.appendChild(pokeEl);
};

// *======= CALLING FUNCTION =======*
fetchPoke();
