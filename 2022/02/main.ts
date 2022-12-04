import { readTextFile } from '../../utils.ts';

const fileName = 'sample-input.txt';
const input = await readTextFile(fileName, import.meta);
console.log(input);
