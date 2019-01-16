
function changeCard(card){
	card.suit = "Clubs";
};

let card1 = {
	suit: "Heats",
	value: "Queen"
};

changeCard(card1)

// console.log(card1)

/* Even after the execution of the function the card remains changed */

let cards = [
	{
		suit: "Hearts",
		value: "Queen"
	},
	{
		suit: "Clubs",
		value: "King"
	}
]


console.log(cards[2].value) // will give undefined, value 

