const cards = [
{
	rank : "queen",
	suit : "hearts",
	cardImage : "images/queen-of-hearts.png"
},
{
	rank : "queen",
	suit : "diamonds",
	cardImage : "images/queen-of-diamonds.png"
},
{
	rank : "king",
	suit : "hearts",
	cardImage : "images/king-of-hearts.png"
},
{
	rank : "king",
	suit : "diamonds",
	cardImage : "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];
function createBoard(){
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}
createBoard()

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	alert("You found a match!");
} else {
  	alert("Sorry, try again.");}
}


function flipCard(){
	let cardId = this.getAttribute("data-id");
	console.log("User flipped" + " " + cards[cardId].rank + "of" + cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	//console.log(cards[cardId].cardImage);*//*-checking to see if I need this
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);

 if (cardsInPlay.length === 2) {
	checkForMatch(); 
	}
}

 /*createBoard()*/


//moved this function aboce the flipCard & checkForMatch funcitons 8 cards...
/*function createBoard(){
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("Click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}*/
 

/*
console.log(cardImage)
console.log(suit)
*/

/*-- deleted cause i need to call/evoke the createBoard function.
flipCard(0);
flipCard(2);
*/
