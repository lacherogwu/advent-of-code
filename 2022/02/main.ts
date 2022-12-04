import { readTextFile } from '../../utils.ts';

const fileName = 'sample-input.txt';
const input = await readTextFile(fileName, import.meta);

export const rounds = input.split('\n');

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
	if (a === b) return 'draw';
	if (a === 'rock' && b === 'scissors') return 'lost';
	if (a === 'rock' && b === 'paper') return 'win';
	if (a === 'paper' && b === 'rock') return 'lost';
	if (a === 'paper' && b === 'scissors') return 'win';
	if (a === 'scissors' && b === 'paper') return 'lost';
	if (a === 'scissors' && b === 'rock') return 'win';
	else {
		console.log({ a, b });
		return 'NOT_SET';
	}
}
