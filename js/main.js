// alert('Hello, friends.');

var cards = [
	{
		"rank": "queen",
		"suit": "hearts",
		"cardImage": "images/queen-of-hearts.png"
	},
	{
		"rank": "queen",
		"suit": "diamonds",
		"cardImage": "images/queen-of-diamonds.png"
	},
	{
		"rank": "king",
		"suit": "hearts",
		"cardImage": "images/king-of-hearts.png"
	},
	{
		"rank": "king",
		"suit": "diamonds",
		"cardImage": "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

var flipCard = function() {
	this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].suit);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventLister('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}

}

createBoard();

var gameBoard = function() {

}

