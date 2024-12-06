// https://adventofcode.com/2024/day/6
import getInput from "../getInput.js";

const input = await getInput();

// Part 1

const initialMap = input.split("\n").map((row) => row.split(""));
const width = initialMap[0]!.length;
const initialPosition = initialMap
    .flatMap((row, y) => row.map((cell, x) => [cell, x, y]))
    .find(([cell]) => cell === "^")!
    .slice(1) as [number, number];
const initialDirection = [0, -1] as [number, number];

const runPatrol = (
    map: string[][],
    position: [number, number],
    direction: [number, number],
): [Set<string>, boolean] => {
    const visited = new Set<string>();
    const visitedStates = new Set<string>();
    let inMap = true;

    while (inMap) {
        const [px, py] = position;
        const [dx, dy] = direction;

        if (visitedStates.has(`${px},${py},${dx},${dy}`))
            return [visited, true];

        visited.add(`${px},${py}`);
        visitedStates.add(`${px},${py},${dx},${dy}`);

        switch (map[py + dy]?.[px + dx]) {
            case undefined:
                inMap = false;
                break;
            case "#":
                direction[0] = -dy;
                direction[1] = dx;
                break;
            case "^":
            case ".":
                position[0] += dx;
                position[1] += dy;
                break;
        }
    }

    return [visited, false];
};

console.log(runPatrol(initialMap, [...initialPosition], [...initialDirection])[0].size);

// Part 2

const obstructionPositions = new Set<string>();

for (let oy = 0; oy < initialMap.length; oy++) {
    for (let ox = 0; ox < width; ox++) {
        if (initialPosition[0] === ox && initialPosition[1] === oy)
            continue;

        const map = initialMap.map((row) => row.slice());

        map[oy]![ox] = "#";

        if (runPatrol(map, [...initialPosition], [...initialDirection])[1])
            obstructionPositions.add(`${ox},${oy}`);
    }
}

console.log(obstructionPositions.size);
