// https://adventofcode.com/2024/day/20
import getInput from "../getInput.js";

const input = await getInput();

/* Input = `###############
#...#...#.....#
#.#.#.#.#.###.#
#S#...#.#.#...#
#######.#.#.###
#######.#.#...#
#######.#.###.#
###..E#...#...#
###.#######.###
#...###...#...#
#.#####.#.###.#
#.#...#.#.#...#
#.#.#.#.#.#.###
#...#...#...###
###############`; */

// Part 1

const grid = input.split("\n").map((row) => row.split(""));
const width = grid[0]!.length;
const startIndex = input.split("\n").join("").indexOf("S");
const endIndex = input.split("\n").join("").indexOf("E");

const coordsToIndex = (x: number, y: number): number => y * width + x;
const indexToCoords = (index: number): [number, number] => [index % width, Math.floor(index / width)];
const neighbours = (_grid: string[][], index: number): number[] => {
    const [x, y] = indexToCoords(index);

    return ([[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]] as Array<[number, number]>)
        .filter(([nx, ny]) => _grid.flat()[coordsToIndex(nx, ny)] !== "#")
        .map(([nx, ny]) => coordsToIndex(nx, ny));
};
const aStar = (_grid: string[][], start: number, end: number, path: number[]): number => {
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

        for (const neighbour of neighbours(_grid, current)) {
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
/* Const drawPath = (_grid: string[][], _path: number[]): void => {
    for (let y = 0; y < _grid.length; y++) {
        for (let x = 0; x < width; x++) {
            const index = coordsToIndex(x, y);

            if (startIndex === index)
                process.stdout.write("\x1b[31m█\x1b[0m");
            else if (endIndex === index)
                process.stdout.write("\x1b[32m█\x1b[0m");
            else if (y === 57 && x === 21)
                process.stdout.write("#");
            else if (_path.includes(index))
                process.stdout.write("\x1b[34m█\x1b[0m");
            else
                process.stdout.write(_grid[y]![x] === "#" ? "█" : " ");
        }
        process.stdout.write("\n");
    }
    process.stdout.write("\n");
}; */

const originalLength = aStar(grid, startIndex, endIndex, []);
const wallPositions = grid.flat().map((cell, index) => (cell === "#" ? index : -1)).filter((index) => index !== -1);
const grids = wallPositions.map((wallIndex) => {
    const [x, y] = indexToCoords(wallIndex);
    const newGrid = grid.map((row) => [...row]);

    newGrid[y]![x] = ".";

    return newGrid;
});
const pathLengths = grids.map((g) => {
    const path: number[] = [];
    const pathLength = aStar(g, startIndex, endIndex, path);
    // DrawPath(g, path);

    return pathLength;
});
const timeSaved = new Map<number, number>();

for (const length of pathLengths)
    timeSaved.set(originalLength - length, (timeSaved.get(originalLength - length) ?? 0) + 1);

const keysGreaterThan100 = [...timeSaved.keys()].filter((k) => k > 100);
const sum = keysGreaterThan100.reduce((a, b) => a + timeSaved.get(b)!, 0);

console.log(sum);

// Part 2

