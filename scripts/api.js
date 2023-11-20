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


const form = document.querySelector('form')
form.addEventListener('submit', (event)=>{
  event.preventDefault()
  const player1 = document.querySelector('.player1')
  const {playername} = event.target
  const player1Name = document.createElement('h2')
  player1Name.innerText = playername.value
  player1.append(player1Name)
  const player2 = document.querySelector('.player2')
  const player2Name = document.createElement('h2')
  player2Name.innerText = `Player 2`
  player2.append(player2Name)
  let amount = 0
  if(document.querySelector('#pokemon3').checked) {
    amount = 3
  } else if(document.querySelector('#pokemon6').checked) {
    amount = 6
  }
  const header = document.querySelector('header')
  header.style.display = 'none'
  const divForm = document.querySelector('.form')
  divForm.style.display = 'none'
  const battlefield = document.querySelector('.battlefield')
  const battleButton = document.createElement('button')
  battleButton.innerText = 'BATTLE'
  battlefield.append(battleButton)
  for(let i = 0; i < amount; i++) {
    p1ApiCall(amount)
    p2ApiCall(amount)
    form.reset()
  }
})