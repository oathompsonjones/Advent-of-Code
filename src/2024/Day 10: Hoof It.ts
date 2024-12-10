// https://adventofcode.com/2024/day/10
import getInput from "../getInput.js";

const input = await getInput();

// Part 1

type Node = {
    index: number;
    value: [number, number];
    weight: number;
};

type Graph = Map<number, number[]>;

const grid = input.split("\n").map((line) => line.split("").map(Number));
const nodes: Node[] = [];
const adjacencyList: Graph = new Map();

for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0]!.length; x++)
        nodes.push({ index: x + y * grid[0]!.length, value: [x, y], weight: -1 });
}

for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0]!.length; x++) {
        const height = Number(grid[y]![x]!);
        const index = x + y * grid[0]!.length;

        const left: [number, number] = [x - 1, y];
        const right: [number, number] = [x + 1, y];
        const up: [number, number] = [x, y - 1];
        const down: [number, number] = [x, y + 1];

        const validPositions = [left, right, up, down].filter(([nx, ny]) => {
            const nHeight = grid[ny]?.[nx];

            return nHeight !== undefined && nHeight === height + 1;
        }).map((value) => value[0] + value[1] * grid[0]!.length);

        adjacencyList.set(index, validPositions);
    }
}

const trailheads = [...adjacencyList.keys()].filter((index) => {
    const [x, y] = nodes[index]!.value;

    return grid[y]![x] === 0;
});

const dfs = (index: number, visited: Set<number> = new Set()): number => {
    if (visited.has(index))
        return 0;

    visited.add(index);

    const neighbors = adjacencyList.get(index)!;
    const weights = neighbors.map((neighbor) => dfs(neighbor, visited));
    const maxWeight = Math.max(...weights, 0);

    return maxWeight + 1;
};

console.log(trailheads.map((trailhead) => {
    const visited = new Set<number>();

    dfs(trailhead, visited);

    return [...visited].map((index) => nodes[index]!.value).filter(([x, y]) => grid[y]![x] === 9).length;
}).reduce((a, b) => a + b, 0));

// Part 2

let score = 0;

const followPath = (index: number): number => {
    let count = 0;

    const [x, y] = nodes[index]!.value;

    if (grid[y]![x] === 9)
        return 1;

    for (const neighbor of adjacencyList.get(index)!)
        count += followPath(neighbor);

    return count;
};

for (const head of trailheads)
    score += followPath(head);

console.log(score);
