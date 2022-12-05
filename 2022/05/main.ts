import { getTextInput } from '../../utils.ts';

const input = await getTextInput(import.meta);

const newLineIndex = input.indexOf('\n\n');
const stacksTextInput = input.substring(0, newLineIndex);

const crateStacks = parseStacksInput(stacksTextInput);

const instructions = input.slice(newLineIndex + 2).split('\n');

instructions.forEach(instruction => {
	const [amount, from, to] = parseInstruction(instruction);
	for (let i = 0; i < amount; i++) {
		move(from, to);
	}
});

const topCrates = getTopCrates(crateStacks);
const output = topCrates.join('');
console.log(output);

function parseStacksInput(stacksTextInput: string) {
	const lines = stacksTextInput.split('\n');
	const lastLine = lines.pop()?.trim();
	const numberOfStacks = +lastLine?.at(-1)!;
	const stacks: string[][] = Array.from({ length: numberOfStacks }, () => []);

	let currentIndex = 0;
	lines.reverse().forEach(line => {
		for (let i = 0; i < line.length; i += 4) {
			const mod = currentIndex % numberOfStacks;
			const charaterMatch = line
				.substring(i, i + 3)
				.trim()
				.match(/[A-Z]/);

			if (charaterMatch) {
				const [crate] = charaterMatch;
				stacks[mod].push(crate);
			}
			currentIndex++;
		}
		currentIndex = 0;
	});

	return stacks;
}

function getTopCrates(stack: string[][]) {
	const top: string[] = [];
	stack.forEach(item => {
		const lastItem = item.at(-1);
		if (lastItem) {
			top.push(lastItem);
		}
	});
	return top;
}

function move(from: number, to: number) {
	const fromStack = crateStacks[from - 1];
	const toStack = crateStacks[to - 1];
	const crate = fromStack.pop();
	if (crate) {
		toStack.push(crate);
	}
}

function parseInstruction(text: string) {
	const [amount, from, to] = text.match(/\d+/g)!;
	return [+amount, +from, +to];
}
