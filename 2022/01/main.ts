import { readTextFile } from '../../utils.ts';

const fileName = 'input.txt';

const input = await readTextFile(fileName);
const splittedText = input.trim().split('\n');

const inventories = parseTextToGroups(splittedText);
const countTotalCaloriesOfEachInventory = inventories.map(inventory => {
	const total = inventory.reduce((acc, calories) => acc + +calories, 0);
	return total;
});

export const sortedItems = countTotalCaloriesOfEachInventory.sort((a, b) => b - a);

function parseTextToGroups(items: string[]) {
	const groups = [];

	let currentGroup = [];
	for (const item of items) {
		if (item === '') {
			groups.push(currentGroup);
			currentGroup = [];
			continue;
		}
		currentGroup.push(item);
	}
	groups.push(currentGroup);

	return groups;
}
