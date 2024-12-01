// https://adventofcode.com/2022/day/3
import getInput from "../utils/getInput.js";

const input = await getInput();

// Part 1
const rucksacks1 = input.split("\n").map((rucksack) => {
    const itemCount = rucksack.length;
    const compartment1 = rucksack.slice(0, itemCount / 2);
    const compartment2 = rucksack.slice(itemCount / 2, itemCount);

    return [compartment1, compartment2];
});
const getPriority = (item: string | null): number => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = lower.toUpperCase();
    const priorities = [null, ...lower, ...upper];

    return priorities.indexOf(item);
};
let prioritySum = 0;

for (const [compartment1, compartment2] of rucksacks1) {
    let item = null;

    for (let i = 0; i < compartment1!.length; i++) {
        if (compartment2!.includes(compartment1![i]!))
            item = compartment1![i]!;
        else if (compartment1!.includes(compartment2![i]!))
            item = compartment2![i]!;
    }
    const priority = getPriority(item);

    prioritySum += priority;
}
console.log(prioritySum);

// Part 2
const rucksacks2 = input.split("\n");
const groups: Array<[string, string, string]> = [];

for (let i = 0; i < rucksacks2.length; i += 3)
    groups.push([rucksacks2[i]!, rucksacks2[i + 1]!, rucksacks2[i + 2]!]);
prioritySum = 0;
for (const [one, two, three] of groups) {
    const largestRucksackSize = Math.max(...[one.length, two.length, three.length]);
    let commonItem = null;

    for (let i = 0; i < largestRucksackSize; i++) {
        if (two.includes(one[i]!) && three.includes(one[i]!))
            commonItem = one[i]!;
        else if (one.includes(two[i]!) && three.includes(two[i]!))
            commonItem = two[i]!;
        else if (one.includes(three[i]!) && two.includes(three[i]!))
            commonItem = three[i]!;
    }
    const priority = getPriority(commonItem);

    prioritySum += priority;
}
console.log(prioritySum);
