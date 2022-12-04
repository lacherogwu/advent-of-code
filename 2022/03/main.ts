import { getInput } from '../../utils.ts';

export const input = await getInput(import.meta);

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function getPriority(character: string) {
	return alphabet.indexOf(character) + 1;
}

export function findMatchingCharacter(...args: string[]) {
	const [first] = args;

	let matchingCharacter = '';
	for (const char of first) {
		if (args.every(arg => arg.includes(char))) {
			matchingCharacter = char;
			break;
		}
	}

	return matchingCharacter;
}

export function sumPriorities(list: string[][]) {
	return list.reduce((acc, rucksack) => {
		const matchingCharacter = findMatchingCharacter(...rucksack);
		const priority = getPriority(matchingCharacter);
		return acc + priority;
	}, 0);
}
