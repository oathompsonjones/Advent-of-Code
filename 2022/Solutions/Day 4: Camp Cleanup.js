// https://adventofcode.com/2022/day/4
const input = require("../Utils/GetInput")();

const rangePairs = input.split("\n").map((line) => line.split(",").map((range) => range.split("-").map(Number)));

let pairsCount = 0;
for (const [[start1, end1], [start2, end2]] of rangePairs) {
    const firstIsEnclosed = start1 >= start2 && start1 <= end2 && end1 <= end2;
    const secondIsEnclosed = start2 >= start1 && start2 <= end1 && end2 <= end1;
    if (firstIsEnclosed || secondIsEnclosed)
        pairsCount++;
}
console.log(pairsCount);

pairsCount = 0;
for (const [[start1, end1], [start2, end2]] of rangePairs) {
    const start1IsInRange2 = start1 >= start2 && start1 <= end2;
    const start2IsInRange1 = start2 >= start1 && start2 <= end1;
    if (start1IsInRange2 || start2IsInRange1)
        pairsCount++;
}
console.log(pairsCount);
