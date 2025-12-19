// https://adventofcode.com/2024/day/16
import getInput from "../getInput.js";

let input = await getInput();

/* Input = `###############
#.......#....E#
#.#.###.#.###.#
#.....#.#...#.#
#.###.#####.#.#
#.#.#.......#.#
#.#.#####.###.#
#...........#.#
###.#.#####.#.#
#...#.....#.#.#
#.#.#.###.#.#.#
#.....#...#.#.#
#.###.#.#.#.#.#
#S..#.....#...#
###############`; */

/* Input = `#################
#...#...#...#..E#
#.#.#.#.#.#.#.#.#
#.#.#.#...#...#.#
#.#.#.#.###.#.#.#
#...#.#.#.....#.#
#.#.#.#.#.#####.#
#.#...#.#.#.....#
#.#.#####.#.###.#
#.#.#.......#...#
#.#.###.#####.###
#.#.#...#.....#.#
#.#.#.#####.###.#
#.#.#.........#.#
#.#.#.#########.#
#S#.............#
#################`; */

/* Input = `###########################
#.....................#..E#
#....................#..#.#
#...................#..##.#
#..................#..###.#
#.................#..##...#
#................#..#.#.###
#...............#..#..#...#
#..............#..#######.#
#.............#..##.......#
#............#..#.#.#######
#...........#..#..#.......#
#..........#..###########.#
#.........#..##...........#
#........#..#.#.###########
#.......#..#..#...........#
#......#..###############.#
#.....#..##...............#
#....#..#.#.###############
#...#..#..#...............#
#..#..###################.#
#.#..##...................#
##..#.#.###################
#..#..#...................#
#.#######################.#
#S........................#
###########################`; */

/* Input = `####################################################
#......................................#..........E#
#......................................#...........#
#....................#.................#...........#
#....................#.................#...........#
#....................#.................#...........#
#....................#.................#...........#
#....................#.................#...........#
#....................#.................#...........#
#....................#.................#...........#
#....................#.................#...........#
#....................#.............................#
#S...................#.............................#
####################################################`; */

/* Input = `########################################################
#.........#.........#.........#.........#.........#...E#
#.........#.........#.........#.........#.........#....#
#....#....#....#....#....#....#....#....#....#....#....#
#....#....#....#....#....#....#....#....#....#....#....#
#....#....#....#....#....#....#....#....#....#....#....#
#....#....#....#....#....#....#....#....#....#....#....#
#....#.........#.........#.........#.........#.........#
#S...#.........#.........#.........#.........#.........#
########################################################`; */

/* Input = `##########################################################################################################
#.........#.........#.........#.........#.........#.........#.........#.........#.........#.........#...E#
#.........#.........#.........#.........#.........#.........#.........#.........#.........#.........#....#
#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#
#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#
#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#
#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#....#
#....#.........#.........#.........#.........#.........#.........#.........#.........#.........#.........#
#S...#.........#.........#.........#.........#.........#.........#.........#.........#.........#.........#
##########################################################################################################`; */

input = `##########
#.......E#
#.##.#####
#..#.....#
##.#####.#
#S.......#
##########`;

// Part 1

const maze = input.split("\n").map((row) => row.split(""));
const width = maze[0]!.length;
const coordsToIndex = (x: number, y: number): number => y * width + x;
const indexToCoords = (i: number): [number, number] => [i % width, Math.floor(i / width)];
const neighbours = (i: number, direction: [number, number]): Array<{ id: number; weight: number; }> => {
    const [x, y] = indexToCoords(i);

    if (maze[y]?.[x] === undefined || maze[y][x] === "#")
        return [];

    const ns: Array<{ id: number; weight: number; }> = [];

    for (const [nx, ny] of [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]] as Array<[number, number]>) {
        if (maze[ny]?.[nx] !== "#") {
            const id = coordsToIndex(nx, ny);
            const directionChange: [number, number] = [direction[0] - (nx - x), direction[1] - (ny - y)];

            if (directionChange[0] === 0 && directionChange[1] === 0)
                ns.push({ id, weight: 1 });
            else if (Math.abs(directionChange[0]) === 1 && Math.abs(directionChange[1]) === 1)
                ns.push({ id, weight: 1000 });
        }
    }

    return ns;
};

const mazeStart = input.replaceAll("\n", "").indexOf("S");
const mazeEnd = input.replaceAll("\n", "").indexOf("E");

// eslint-disable-next-line max-statements
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
    let direction: [number, number] = [1, 0];

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

        const [x1, y1] = indexToCoords(current);
        const [x2, y2] = indexToCoords(cameFrom.get(current)!);

        direction = isNaN(x2) && isNaN(y2) ? [1, 0] : [x1 - x2, y1 - y2];

        for (const neighbour of neighbours(current, direction)) {
            const tentativeGScore = gScore.get(current)! + neighbour.weight;

            if (tentativeGScore < (gScore.get(neighbour.id) ?? Infinity)) {
                cameFrom.set(neighbour.id, current);
                gScore.set(neighbour.id, tentativeGScore);
                fScore.set(neighbour.id, tentativeGScore +
                    Math.abs(indexToCoords(neighbour.id)[0] - indexToCoords(end)[0]) +
                    Math.abs(indexToCoords(neighbour.id)[1] - indexToCoords(end)[1]));

                if (!openSet.includes(neighbour.id))
                    openSet.push(neighbour.id);
            }
        }
    }

    return -1;
};

const path: number[] = [];

aStar(mazeStart, mazeEnd, path);
path.reverse();

const drawPath = (_path: number[]): void => {
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < width; x++) {
            const index = coordsToIndex(x, y);

            if (mazeStart === index)
                process.stdout.write("\x1b[31m█\x1b[0m");
            else if (mazeEnd === index)
                process.stdout.write("\x1b[32m█\x1b[0m");
            else if (y === 57 && x === 21)
                process.stdout.write("#");
            else if (_path.includes(index))
                process.stdout.write("\x1b[34m█\x1b[0m");
            else
                process.stdout.write(maze[y]![x] === "#" ? "█" : " ");
        }
        process.stdout.write("\n");
    }
};

const scorePath = (_path: number[]): number => {
    let score = 0;
    let direction: [number, number] = [1, 0];

    for (let current = 0, next = 1; next < _path.length; current++, next++) {
        const [x1, y1] = indexToCoords(_path[current]!);
        const [x2, y2] = indexToCoords(_path[next]!);
        const directionChange: [number, number] = [x2 - x1, y2 - y1];

        if (direction[0] !== directionChange[0] || direction[1] !== directionChange[1])
            score += 1000;

        direction = directionChange;
        score++;
    }

    return score;
};

drawPath(path);
console.log(scorePath(path));

// Part 2
