// https://adventofcode.com/2022/day/4
import getInput from "../utils/getInput.js";

const input = await getInput();

// Part 1
const rangePairs = input.split("\n").map((line) => line.split(",")
    .map((range) => range.split("-").map(Number))) as Array<[[number, number], [number, number]]>;
let pairsCount = 0;

for (const [[start1, end1], [start2, end2]] of rangePairs) {
    const firstIsEnclosed = start1 >= start2 && start1 <= end2 && end1 <= end2;
    const secondIsEnclosed = start2 >= start1 && start2 <= end1 && end2 <= end1;

    if (firstIsEnclosed || secondIsEnclosed)
        pairsCount++;
}
console.log(pairsCount);

// Part 2
pairsCount = 0;
for (const [[start1, end1], [start2, end2]] of rangePairs) {
    const start1IsInRange2 = start1 >= start2 && start1 <= end2;
    const start2IsInRange1 = start2 >= start1 && start2 <= end1;

    if (start1IsInRange2 || start2IsInRange1)
        pairsCount++;
}
console.log(pairsCount);
