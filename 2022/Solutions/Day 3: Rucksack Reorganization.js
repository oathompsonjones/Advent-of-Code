// https://adventofcode.com/2022/day/3

const input = require("../Utils/GetInput")();

let rucksacks = input.split("\n").map((rucksack) => {
    const itemCount = rucksack.length;
    const compartment1 = rucksack.slice(0, itemCount / 2);
    const compartment2 = rucksack.slice(itemCount / 2, itemCount.length);
    return [compartment1, compartment2];
});
const getPriority = (item) => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = lower.toUpperCase();
    const priorities = [null, ...lower, ...upper];
    return priorities.indexOf(item);
};
let prioritySum = 0;
for (const [compartment1, compartment2] of rucksacks) {
    let item = null;
    for (let i = 0; i < compartment1.length; i++) {
        if (compartment2.includes(compartment1[i]))
            item = compartment1[i];
        else if (compartment1.includes(compartment2[i]))
            item = compartment2[i];
    }
    const priority = getPriority(item);
    prioritySum += priority;
}
console.log(prioritySum);

rucksacks = input.split("\n");
const groups = [];
for (let i = 0; i < rucksacks.length; i += 3)
    groups.push([rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]]);
prioritySum = 0;
for (const [one, two, three] of groups) {
    const largestRucksackSize = Math.max(...[one.length, two.length, three.length]);
    let commonItem = null;
    for (let i = 0; i < largestRucksackSize; i++) {
        if (two.includes(one[i] ?? null) && three.includes(one[i] ?? null))
            commonItem = one[i];
        else if (one.includes(two[i] ?? null) && three.includes(two[i] ?? null))
            commonItem = two[i];
        else if (one.includes(three[i] ?? null) && two.includes(three[i] ?? null))
            commonItem = three[i];
    }
    const priority = getPriority(commonItem);
    prioritySum += priority;
}
console.log(prioritySum);
