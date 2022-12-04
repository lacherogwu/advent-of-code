import { sortedItems } from './main.ts';

const topThree = sortedItems.slice(0, 3);
const output = topThree.reduce((acc, item) => acc + item, 0);

console.log(output);
