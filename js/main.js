// alert('Hello, friends.');

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var flipCard = function(cardId) {
	
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}
}

