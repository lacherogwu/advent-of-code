import __ from 'https://deno.land/x/dirname@1.1.2/mod.ts';

export async function getInput(importMeta = import.meta) {
	const [fileName] = Deno.args;
	if (!fileName) throw new Error('No input file specified');
	const filePath = `${dirname(importMeta)}/${fileName}`;
	const file = await Deno.readTextFile(filePath);
	return file.trim().split('\n');
}

function dirname(importMeta = import.meta) {
	const { __dirname } = __(importMeta);
	return __dirname;
}
