import { getInput } from '../../utils.ts';

const input = await getInput(import.meta);

const inventories = parseTextToGroups(input);
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
