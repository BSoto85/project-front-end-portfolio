function randomPokemonId() {
  return Math.round(Math.random() * 1017)
}

function displayError(error) {
  const section = document.querySelector("section.error")
  if(error) {
    section.style.display = "block"
  }
  section.innerHTML = 
  `<p>Something went wrong!</p>
  <p class="error-message">${error}</p>`
}

const p1CardTemplate = (sprites, species, type, stats) => {
  const section = document.createElement('section')
  section.classList.add('p1-pokemon-card')
  section.innerHTML += 
  `<img src=${sprites.front_default} alt="${name}"/>
  <p>${species.toUpperCase()}</p>
  <p>${type}</p>
  <p>HP: ${stats[0].base_stat}</p>
  <p>Attack: ${stats[1].base_stat}</p>
  <p>Defense: ${stats[2].base_stat}</p>`
  return section
}

const p2CardTemplate = (sprites, species, type, stats) => {
  const section = document.createElement('section')
  section.classList.add('p2-pokemon-card')
  section.innerHTML += 
  `<img src=${sprites.front_default} alt="${name}"/>
  <p>${species.toUpperCase()}</p>
  <p>${type}</p>
  <p>HP: ${stats[0].base_stat}</p>
  <p>Attack: ${stats[1].base_stat}</p>
  <p>Defense: ${stats[2].base_stat}</p>`
  section.style.backgroundColor = 'yellow'
  return section
}

const p1ApiCall = (columns) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId()}`)
      .then(response => response.json())
      .then(data => {
        const {sprites, species, types, stats} = data
        p1GeneratePokemonCard(sprites, species.name, types[0].type.name, stats, columns)
      })
      .catch(displayError)
}

const p2ApiCall = (columns) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId()}`)
      .then(response => response.json())
      .then(data => {
        const {sprites, species, types, stats} = data
        p2GeneratePokemonCard(sprites, species.name, types[0].type.name, stats, columns)
      })
      .catch(displayError)
}

// const p1RandomSelectPokemon = () => {
//   const p1Pokemon = document.querySelectorAll('.p1-pokemon-card')

// }

