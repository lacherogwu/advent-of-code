import { input, scoreMap, decrypt, play } from './main.ts';

const secondColumnDecryptionMap: Record<string, string> = {
	X: 'lose',
	Y: 'draw',
	Z: 'win',
};

const output = input.reduce((acc, round) => {
	const [aShape, bResult] = decrypt(round, secondColumnDecryptionMap);

	const bShape = convertResultToShape(bResult, aShape);
	const result = play(aShape, bShape);
	const score = scoreMap[result] + scoreMap[bShape];
	return acc + score;
}, 0);

console.log(output);

function convertResultToShape(result: string, aShape: string) {
	let output = '';
	switch (result) {
		case 'draw':
			output = aShape;
			break;
		case 'win':
			if (aShape === 'rock') output = 'paper';
			else if (aShape === 'paper') output = 'scissors';
			else if (aShape === 'scissors') output = 'rock';
			break;
		case 'lose':
			if (aShape === 'rock') output = 'scissors';
			else if (aShape === 'paper') output = 'rock';
			else if (aShape === 'scissors') output = 'paper';
			break;
	}

	return output;
}
