

// let numberOfCards = askCards();

// function askCards () {
// do{
//     number = prompt("Quantas cartas você deseja? (números pares de 4 à 14)")
// } while(number   < 4 || number > 16 || number %2 != 0)
// console.log(number  );
// return number;
// }
const cards = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];







function flip (element) {

  element.querySelector(".front").classList.toggle("flip")
  element.querySelector(".back").classList.toggle("flip2")
}

function createCards(index){
  let card = document.querySelector("section");
  card.innerHTML += `
  <div onclick="flip(this)" class="card">
  <div  class="front face">
      <img src="assets/front.png" alt="">
  </div>
  <div  class="back face">
      <img src="assets/${cards[index]}" alt="">
  </div>
</div>`
}

createCard();