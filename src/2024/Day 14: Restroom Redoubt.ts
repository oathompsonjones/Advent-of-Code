// https://adventofcode.com/2024/day/14
import getInput from "../getInput.js";

const input = await getInput();
const size: [number, number] = [101, 103];

/* Input = `p=0,4 v=3,-3
p=6,3 v=-1,-3
p=10,3 v=-1,2
p=2,0 v=2,-1
p=0,0 v=1,3
p=3,0 v=-2,-2
p=7,6 v=-1,-3
p=3,0 v=-1,-2
p=9,3 v=2,3
p=7,3 v=-1,2
p=2,4 v=2,-3
p=9,5 v=-3,-3`;
size = [11, 7]; */

// Part 1
type Robot = { position: [number, number]; velocity: [number, number]; };
const robots: Robot[] = input
    .split("\n").map((robot) => {
        const regex = /p=(?<px>-?\d+),(?<py>-?\d+) v=(?<vx>-?\d+),(?<vy>-?\d+)/u;
        const match = regex.exec(robot)!;

        return {
            position: [parseInt(match.groups!.px!, 10), parseInt(match.groups!.py!, 10)],
            velocity: [parseInt(match.groups!.vx!, 10), parseInt(match.groups!.vy!, 10)],
        };
    });
const robots1 = robots.map((r) => ({
    ...r,
    position: r.position.map((p, i) => (p + (size[i]! + r.velocity[i]!) * 100) % size[i]!) as [number, number],
}));

const verticalMiddle = (size[0] - 1) / 2;
const horizontalMiddle = (size[1] - 1) / 2;
const quadrants: [number, number, number, number] = [0, 0, 0, 0];

for (let y = 0; y < size[1]; y++) {
    for (let x = 0; x < size[0]; x++) {
        const cellCount = robots1.filter((r) => r.position[0] === x && r.position[1] === y).length;

        if (y < horizontalMiddle && x < verticalMiddle)
            quadrants[0] += cellCount;
        else if (y < horizontalMiddle && x > verticalMiddle)
            quadrants[1] += cellCount;
        else if (y > horizontalMiddle && x < verticalMiddle)
            quadrants[2] += cellCount;
        else if (y > horizontalMiddle && x > verticalMiddle)
            quadrants[3] += cellCount;
    }
}

console.log(quadrants.reduce((a, b) => a * b, 1));

// Part 2

const coordsToIndex = (x: number, y: number): number => y * size[0] + x;
const indexToCoords = (i: number): [number, number] => [i % size[0], Math.floor(i / size[0])];
const neighbours = (x: number, y: number): Array<[number, number]> => ([
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
] as Array<[number, number]>).filter(([nx, ny]) => robots
    .find((r) => r.position[0] === nx && r.position[1] === ny));

for (let i = 0; ; i++) {
    for (const r of robots)
        r.position = r.position.map((p, j) => (p + size[j]! + r.velocity[j]!) % size[j]!) as [number, number];

    const checked = new Set<number>();
    const areas: number[] = [];

    for (const robot of robots) {
        const [x, y] = robot.position;
        const index = coordsToIndex(x, y);

        if (checked.has(index))
            continue;

        checked.add(index);

        let area = 1;
        const queue = new Set<number>(neighbours(x, y).map(([nx, ny]) => coordsToIndex(nx, ny)));

        while (queue.size) {
            const thisIndex = queue.values().next().value!;

            queue.delete(thisIndex);

            if (checked.has(thisIndex))
                continue;

            checked.add(thisIndex);

            area++;
            neighbours(...indexToCoords(thisIndex)).map(([nx, ny]) => coordsToIndex(nx, ny)).forEach((neighbour) => {
                queue.add(neighbour);
            });
        }

        areas.push(area);
    }

    const largestArea = Math.max(...areas);

    if (largestArea > 25) {
        console.log(i + 1);
        for (let y = 0; y < size[1]; y++) {
            for (let x = 0; x < size[0]; x++)
                process.stdout.write(robots.find((r) => r.position[0] === x && r.position[1] === y) ? "█" : ".");

            process.stdout.write("\n");
        }

        process.stdout.write("\n");
        break;
    }
}
