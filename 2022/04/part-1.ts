import { parsed } from './main.ts';

const output = parsed.reduce((acc, [a, b]) => {
	if (isFullyOverlap(a, b) || isFullyOverlap(b, a)) {
		acc++;
	}
	return acc;
}, 0);
console.log(output);

function isFullyOverlap(a: number[], b: number[]) {
	return a.every(i => b.includes(i));
}
