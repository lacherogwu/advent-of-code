import { input, sumPriorities } from './main.ts';

const formattedRucksacks = input.map(splitStringToHalf);
const output = sumPriorities(formattedRucksacks);
console.log(output);

function splitStringToHalf(input: string): [string, string] {
	const half = Math.floor(input.length / 2);
	const firstHalf = input.slice(0, half);
	const secondHalf = input.slice(half);
	return [firstHalf, secondHalf];
}
