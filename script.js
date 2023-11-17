//const start = document.getElementById("button1") ;
const memoryCard =document.querySelectorAll('.memory-card');
const startbutton =document.getElementById('start-button');
 



console.log (memoryCard);
for (let i = 0; i< memoryCard.length; i++){



memoryCard[i].addEventListener("click",  function(evt){
    evt.preventDefault();
    console.log (evt.target);
   console.log(evt.target.parentNode.children);
   let childNodes =evt.target.parentNode.children;
   for (let i =0; i < childNodes.length; i++){
    childNodes[i].classList.toggle("hide");

    // Variables
  let memoryCard = [i];
  let matches = 0;
  let rounds = 0;
  // Function to check for win state
  function checkWin() {
    if (matches === 8) {
      alert("Congratulations! You won!");
      resetGame();
    }
  }
  // Function to check for lose state
  function checkLose() {
    if (rounds >= 2 && matches < 8) {
      alert("Sorry, you lost. Better luck next time!");
      resetGame();
    }
  }
    
   }
});
}
// Function to handle card click
function cardClick(index) {
    if( memoryCard.length < 2) {
     memoryCard.push(index);
      document.getElementById(`card${index}`).textContent = deck[index];

      if (memoryCard.length === 2) {
        setTimeout(checkMatch, 1000);
      }
    }
  }
  // Function to check if the flipped cards match
  function checkMatch() {
    const [index1, index2] = memoryCard;
    const card1 = deck[index1];
    const card2 = deck[index2];
    if (card1 === card2) {
      matches++;
      updateMatches();
    } else {
      document.getElementById(`card${index1}`).textContent = '';
      document.getElementById(`card${index2}`).textContent = '';
      rounds++;
      updateRounds();
    }

    flippedCards = [];
    checkWin();
    checkLose();
  }

  // Function to render the game board
  function renderGame() {
    const memoryCard= document.getElementById('memory-card');
   memoryCard.innerHTML = '';

    for (let i = 0; i < deck.length; i++) {
      const card = document.createElement('div');
      card.className = 'card';
      card.id = `card${i}`;
      card.addEventListener('click', () => cardClick(i));
      memoryCard.appendChild(card);
    }
  }

  // Initialize the game
  const deck = createDeck();
  renderGame();

