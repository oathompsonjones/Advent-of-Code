// https://adventofcode.com/2022/day/5
import getInput from "../utils/getInput.js";

const input = await getInput();

// Part 1
const [stacksInput, procedureInput] = input.split("\n\n") as [string, string];
const setupStacks = (): string[][] => {
    const reversedStacksInput = stacksInput.split("\n").reverse();
    const firstElement = reversedStacksInput.shift()!.trim().split(" ");
    const stacksCount = Number(firstElement[firstElement.length - 1]);
    const stacks = Array(stacksCount).fill(0).map((): string[] => []);

    for (const line of reversedStacksInput) {
        for (let i = 0; i < stacksCount; i++) {
            const item = line.substring(4 * i, 4 * i + 4);

            if (item.trim()[1]!)
                stacks[i]!.push(item.trim()[1]!);
        }
    }

    return stacks;
};
let stacks = setupStacks();
const procedure1 = procedureInput.split("\n").map((line) => line.split(" "))
    .map((words) => [Number(words[1]), Number(words[3]) - 1, Number(words[5]) - 1])
    .map(([count, ...step]) => Array(count).fill(step) as Array<[number, number]>)
    .flat();

for (const step of procedure1) {
    const [start, end] = step;
    const item = stacks[start]!.pop();

    stacks[end]!.push(item!);
}
console.log(stacks.map((stack) => stack[stack.length - 1]).join(""));

// Part 2
stacks = setupStacks();
const procedure2 = procedureInput.split("\n")
    .map((line) => line.split(" "))
    .map((words) => [
        Number(words[1]),
        Number(words[3]) - 1,
        Number(words[5]) - 1,
    ]);

for (const step of procedure2) {
    const [count, start, end] = step as [number, number, number];
    const items = stacks[start]!.splice(stacks[start]!.length - count, count);

    stacks[end]!.push(...items);
}
console.log(stacks.map((stack) => stack[stack.length - 1]).join(""));
