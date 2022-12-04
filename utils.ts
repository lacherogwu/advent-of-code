import __ from 'https://deno.land/x/dirname@1.1.2/mod.ts';

// legacy
export function readTextFile(fileName: string, importMeta = import.meta) {
	const filePath = `${dirname(importMeta)}/${fileName}`;
	return Deno.readTextFile(filePath);
}

export function getInput(importMeta = import.meta) {
	const [fileName] = Deno.args;
	if (!fileName) throw new Error('No input file specified');
	const filePath = `${dirname(importMeta)}/${fileName}`;
	return Deno.readTextFile(filePath);
}

function dirname(importMeta = import.meta) {
	const { __dirname } = __(importMeta);
	return __dirname;
}
