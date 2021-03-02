const args = process.argv.slice(2);
// > node fizzBuzz.js 3 5
// process.argv === ['node', 'fizzBuzz.js', '3', '5']
// args === ['3', '5'];
const fizz = args[0];
const buzz = args[1];

for (let i = 1; i <= 10000; i++) {
	if (i % fizz === 0 && i % buzz === 0) {
		console.log('FIZZBUZZ');
	} else if (i % fizz === 0) {
		console.log('FIZZ');
	} else if (i % buzz === 0) {
		console.log('BUZZ');
	} else {
		console.log(i);
	}
}