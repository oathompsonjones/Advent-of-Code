// https://adventofcode.com/2024/day/18
import getInput from "../getInput.js";

const input = await getInput();
const size = 71;
const steps = 1024;

/* Input = `5,4
4,2
4,5
3,0
2,1
6,3
2,4
1,5
0,6
3,3
2,6
5,1
1,2
5,5
2,5
6,5
1,4
0,4
6,4
1,1
6,1
1,0
0,5
1,6
2,0`;
size = 7;
steps = 12; */

// Part 1

const allCoords = input.split("\n").map((line) => line.split(",").map(Number)) as Array<[number, number]>;
let coords = allCoords.slice(0, steps);

const coordsToIndex = (x: number, y: number): number => y * size + x;
const indexToCoords = (i: number): [number, number] => [i % size, Math.floor(i / size)];
const neighbours = (i: number): number[] => {
    const [x, y] = indexToCoords(i);

    if (x < 0 || x >= size || y < 0 || y >= size)
        return [];

    return ([[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]] as Array<[number, number]>)
        .filter(([cx, ny]) => cx >= 0 && cx < size && ny >= 0 && ny < size)
        .filter(([cx, cy]) => !coords.some(([nx, ny]) => nx === cx && ny === cy))
        .map(([cx, cy]) => coordsToIndex(cx, cy));
};

const aStar = (start: number, end: number, path: number[]): number => {
    const openSet = [start];
    const cameFrom = new Map<number, number>();
    const gScore = new Map<number, number>([[start, 0]]);
    const fScore = new Map<number, number>([
        [
            start,
            Math.abs(indexToCoords(start)[0] - indexToCoords(end)[0]) +
            Math.abs(indexToCoords(start)[1] - indexToCoords(end)[1]),
        ],
    ]);

    while (openSet.length > 0) {
        let current = openSet.reduce((a, b) => (fScore.get(a)! < fScore.get(b)! ? a : b));

        if (current === end) {
            path.length = 0;
            path[0] = current;

            while (cameFrom.has(current)) {
                current = cameFrom.get(current)!;
                path.push(current);
            }

            return path.length - 1;
        }

        openSet.splice(openSet.indexOf(current), 1);

        for (const neighbour of neighbours(current)) {
            const tentativeGScore = gScore.get(current)! + 1;

            if (tentativeGScore < (gScore.get(neighbour) ?? Infinity)) {
                cameFrom.set(neighbour, current);
                gScore.set(neighbour, tentativeGScore);
                fScore.set(neighbour, tentativeGScore +
                    Math.abs(indexToCoords(neighbour)[0] - indexToCoords(end)[0]) +
                    Math.abs(indexToCoords(neighbour)[1] - indexToCoords(end)[1]));

                if (!openSet.includes(neighbour))
                    openSet.push(neighbour);
            }
        }
    }

    return -1;
};

let path: number[] = [];

aStar(0, size ** 2 - 1, path);

/* Const drawPath = (_path: number[]): void => {
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (_path.includes(coordsToIndex(x, y)))
                process.stdout.write("\x1b[34m█\x1b[0m");
            else if (coords.some(([cx, cy]) => cx === x && cy === y))
                process.stdout.write("█");
            else
                process.stdout.write(" ");
        }
        process.stdout.write("\n");
    }
};

drawPath(path); */
console.log(path.length - 1);

// Part 2

let block: [number, number] = [-1, -1];

for (let i = 0; i < allCoords.length; i++) {
    coords = allCoords.slice(0, i + 1);
    path = [];
    const solution = aStar(0, size ** 2 - 1, path);

    if (solution === -1) {
        block = allCoords[i]!;
        break;
    }
}

console.log(block);
