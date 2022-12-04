import __ from 'https://deno.land/x/dirname@1.1.2/mod.ts';
export function readTextFile(fileName: string, importMeta = import.meta) {
	const filePath = `${dirname(importMeta)}/${fileName}`;
	return Deno.readTextFile(filePath);
}

function dirname(importMeta = import.meta) {
	const { __dirname } = __(importMeta);
	return __dirname;
}
