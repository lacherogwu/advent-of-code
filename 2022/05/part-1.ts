import { crateStacks, instructions, getTopCrates, move } from './main.ts';

instructions.forEach(instruction => {
	move(crateStacks, instruction, (fromStack, amount) => {
		return fromStack.splice(-amount).reverse();
	});
});

const topCrates = getTopCrates(crateStacks);
const output = topCrates.join('');
console.log(output);
