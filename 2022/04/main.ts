import { getInput } from '../../utils.ts';

const input = await getInput(import.meta);

export const parsed = parseInput(input);

function parseInput(lines: string[]) {
	return lines.map(line => {
		const pairs = line.split(',');

		return pairs.map(pair => {
			const [start, end] = pair.split('-').map(i => +i);
			return Array.from({ length: end - start + 1 }, (_, i) => start + i);
		});
	});
}
