import { parsed } from './main.ts';

const output = parsed.reduce((acc, [a, b]) => {
	if (isPartiallyOverlap(a, b) || isPartiallyOverlap(b, a)) {
		acc++;
	}
	return acc;
}, 0);
console.log(output);

function isPartiallyOverlap(a: number[], b: number[]) {
	return a.some(i => b.includes(i));
}
