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

// vira as cartas e compara se sao iguais
function select(element) {
  // numero de cliques
  numberOfClicks++;
  // carta clicada perde o onclick
  element.style = "pointer-events: none";
  // vira a carta
  element.querySelector(".front").classList.toggle("flip");
  element.querySelector(".back").classList.toggle("flip2");
  // adiciona a carta no array para alterçoes
  cardsSelected.push(element);
  // adciona a carta no array para comparaçoes
  compare.push(element.classList[1]);


//  verifica se tem mais de uma carta no array
  if (cardsSelected.length > 1) {
  // compara as cartas
    if (compare[0] == compare[1]) {
      // se forem iguais muda o estilo
      cardsSelected[0].querySelector(".back").style = "background-color: #75B79E;border: 2px solid black"
      cardsSelected[1].querySelector(".back").style = "background-color: #75B79E;border: 2px solid black"
      // zera os arrays
      cardsSelected = [];
      compare = [];
      // adiciona um par
      numberOfPairs++;


      // compara para verse o jogo acabou
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
// virar cartas diferentes
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
// bloqueia carta de serem clicadas
function blockCards(cardSelected) {
  cardSelected.style = "pointer-events: none";
}
// desbloqueia carta de serem clicadas
function unblockCards(cardSelected) {
  cardSelected.style = "pointer-events: auto";
}
// tela de vitoria/jogar novamente
function showModal() {
  let modal = document.querySelector(".modal-container")
  modal.querySelector("h3").innerText = `Você ganhou com ${numberOfClicks} jogadas em ${timerDisplay.innerText} segundos!`
  modal.style = "display:flex";
}

//BONUS 

// CONTADOR
let interval = setInterval(timer, 1000);
let count = 0;
let timerDisplay = document.querySelector(".timer");

function timer() {
  count += 1;
  timerDisplay.innerText = count;
  console.log(count)
};

// MODAL DE JOGAR NOVAMENTE

function playAgain() {
  let answer = "";
  do {
    answer = prompt("Deseja jogar novamente? (sim ou nao)")
  } while (answer != "sim" && answer != "nao")
  if (answer == "sim") {

    //Poderia usar document.location.reload(true); 

    let section = document.querySelector("section");
    section.innerHTML = `<div class="timer-container">
    <ion-icon name="hourglass-outline"></ion-icon>
    <span class="timer">--</span>
    </div>`;
    // zerando valores
    numberOfClicks = 0;
    numberOfPairs = 0;
    cardsSelected = [];
    compare = [];
    cardsInGame = [];
    pairsInGame = askCards() / 2;

    cardsDisplay();
    allCards = document.querySelectorAll(".card")
    allCards.style = "pointer-events: none";

    interval = setInterval(timer, 1000);
    count = 0;
    timerDisplay = document.querySelector(".timer");

    let modal = document.querySelector(".modal-container");
    modal.style = "display:none";
  }
}