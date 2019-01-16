
//function

function showMessage(message,message1){
	console.log(message);
	console.log('and secondly ', message1);
}

showMessage("hi there",'your name?');

console.log('\n') // newline

// return function value
function triplePlus(value){
	console.log("input is ", value); // this is a beautification, despite ugly
	let newValue = value * 3;
	return newValue;
}

console.log(triplePlus(3));

// scope of functions

triplePlus(newValue) // reference error

/* 
accessing function outside of the 
*/
