

// let numberOfCards = askCards();

// function askCards () {
// do{
//     number = prompt("Quantas cartas você deseja? (números pares de 4 à 14)")
// } while(number   < 4 || number > 16 || number %2 != 0)
// console.log(number  );
// return number;
// }


function flip (element) {

  element.querySelector(".front").classList.toggle("flip")
  element.querySelector(".back").classList.toggle("flip2")
}

