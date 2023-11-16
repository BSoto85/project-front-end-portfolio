// Header Banner
function headerBanner() {
  for(let i = 1; i < 6; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/` + `${randomPokemonId()}/`)
    .then(response => response.json())
    .then(data => {
      const header = document.querySelector('header')
      const div = document.createElement('div')
      div.classList.add('header-div')
      const image = document.createElement('img')
      image.src = data.sprites.front_default
      div.append(image)
      header.prepend(div)})
    .catch(displayError)
  }
}
headerBanner()