// https://adventofcode.com/2022/day/10
import getInput from "../getInput.js";

const input = await getInput();

// Part 1
const instructions = input.split("\n").map((line) => line.split(" "))
    .map(([cmd, args]) => [cmd, Number(args)]);
const xs = [1, 1];
let instruction = 0;
let shouldIncrementInstruction = true;

for (let cycle = 1; instruction < instructions.length; cycle++) {
    const X = xs[xs.length - 1]!;
    const [cmd, args] = instructions[instruction] as [string, number];

    switch (cmd) {
        case "noop":
            shouldIncrementInstruction = true;
            xs[cycle + 1] = X;
            break;
        case "addx":
            shouldIncrementInstruction = !shouldIncrementInstruction;
            xs[cycle + 1] = shouldIncrementInstruction ? X + args : X;
            break;
    }

    if (shouldIncrementInstruction)
        instruction++;
}
const signalStrengthsSum = xs
    .map((x, i) => x * i)
    .filter((_, i) => i % 40 === 20)
    .reduce((a, b) => a + b);

console.log(signalStrengthsSum);

// Part 2
const rows: string[] = [];

for (let cycle = 1; cycle < xs.length - 1; cycle++) {
    const column = (cycle - 1) % 40;
    const row = Math.floor((cycle - 1) / 40);

    rows[row] ??= "";
    rows[row] += [column - 1, column, column + 1].includes(xs[cycle]!) ? "#" : ".";
}
console.log(rows.join("\n"));
