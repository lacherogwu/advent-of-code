import { getInput } from '../../utils.ts';

export const input = await getInput(import.meta);

export const scoreMap: Record<string, number> = {
	rock: 1,
	paper: 2,
	scissors: 3,
	lost: 0,
	draw: 3,
	win: 6,
};

const baseDecryptionMap: Record<string, string> = {
	A: 'rock',
	B: 'paper',
	C: 'scissors',
};

export function decrypt(input: string, secondColumnDecryptionMap: Record<string, string>) {
	const decryptMap = [baseDecryptionMap, secondColumnDecryptionMap];
	return input.split(' ').map((char, i) => decryptMap[i][char]);
}

export function play(a: string, b: string): string {
	const RESULTS = {
		DRAW: 'draw',
		WIN: 'win',
		LOST: 'lost',
	};

	if (a === b) return RESULTS.DRAW;
	if (a === 'rock') {
		if (b === 'paper') return RESULTS.WIN;
		if (b === 'scissors') return RESULTS.LOST;
	}
	if (a === 'paper') {
		if (b === 'rock') return RESULTS.LOST;
		if (b === 'scissors') return RESULTS.WIN;
	}
	if (a === 'scissors') {
		if (b === 'rock') return RESULTS.WIN;
		if (b === 'paper') return RESULTS.LOST;
	}

	console.log({ a, b });
	return 'NOT_SET';
}
