const p1GeneratePokemonCard = (sprites, name, stats, columns) => {
  const p1section = p1CardTemplate(sprites, name, stats, columns)
  const player1 = document.querySelector(".player1")
  player1.classList.add(`columns${columns}`)
  player1.append(p1section)
}
const p2GeneratePokemonCard = (sprites, name, stats, columns) => {
  const p2section = p2CardTemplate(sprites, name, stats, columns)
  const player2 = document.querySelector(".player2");
  player2.classList.add(`columns${columns}`)
  player2.append(p2section)
}