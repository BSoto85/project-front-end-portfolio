function randomPokemonId() {
  return Math.round(Math.random() * 1017)
}

function displayError(error) {
  const section = document.querySelector("section.error");
  section.style.display = "block";
  section.innerHTML = 
  `<p>Something went wrong!</p>
  <p class="error-message">${error}</p>`
}

const pokemonCard = (data) => {
  const {sprites, name, stats} = data;
  const player1 = document.querySelector(".player1");
  player1.innerHTML += 
  `<section class="pokemon-card">
  <img src=${sprites.front_default} alt="${name}"/>
  <h2>${name}</h2>
  <p>HP: ${stats[0].base_stat}</p>
  <p>Attack: ${stats[1].base_stat}</p>
  <p>Defense: ${stats[2].base_stat}</p>
  </section>`
}