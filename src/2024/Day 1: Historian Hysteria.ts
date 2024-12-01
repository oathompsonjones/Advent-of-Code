// https://adventofcode.com/2024/day/1
import getInput from "../getInput.js";

const input = await getInput();

// Part 1

// Split the input into two lists of numbers
const lists: [number[], number[]] = input.split("\n").map((line) => line.split("   ").map(Number))
    .reduce((acc: [number[], number[]], [a, b]) => [acc[0].concat(a!), acc[1].concat(b!)], [[], []]);
// Sort the lists.
const sortedLists = lists.map((list) => list.sort((a, b) => a - b)) as [number[], number[]];
// Calculate the sum of the differences of the sorted lists.
const sumOfDifferences =
    // Pair up the numbers
    sortedLists[0].map((_, i) => [sortedLists[0][i], sortedLists[1][i]])
        // Calculate the difference of each pair
        .map(([a, b]) => Math.abs(b! - a!))
        // Sum the differences
        .reduce((acc, diff) => acc + diff, 0);

console.log(sumOfDifferences);

// Part 2

const similarity =
    // Multiply the number by the number of times it appears in the other list
    lists[0].map((num) => num * lists[1].filter((n) => n === num).length)
        // Sum the products
        .reduce((acc, product) => acc + product, 0);

console.log(similarity);
