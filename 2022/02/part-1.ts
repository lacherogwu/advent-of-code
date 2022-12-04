import { input, scoreMap, decrypt, play } from './main.ts';

const secondColumnDecryptionMap: Record<string, string> = {
	X: 'rock',
	Y: 'paper',
	Z: 'scissors',
};

const output = input.reduce((acc, round) => {
	const [aShape, bShape] = decrypt(round, secondColumnDecryptionMap);

	const result = play(aShape, bShape);
	const score = scoreMap[result] + scoreMap[bShape];
	return acc + score;
}, 0);

console.log(output);
