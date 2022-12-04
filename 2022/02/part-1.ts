import { rounds, scoreMap, decrypt, play } from './main.ts';

const secondColumnDecryptionMap: Record<string, string> = {
	X: 'rock',
	Y: 'paper',
	Z: 'scissors',
};

const output = solve();
console.log(output);

function solve() {
	let totalScore = 0;
	rounds.forEach(round => {
		const [aShape, bShape] = decrypt(round, secondColumnDecryptionMap);

		const result = play(aShape, bShape);
		const score = scoreMap[result] + scoreMap[bShape];
		totalScore += score;
	});

	return totalScore;
}
