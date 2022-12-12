import { getTextInput } from '../../utils.ts';

const input = await getTextInput(import.meta);

export function getMarkerIndex(charLength: number) {
	for (let i = 0; i < input.length; i++) {
		const string = input.slice(i, i + charLength);

		if (isUnique(string)) {
			return i + charLength;
		}
	}
}

function isUnique(string: string) {
	const chars = string.split('');
	const uniqueChars = new Set(chars);
	return uniqueChars.size === chars.length;
}
