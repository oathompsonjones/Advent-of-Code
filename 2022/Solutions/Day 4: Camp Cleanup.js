// https://adventofcode.com/2022/day/4
const input = require("../Utils/GetInput")();

const rangePairs = input.split("\n").map((line) => line.split(",").map((range) => range.split("-").map(Number)));
const getRange = (start, end) => {
    const range = [];
    for (let i = start; i <= end; i++)
        range.push(i);
    return range;
};
const fullyEnclosedPairs = [];
for (const [[start1, end1], [start2, end2]] of rangePairs) {
    const range1 = getRange(start1, end1);
    const range2 = getRange(start2, end2);
    const firstIsEnclosed = range1.every((x) => range2.includes(x));
    const secondIsEnclosed = range2.every((x) => range1.includes(x));
    if (firstIsEnclosed || secondIsEnclosed)
        fullyEnclosedPairs.push([[start1, end1], [start2, end2]]);
}
console.log(fullyEnclosedPairs.length);

const overlapPairs = [];
for (const [[start1, end1], [start2, end2]] of rangePairs) {
    const range1 = getRange(start1, end1);
    const range2 = getRange(start2, end2);
    const isOverlap = range1.some((x) => range2.includes(x));
    if (isOverlap)
        overlapPairs.push([[start1, end1], [start2, end2]]);
}
console.log(overlapPairs.length);
