import __ from 'https://deno.land/x/dirname@1.1.2/mod.ts';

export async function getInput(importMeta = import.meta) {
	const file = await getTextInput(importMeta);
	return file.trim().split('\n');
}

function dirname(importMeta = import.meta) {
	const { __dirname } = __(importMeta);
	return __dirname;
}

export function getTextInput(importMeta = import.meta) {
	return Deno.readTextFile(getFilePath(importMeta));
}

function getFilePath(importMeta = import.meta) {
	const [fileName] = Deno.args;
	if (!fileName) throw new Error('No input file specified');
	return `${dirname(importMeta)}/${fileName}`;
}
