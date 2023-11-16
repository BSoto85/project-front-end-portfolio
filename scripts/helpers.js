function randomPokemonId() {
  return Math.round(Math.random() * 1017)
}

function displayError(error) {
  const section = document.querySelector("section.error")
  section.style.display = "block"
  const paragraph = document.createElement("p")
  paragraph.textContent = "Something went wrong!"
  const errorMessage = document.createElement("p")
  errorMessage.classList.add("error-message")
  errorMessage.textContent = error
  section.append(paragraph, errorMessage)
}

// function getImage() {

// }