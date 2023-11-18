// Header Banner
const indexHeaderBanner = () => {
  for(let i = 0; i < 5; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId()}`)
    .then(response => response.json())
    .then(data => {
      const header = document.querySelector('.index-header')
      const div = document.createElement('div')
      div.classList.add('header-div')
      const image = document.createElement('img')
      image.src = data.sprites.front_default
      div.append(image)
      header.prepend(div)})
    .catch(displayError)
  }
}
indexHeaderBanner()

const generatePokemonCards = () => {
  for(let i = 0; i < 5; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId()}`)
    .then(response => response.json())
    .then(data => {
      pokemonCard(data)
    })
    .catch(displayError)
  }  
}