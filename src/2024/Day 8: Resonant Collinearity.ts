// https://adventofcode.com/2024/day/8
import getInput from "../getInput.js";

const input = await getInput();

// Part 1

const map = input.split("\n").map((row) => row.split(""));
const antennae: Record<string, Array<[number, number]>> = {};
let antinodes = new Set<string>();

for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y]!.length; x++) {
        if (map[y]![x] !== ".")
            (antennae[map[y]![x]!] ??= []).push([x, y]);
    }
}

for (const freq in antennae) {
    const ants = antennae[freq]!;

    for (let i = 0; i < ants.length; i++) {
        for (let j = i + 1; j < ants.length; j++) {
            const [x1, y1] = ants[i]!;
            const [x2, y2] = ants[j]!;
            const dx = x2 - x1;
            const dy = y2 - y1;
            const p1 = [x1 - dx, y1 - dy];
            const p2 = [x2 + dx, y2 + dy];

            if (map[p1[1]!]?.[p1[0]!] !== undefined)
                antinodes.add(p1.join(","));

            if (map[p2[1]!]?.[p2[0]!] !== undefined)
                antinodes.add(p2.join(","));
        }
    }
}

console.log(antinodes.size);

// Part 2

antinodes = new Set<string>();

for (const freq in antennae) {
    const ants = antennae[freq]!;

    for (let i = 0; i < ants.length; i++) {
        for (let j = i + 1; j < ants.length; j++) {
            const [x1, y1] = ants[i]!;
            const [x2, y2] = ants[j]!;
            const dx = x2 - x1;
            const dy = y2 - y1;

            for (let x = x1, y = y1; map[y]?.[x] !== undefined; x += dx, y += dy)
                antinodes.add(`${x},${y}`);

            for (let x = x1, y = y1; map[y]?.[x] !== undefined; x -= dx, y -= dy)
                antinodes.add(`${x},${y}`);
        }
    }
}

console.log(antinodes.size);
