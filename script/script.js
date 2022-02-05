
//Pegando numero de pares
const pairsInGame  = askCards()/2;

function askCards() {
  do {
    number = prompt("Quantas cartas você deseja? (números pares de 4 à 14)")
  } while (number < 4 || number > 14 || number % 2 != 0)
  return number;
}

// BLOCO 1: FUNÇÕES PARA CRIAR AS CARTAS NA TELA

// Array que armazanam as imagens
const cards = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
// Embaralhar o array acima
cards.sort(comparador);
// Array que sera usado para colocar as cartas na tela
const cardsInGame = [];


// Cria o array com as cartas que serao colocadas na tela
function createCardsInGame() {

  for (let i = 0; i < pairsInGame ; i++) {
    cardsInGame.push(cards[i]);
    cardsInGame.push(cards[i]);
  }
  cardsInGame.sort(comparador);
}
// Coloca as cartas na tela
function createCards() {
  let card = document.querySelector("section");

  for (let i = 0; i < cardsInGame.length; i++) {

    card.innerHTML += `
  <div onclick="select(this)" data-identifier="card" class="card ${cardsInGame[i]}">
    <div data-identifier="back-face" class="front face">
      <img src="assets/front.png" alt="">
    </div>
    <div data-identifier="front-face" class="back face">
      <img src="assets/${cardsInGame[i]}.gif" alt="">
    </div>
  </div>`

  }

}
// chama as duas funções acim
function cardsDisplay() {

  createCardsInGame();
  createCards();

}
// Executa a funçao acima
cardsDisplay()
// embaralha o array
function comparador() {
  return Math.random() - 0.5;
}

// BLOCO 2: INTERAÇÕES COM A CARTA
let cardsSelected = []
let compare = [];
let numberOfClicks = 0;
let numberOfPairs = 0;

function select(element) {
  numberOfClicks++;
  console.log(numberOfClicks)

  element.style = "pointer-events: none";

  element.querySelector(".front").classList.toggle("flip");
  element.querySelector(".back").classList.toggle("flip2");

  cardsSelected.push(element);

  compare.push(element.classList[1]);

  console.log(compare);
  console.log(cardsSelected);
  if (cardsSelected.length > 1) {
    if (compare[0] == compare[1]) {
      cardsSelected = [];
      compare = [];
      console.log(compare);
      numberOfPairs++;
      if(numberOfPairs == pairsInGame){
        clearInterval(timer);
        setTimeout(showAlert, 1000);
      }
    } else {
      setTimeout(flip, 1000);
      cardsSelected[0].style = "pointer-events: auto";
      cardsSelected[1].style = "pointer-events: auto";
    }
  }

  
}

function flip() {
  cardsSelected[0].querySelector(".front").classList.toggle("flip");
  cardsSelected[0].querySelector(".back").classList.toggle("flip2");
  cardsSelected[1].querySelector(".front").classList.toggle("flip");
  cardsSelected[1].querySelector(".back").classList.toggle("flip2");
  cardsSelected = [];
  compare = [];

}

function showAlert (){
  alert(`Voce venceu e levou ${timerDisplay.innerText} segundos`);
}

//BONUS CONTADOR

setInterval(timer, 1000);
let count = 0;
let timerDisplay = document.querySelector(".timer");


function timer(){
count += 1;
timerDisplay.innerText = count;
};