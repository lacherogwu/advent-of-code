import { getTextInput } from '../../utils.ts';

const input = await getTextInput(import.meta);

const newLineIndex = input.indexOf('\n\n');
const stacksTextInput = input.substring(0, newLineIndex);

export const crateStacks = parseStacksInput(stacksTextInput);

const instructionsText = input.slice(newLineIndex + 2).split('\n');
export const instructions = instructionsText.map(parseInstruction);

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

export function getTopCrates(stack: string[][]) {
	const top: string[] = [];
	stack.forEach(item => {
		const lastItem = item.at(-1);
		if (lastItem) {
			top.push(lastItem);
		}
	});
	return top;
}

function parseInstruction(text: string): [number, number, number] {
	const [amount, from, to] = text.match(/\d+/g)!;
	return [+amount, +from, +to];
}

export function move(crateStacks: string[][], instructions: [number, number, number], callback: (fromStack: string[], amount: number) => string[] | string) {
	const [amount, from, to] = instructions;
	const fromStack = crateStacks[from - 1];
	const toStack = crateStacks[to - 1];
	const cratesToMove = callback(fromStack, amount);
	toStack.push(...cratesToMove);
}
