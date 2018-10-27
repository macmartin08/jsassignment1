// Step 1a - Select and store the gameboard element
const gameboard = document.querySelector('#gameBoard');
// Step 1b - Select and store the score element.
const score = document.querySelector('#score');
// Step 1c - Select and store the cards element
const cards = document.querySelector('#cards');
// Step 1d - Select and store the message element
const message = document.querySelector('#message');

const reset = document.querySelector('#reset');
 

// Step 2 - Create an array of cards
const cardValues = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
let deck = [];

// Step 2a - Create a function to shuffle the deck
function shuffleDeck () {
  // Step 2b - Create a placeholder array
  const tmp = [];

  // Step 2c - Iterate through card values 4 times
  for (var i = 0;i<53;i++) {
    // Step 2d - Using a conditional loop
    if (cardValues != 0) {
      // Step 2e - Select a random card from the array
      var randomCard = cardValues[Math.floor(Math.random() *cardValues.length)];
     
        deck.push(randomCard);
      // Step 2f - Add the card to the deck array
      
    }
  }

}

// Step 2g - Call the shuffleDeck function
shuffleDeck();
console.log(deck);
// Step 3a - Create an array to store 2 players
let players = [["player1",0],["player2",0]];

// Step 3b - Create a variable to store the current player
let  currentPlayer  = "player1";

// Step 3c - Create a variable to store the first selected card
let currentCard = null ;


// Step 4 - Iterate through the deck and bind a click event to each one
deck.forEach(function (element) {
  // Step 4a - Create a new div element to be a card
  var cardEle = document.createElement("div");

  // Step 3b - Add a 'card' class to the class list on the new div element
  cardEle.classList.add("card");

  // Step 3c - Add a data value to the card with the card's value in it
  cardEle.dataset.value = element;
 cardEle.textContent = element;

  // Step 3c - Bind the cardSelected function
  // to the click event on the cardEle

 cardEle.onclick=cardSelected;

 cards.append(cardEle);
 //console.log(cardEle);
});


// Step 5 - Create a function to store the logic
// for when a card is selected
function cardSelected (event) {
    var target = event.target 
    target.classList.add('flipped');
  // Step 5a - Check if there is already a card selected
  if(currentCard != null) {
    // Step 6 - Compare the cards
    //event.target.classList.add('flipped');
    if(currentCard.dataset.value == target.dataset.value) {
      // Step 6b - Add a class to the 2 card elements
      // flipping them over
      target.classList.add('flipped');

      // Step 6c - Add a point to the score for this player
       if(currentPlayer == "player1"){
        players[0][1]=+1;
       }else{
        players[1][1]=+1;
       }

      // Step 6d - Tell the player to go again
      // (use string interpolation to show which player you're addressing)
      message.textContent = `Congratulations! ${currentPlayer}, please go again!`;
      currentCard = null;
    } else {
       currentCard.classList.remove('flipped');
       target.classList.remove('flipped');
     
      // Step 6e - Provide a fail message to the player
      message.textContent = "Oh, so sorry!!! But yer' not psychic!";

      // Step 6f - Using a ternary, change players
      currentPlayer == "player1" ? currentPlayer = "player2" : currentPlayer = "player1"
      console.log(players[0][1]+" "+players[1][1]);
      // Step 6g - Concatenate a message to the message element
      // advising player 2 that it's their turn now
      // (use string interpolation to show which player you're addressing)
      message.textContent = `${currentPlayer}, your turn!`;
      currentCard = null;
    }
  } else {
    // Step 5b - Assign the card to currentCard
     target.classList.add('flipped');
    currentCard = target;

    // Step 5c - Tell the player to select another card
    // (use string interpolation to show which player you're addressing)
    message.textContent = `${currentPlayer}, please select another card`;
  }

  // Step 7 - Check if the board is full
  if(players[0][1]+players[1][1] == 8) {
    // Step 7a - Check if one of the players has won
    if(players[0][1]>players[1][1]) {
      // Step 7b - Tell the player they've won
      // (use string interpolation to show which player you're addressing)
      message.textContent = `player1, you won!!! Congratulations!`;
    }else if(players[0][1]<players[1][1]) {
        message.textContent = `player2, you won!! Congratulations!`;
    }else {
      // Step 7c - Tell the players that the game has ended in a tie
      message.textContent = "The game was a tie! Nice try!";
    }
  }
  }


// Take it further - Reset the board allowing the user to play again (Worth 20% of the final grade)
/*
  Step 1 - You will need a reset button in index.html
  Step 2 - You will need to bind an event listener
           that detects the click and executes a function


  Step 3 - You will need to reset all the pieces on the
           board
  Step 4 - You will need to reset the messages
  Step 5 - You will need to reset the players
*/

reset.onclick =resetboard;

function resetboard(){
        shuffleDeck();
       // deck.forEach(function(element){});
        message.textContent = `start again`;
        players = [["player1",0],["player2",0]];
}