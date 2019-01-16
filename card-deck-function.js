let suits = ['Hearts','Clubs','Diamonds','Spades'];

let values = ['ace','one','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king'];

let deck = [];

// iterate through 4 of the suits and add cards
function createDeck(){
	let deck = []
	// insert the cards to the deck 
	for (let suitIdx=0; suitIdx < suits.length; suitIdx++){
		for (let valueIdx=0; valueIdx < values.length; valueIdx++){
			deck.push(values[valueIdx]+ ' of ' + suits[suitIdx]);
		}
	}
	// print the deck
	for (let i = 0; i < deck.length; i++){
		console.log(deck[i]);
	}
}

createDeck()

console.log(deck.length);

