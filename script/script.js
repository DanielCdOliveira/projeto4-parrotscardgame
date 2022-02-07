//Pegando numero de pares
let pairsInGame = askCards() / 2;

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
let cardsInGame = [];


// Cria o array com as cartas que serao colocadas na tela
function createCardsInGame() {

  for (let i = 0; i < pairsInGame; i++) {
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
let allCards = document.querySelectorAll(".card")

allCards.style = "pointer-events: none";

function select(element) {
  numberOfClicks++;

  element.style = "pointer-events: none";

  element.querySelector(".front").classList.toggle("flip");
  element.querySelector(".back").classList.toggle("flip2");

  cardsSelected.push(element);

  compare.push(element.classList[1]);



  if (cardsSelected.length > 1) {

    if (compare[0] == compare[1]) {
      cardsSelected[0].querySelector(".back").style = "background-color: #75B79E;border: 2px solid black"
      cardsSelected[1].querySelector(".back").style = "background-color: #75B79E;border: 2px solid black"
      cardsSelected = [];
      compare = [];
      numberOfPairs++;



      if (numberOfPairs == pairsInGame) {
        clearInterval(interval);
        setTimeout(showModal, 1000);
      }
    } else {
      allCards.forEach(blockCards);
      setTimeout(flip, 1000);

    }
  }


}

function flip() {
  cardsSelected[0].querySelector(".front").classList.toggle("flip");
  cardsSelected[0].querySelector(".back").classList.toggle("flip2");
  cardsSelected[1].querySelector(".front").classList.toggle("flip");
  cardsSelected[1].querySelector(".back").classList.toggle("flip2");
  cardsSelected[0].style = "pointer-events: auto";
  cardsSelected[1].style = "pointer-events: auto";
  cardsSelected = [];
  compare = [];
  allCards.forEach(unblockCards);
}

function blockCards(cardSelected) {
  cardSelected.style = "pointer-events: none";
}

function unblockCards(cardSelected) {
  cardSelected.style = "pointer-events: auto";
}

function showModal() {
  let modal = document.querySelector(".modal-container")
  modal.querySelector("h3").innerText = `Você ganhou em ${numberOfClicks} jogadas e ${timerDisplay.innerText} segundos!`
  modal.style = "display:flex";
}

//BONUS 

// CONTADOR
const interval = setInterval(timer, 1000);
let count = 0;
let timerDisplay = document.querySelector(".timer");

function timer() {
  count += 1;
  timerDisplay.innerText = count;
};

// MODAL DE JOGAR NOVAMENTE

function playAgain() {
  let answer = "";
  do {
    answer = prompt("Deseja jogar novamente? (sim ou nao)")
  } while (answer != "sim" && answer != "nao")
  if (answer == "sim") {
    let section = document.querySelector("section");
    section.innerHTML = ``;
    numberOfClicks = 0;
    numberOfPairs = 0;
    cardsSelected = [];
    compare = [];
    cardsInGame = [];

    pairsInGame = askCards() / 2;
    
    cardsDisplay();
    allCards = document.querySelectorAll(".card")
    allCards.style = "pointer-events: none";
    

    let modal = document.querySelector(".modal-container")
    modal.style = "display:none";
  }
}