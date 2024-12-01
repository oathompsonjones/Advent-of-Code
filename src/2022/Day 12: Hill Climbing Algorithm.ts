// https://adventofcode.com/2022/day/12
import getInput from "../getInput.js";

const input = await getInput();

// Part 1
const elevationGridInput: string[][] = input.split("\n").map((row) => row.split(""));
const height = elevationGridInput.length;
const width = elevationGridInput[0]!.length;
const startCoords = {
    x: elevationGridInput.find((row) => row.includes("S"))!.indexOf("S"),
    y: elevationGridInput.indexOf(elevationGridInput.find((row) => row.includes("S"))!),
};
const endCoords = {
    x: elevationGridInput.find((row) => row.includes("E"))!.indexOf("E"),
    y: elevationGridInput.indexOf(elevationGridInput.find((row) => row.includes("E"))!),
};

const elevationGrid = input.split("\n").map((row) => row.replace("S", "a").replace("E", "z")
    .split("")
    .map((char) => char.charCodeAt(0)));
const createGraph = (): Record<string, { cost: number; edges: string[]; elevation: number; via?: string; }> => {
    const graph: Record<string, { cost: number; edges: string[]; elevation: number; }> = {};

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const elevation = elevationGrid[y]![x]!;
            const key = `${x}:${y}`;
            const edges = [];
            const upElevation = elevationGrid[y - 1]![x]!;

            if (y > 0 && (elevation === upElevation - 1 || elevation >= upElevation))
                edges.push(`${x}:${y - 1}`);

            const downElevation = elevationGrid[y + 1]![x]!;

            if (y < height - 1 && (elevation === downElevation - 1 || elevation >= downElevation))
                edges.push(`${x}:${y + 1}`);

            const leftElevation = elevationGrid[y]![x - 1]!;

            if (x > 0 && (elevation === leftElevation - 1 || elevation >= leftElevation))
                edges.push(`${x - 1}:${y}`);

            const rightElevation = elevationGrid[y]![x + 1]!;

            if (x < width - 1 && (elevation === rightElevation - 1 || elevation >= rightElevation))
                edges.push(`${x + 1}:${y}`);

            graph[key] = { cost: Infinity, edges, elevation };
        }
    }

    return graph;
};
const getShortestPath = (
    start: { x: number; y: number; },
    end: { x: number; y: number; },
): ArrayLike<{ x: number | undefined; y: number | undefined; }> => {
    const graph = createGraph();
    const unvisited = Object.keys(graph);

    graph[`${start.x}:${start.y}`]!.cost = 0;
    let destination = "";

    while (unvisited.length > 0) {
        unvisited.sort((a, b) => graph[b]!.cost - graph[a]!.cost);
        const current = unvisited.pop()!;

        if (graph[current]!.cost === Infinity)
            return { length: Infinity };

        const nextCost = graph[current]!.cost + 1;

        for (const edge of graph[current]!.edges) {
            if (nextCost < graph[edge]!.cost) {
                graph[edge]!.cost = nextCost;
                graph[edge]!.via = current;
            }
        }

        if (current === `${end.x}:${end.y}`) {
            destination = current;
            break;
        }
    }

    const path = [];

    while (graph[destination]!.cost > 0) {
        const [x, y] = destination.split(":").map(Number);

        path.unshift({ x, y });
        destination = graph[destination]!.via!;
    }

    return path;
};
const shortestPath = getShortestPath(startCoords, endCoords);

console.log(shortestPath.length);

// Part 2
const startPositions = [];

for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        if (elevationGrid[y]![x] === "a".charCodeAt(0))
            startPositions.push({ x, y });
    }
}
const shortestPaths = startPositions.map((start) => getShortestPath(start, endCoords));

console.log(Math.min(...shortestPaths.map((x) => x.length)));
