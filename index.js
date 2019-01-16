let suits = ['Hearts','Clubs','Diamonds','Spades'];

let values = ['ace','one','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king'];

let deck = [];

// iterate through 4 of the suits and add cards
function createDeck(){
	let deck = []
	// insert the cards to the deck 
	for (let suitIdx=0; suitIdx < suits.length; suitIdx++){
		for (let valueIdx=0; valueIdx < values.length; valueIdx++){
			let card = {
				suit: suits[suitIdx],
				value: values[valueIdx]
			};
			deck.push(card); // push values to stack
		}
	}
	return deck // return stack 
}

function getNextCard(){
	return deck.shift()
}

function getCardString(card){
	return card.value + ' of ' + card.suit;
}


// createDeck() 
deck = createDeck(); // pass return values in the variable 

let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to BlackJack")
console.log("Cards in Deck " + deck.length);

console.log(" You're dealt: ");
console.log("   " + getCardString(playerCards[0]));
console.log("   " + getCardString(playerCards[1]));
