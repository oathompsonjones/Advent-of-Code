// https://adventofcode.com/2022/day/15
import getInput from "../getInput.js";

const input = await getInput();

const ROW = 2_000_000;
const dist = (x1: number, y1: number, x2: number, y2: number): number => Math.abs(x1 - x2) + Math.abs(y1 - y2);
const sensors: Array<{ distance: number; x?: number; y?: number; }> = [];
const grid: Record<number, Record<number, string>> = {};
const xValues: number[] = [];

input.split("\n")
    .map((text) => text.match(/-?\d+/gu)!.map(Number) as [number, number, number, number])
    .forEach(([x1, y1, x2, y2]) => {
        grid[y1] ??= {};
        grid[y1][x1] = "S";
        grid[y2] ??= {};
        grid[y2][x2] = "B";
        sensors.push({ distance: dist(x1, y1, x2, y2), x: x1, y: y1 });
        xValues.push(x1, x2);
    });

// Part 1

const countInRow = (): number => {
    let count = 0;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    grid[ROW] ??= {};
    for (let x = Math.min(...xValues); x <= Math.max(...xValues); x++) {
        if (grid[ROW][x] === undefined && sensors.some((s) => dist(s.x!, s.y!, x, ROW) <= s.distance))
            count++;
    }

    return count;
};

console.log(countInRow());

// Part 2

const findBeacon = (): number => {
    for (let y = 0; y <= 2 * ROW; y++) {
        for (let x = 0; x <= 2 * ROW; x++) {
            const sensor = sensors.find((s) => dist(s.x!, s.y!, x, y) <= s.distance);

            if (sensor === undefined)
                return x * 4_000_000 + y;

            x = sensor.x! + sensor.distance - Math.abs(sensor.y! - y);
        }
    }

    return -1;
};

console.log(findBeacon());
