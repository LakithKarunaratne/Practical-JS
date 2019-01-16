let state = 'TX';

switch (state){
	case 'NY':
		console.log('New York');
		break; // break statement will prevent fall through
	case 'TX':
		console.log('Texas');
		console.log('Austin');
		// fall through because of the blank space here
	default: // default is executed and must have in switch case
		console.log('unknown');
		break;
}
