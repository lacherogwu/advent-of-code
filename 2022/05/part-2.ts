import { crateStacks, instructions, getTopCrates, move } from './main.ts';

instructions.forEach(instruction => {
	move(crateStacks, instruction, (fromStack, amount) => {
		if (amount === 1) {
			return fromStack.pop()!;
		} else {
			return fromStack.splice(-amount);
		}
	});
});

const topCrates = getTopCrates(crateStacks);
const output = topCrates.join('');
console.log(output);
