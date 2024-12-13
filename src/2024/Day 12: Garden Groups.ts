// https://adventofcode.com/2024/day/12
import getInput from "../getInput.js";

const input = await getInput();

// Part 1

const grid = input.split("\n").map((row) => row.split(""));
const width = grid[0]!.length;

const coordsToIndex = (x: number, y: number): number => y * width + x;
const indexToCoords = (i: number): [number, number] => [i % width, Math.floor(i / width)];

const neighbours = (x: number, y: number): Array<[number, number]> => ([
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
] as Array<[number, number]>).filter(([nx, ny]) => grid[ny]?.[nx] !== undefined);

const perimeter = (x: number, y: number): number => ([
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
] as Array<[number, number]>).filter(([nx, ny]) => grid[ny]?.[nx] !== grid[y]?.[x]).length;

const regions: number[][] = [];

for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < width; x++) {
        const index = coordsToIndex(x, y);

        if (regions.flat().includes(index))
            continue;

        const region = [index];

        regions.push(region);

        const type = grid[y]![x]!;
        const queue = new Set<number>(neighbours(x, y)
            .filter(([nx, ny]) => grid[ny]![nx] === type)
            .map(([nx, ny]) => coordsToIndex(nx, ny)));

        while (queue.size) {
            const thisIndex = queue.values().next().value!;

            queue.delete(thisIndex);

            if (regions.flat().includes(thisIndex))
                continue;

            region.push(thisIndex);
            neighbours(...indexToCoords(thisIndex))
                .filter(([nx, ny]) => grid[ny]![nx] === type)
                .map(([nx, ny]) => coordsToIndex(nx, ny))
                .forEach((neighbour) => {
                    queue.add(neighbour);
                });
        }
    }
}

const perimeters = regions.map((region) => region.map((cell) => indexToCoords(cell))
    .map(([x, y]) => perimeter(x, y)).reduce((a, b) => a + b, 0));
const areas = regions.map((region) => region.length);
const scores1 = regions.map((_, i) => areas[i]! * perimeters[i]!);

console.log(scores1.reduce((a, b) => a + b, 0));

// Part 2

const getRegion = (x: number, y: number): number | undefined => (grid[y]?.[x] === undefined
    ? -1
    : regions.findIndex((region) => region.includes(coordsToIndex(x, y))));
const corners = (x: number, y: number): number => {
    const region = getRegion(x, y);
    const plus = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]
        .map(([nx, ny]) => getRegion(nx!, ny!) === region) as [boolean, boolean, boolean, boolean];
    const cross = [[x - 1, y - 1], [x + 1, y - 1], [x - 1, y + 1], [x + 1, y + 1]]
        .map(([nx, ny]) => getRegion(nx!, ny!) === region) as [boolean, boolean, boolean, boolean];

    return [
        !plus[0] && !plus[2],
        !plus[1] && !plus[2],
        !plus[0] && !plus[3],
        !plus[1] && !plus[3],
        plus[0] && !cross[0] && plus[2],
        plus[1] && !cross[1] && plus[2],
        plus[0] && !cross[2] && plus[3],
        plus[1] && !cross[3] && plus[3],
    ].filter((a) => a).length;
};

const sides = regions.map((region) => region.map((cell) => indexToCoords(cell))
    .map(([x, y]) => corners(x, y)).reduce((a, b) => a + b, 0));
const scores2 = regions.map((_, i) => areas[i]! * sides[i]!);

console.log(scores2.reduce((a, b) => a + b, 0));
