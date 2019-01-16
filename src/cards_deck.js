
let suits = ['Hearts','Clubs','Diamonds','Spades'];

let values = ['ace','one','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king'];

let deck = [];

// iterate through 4 of the suits and add cards
for (let suitIdx=0; suitIdx < suits.length; suitIdx++){
	for (let valueIdx=0; valueIdx < values.length; valueIdx++){
		deck.push(values[valueIdx]+ ' of ' + suits[suitIdx]);
	}
}

for (let i = 0; i < deck.length; i++){
	console.log(deck[i]);
}
console.log(deck.length);
