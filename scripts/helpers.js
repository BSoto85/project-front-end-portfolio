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

const p1CardTemplate = (sprites, name, stats) => {
  const section = document.createElement('section')
  section.classList.add('p1-pokemon-card')
  section.innerHTML += 
  `<img src=${sprites.front_default} alt="${name}"/>
  <p>Name: ${name}</p>
  <p>HP: ${stats[0].base_stat}</p>
  <p>Attack: ${stats[1].base_stat}</p>
  <p>Defense: ${stats[2].base_stat}</p>`
  section.style.backgroundColor = 'yellow'
  return section
}

const p2CardTemplate = (sprites, name, stats) => {
  const section = document.createElement('section')
  section.classList.add('p2-pokemon-card')
  section.innerHTML += 
  `<img src=${sprites.front_default} alt="${name}"/>
  <p>Name: ${name}</p>
  <p>HP: ${stats[0].base_stat}</p>
  <p>Attack: ${stats[1].base_stat}</p>
  <p>Defense: ${stats[2].base_stat}</p>`
  section.style.backgroundColor = 'yellow'
  return section
}

const p1ApiCall = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId()}`)
      .then(response => response.json())
      .then(data => {
        const {sprites, name, stats} = data
        p1GeneratePokemonCard(sprites, name, stats)

      })
      .catch(displayError)
}

const p2ApiCall = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId()}`)
      .then(response => response.json())
      .then(data => {
        const {sprites, name, stats} = data
        p2GeneratePokemonCard(sprites, name, stats)
      })
      .catch(displayError)
}

// const numOfColumns = (amount) => {
//   const columns = document.querySelector('.player1')
//   columns.forEach(column => {
//   column.style.gridTemplateColumns = `repeat(${amount}, 50px)`
//   })
// }