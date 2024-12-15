// https://adventofcode.com/2024/day/13
import getInput from "../getInput.js";

const input = await getInput();

// Part 1

let score = 0;
let machines: Array<{ a: [number, number]; b: [number, number]; prize: [number, number]; }> = input
    .split("\n\n").map((machine) => {
        // eslint-disable-next-line max-len
        const regex = /ButtonA:X\+(?<ax>\d+),Y\+(?<ay>\d+)\nButtonB:X\+(?<bx>\d+),Y\+(?<by>\d+)\nPrize:X=(?<x>\d+),Y=(?<y>\d+)/u;
        const match = regex.exec(machine.replace(/ /gu, ""))!;

        return {
            a: [parseInt(match.groups!.ax!, 10), parseInt(match.groups!.ay!, 10)],
            b: [parseInt(match.groups!.bx!, 10), parseInt(match.groups!.by!, 10)],
            prize: [parseInt(match.groups!.x!, 10), parseInt(match.groups!.y!, 10)],
        };
    });

for (const { a, b, prize } of machines) {
    i: for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            if (prize[0] === a[0] * i + b[0] * j && prize[1] === a[1] * i + b[1] * j) {
                score += 3 * i + j;
                break i;
            }
        }
    }
}

console.log(score);

// Part 2

score = 0;
machines = machines.map((machine) => ({
    ...machine,
    prize: machine.prize.map((p) => p + 10000000000000) as [number, number],
}));

for (const { a, b, prize } of machines) {
    const matrix = [
        [a[0], b[0]],
        [a[1], b[1]],
    ] as [[number, number], [number, number]];
    const det = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    const inverse = [
        [matrix[1][1], -matrix[0][1]],
        [-matrix[1][0], matrix[0][0]],
    ].map((row) => row.map((value) => value / det)) as [[number, number], [number, number]];
    const [x, y] = inverse.map((row) => row[0] * prize[0] + row[1] * prize[1]) as [number, number];

    // Account for floating point errors
    const threshold = 1e-3;

    if (Math.abs(x - Math.round(x)) > threshold || Math.abs(y - Math.round(y)) > threshold)
        continue;

    score += 3 * Math.round(x) + Math.round(y);
}

console.log(score);
