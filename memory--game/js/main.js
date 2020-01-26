const cards = ["Queen", "Queen", "King", "King"];
let cardsInPlay = [];
let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped" + " " + cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped" + " " + cardTwo);


if (cardsInPlay.length === 2) {
	console.log("True.");
} if (cardsInPlay[0] === cardsInPlay[1]) {
	alert ("You found a match!");
} else {
	alert ("Try again :(");
}
/*
if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
} else(cardsInPlay[0] = cardsInPlay[1]) {
	console.log("Try Again :(");
}
	


	/*} else if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You've found a match!");
	} else alert("Sorry, try again.");
};*/

// I think iI have the symtax wrong.


/*alert("Hello, Dupas!");*/


