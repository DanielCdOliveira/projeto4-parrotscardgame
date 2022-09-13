<div align="center"><img style = "width:100%;"src="https://i.imgur.com/1sJWlDS.png"></img></div>
<hr>
<h2 align=center>Parrots card game</h2>
<h3 align=center>Web development Project</h3>
<hr>
<h4 align=center>A memory card game made with HTML, CSS and JavaScript</h4>
<h4 align=center>The objective of the game is to find the pairs of cards in the shortest time and with the fewest possible moves.</h4>
<br>
<div align=center style="display:flex; justify-content: center; gap:5%">
    <img src="https://media.giphy.com/media/luaJ7ERSBXGUq41AlO/giphy.gif" width="480" height="270" frameBorder="0"></img>
</div>
<br><hr>

## Features

- User can select number of cards (4-14)
- Cards are shuffled before being rendered
- CSS animations to turn the cards and visual change when making pairs
- Time and attempt count
- When winning the number of attempts and the time is displayed
- User can restart after win
- Mobile and Desktop layout

### Deploy 
- Deploy using [GitHub Pages](https://danielcdoliveira.github.io/projeto4-parrotscardgame/)

## Requirements

- Layout
  - [x] Follow the provided figma desktop layout
  - [x] Follow the provided figma mobile layout

- Dealing of cards
  - [x] When entering the game, the user should be asked how many cards he wants to play (use prompt)
  - [x] The user can only enter even numbers at the prompt, from 4 to 14. Any number that does not comply with this rule should not be accepted. In the case of invalid numbers, the prompt must be repeated until the user enters a valid number.
  - [x] After entering a valid number of cards, the game must insert the cards face down on the page so that the distribution is random
- Click on the letter
    - [x] When clicking on a card, it must be turned over
    - [x] If it is the first card of the pair, it must remain face up until the user chooses the second card
    - [x] If the second card is turned over, there are 2 situations:
        - [x] If it is the same as the first card, the user got it right and both must now be face up until the end of the game
        - [x] If it is a different card than the first card turned over, the user has made a mistake. In this case, the game must **wait 1 second** and then turn the two cards face down again.
- End of the game
    - [x] When the user finishes turning over all the cards correctly, an `alert` should be displayed with the message **"You won in X moves!"** where X is the number of times the user turned a card in the game .

### Built with

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

### Contact

[![LinkedIn][linkedin-shield]][linkedin-url]

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/danielcdoliveira/
