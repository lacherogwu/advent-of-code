import { input, sumPriorities } from './main.ts';

const groups = splitToGroups(input, 3);
const output = sumPriorities(groups);
console.log(output);

function splitToGroups(array: string[], size = 2) {
	const groups = [];

	for (let i = 0; i < array.length; i += size) {
		groups.push(array.slice(i, i + size));
	}

	return groups;
}
