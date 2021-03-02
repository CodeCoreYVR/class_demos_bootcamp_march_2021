const args = process.argv.slice(2); // args === ['3','4','3']
const s0 = parseFloat(args[0]);
const s1 = parseFloat(args[1]);
const s2 = parseFloat(args[2]);

if (s0 <= 0 || s1 <= 0 || s2 <= 0 || s0 + s1 <= s2 || s0 + s2 <= s1 || s1 + s2 <= s0) {
	console.log('Impossible Triangle!');
} else {
	const perimeter = s0 + s1 + s2;
	console.log(`Perimeter: ${perimeter}`);
	const halfP = perimeter / 2;
	// Formula from internet https://www.mathopenref.com/heronsformula.html
	const area = Math.sqrt(halfP * (halfP - s0) * (halfP - s1) * (halfP - s2));
	// Another, similar, way of calculating the area
	// const area = Math.abs(halfP * (halfP - a) * (halfP - b) * (halfP - c)) ** 0.5;
	console.log(`Area: ${area.toFixed(4)}`);
}
