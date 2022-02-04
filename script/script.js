const numberOfCards = askCards() / 2;

function askCards() {
  do {
    number = prompt("Quantas cartas você deseja? (números pares de 4 à 14)")
  } while (number < 4 || number > 14 || number % 2 != 0)
  return number;
}
const cards = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
const cardsInGame = [];

cards.sort(comparador);
console
function createCardsInGame() {

  for (let i = 0; i < numberOfCards; i++) {
    cardsInGame.push(cards[i]);
    cardsInGame.push(cards[i]);
  }
  cardsInGame.sort(comparador);
  console.log(cardsInGame)
}
 
function createCards() {
  let card = document.querySelector("section");

  for (let i = 0; i < cardsInGame.length; i++) {
    card.innerHTML += `
  <div onclick="flip(this)" class="card ${cards[i]}">
  <div  class="front face">
      <img src="assets/front.png" alt="">
  </div>
  <div  class="back face">
      <img src="assets/${cards[i]}.gif" alt="">
  </div>
</div>`}

}

function cardsDisplay() {

  createCardsInGame();
  createCards();

}
cardsDisplay()



function flip(element) {

  element.querySelector(".front").classList.toggle("flip")
  element.querySelector(".back").classList.toggle("flip2")
}

function comparador() {
  return Math.random() - 0.5;
}


