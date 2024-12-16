// https://adventofcode.com/2024/day/15
import getInput from "../getInput.js";

const input = await getInput();

/* Input = `##########
#..O..O.O#
#......O.#
#.OO..O.O#
#..O@..O.#
#O#..O...#
#O..O..O.#
#.OO.O.OO#
#....O...#
##########

<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^`; */

/* Input = `########
#..O.O.#
##@.O..#
#...O..#
#.#.O..#
#...O..#
#......#
########

<^^>>>vv<v>>v<<`; */

/* Input = `#######
#...#.#
#.....#
#..OO@#
#..O..#
#.....#
#######

<vv<<^^<<^^`; */

// Part 1

const [mapInput, movesInput] = input.split("\n\n") as [string, string];
const map = mapInput.split("\n").map((row) => row.split(""));
const moves = movesInput.split("").filter((move) => move !== "\n");
const position = map
    .map((row, y) => row.map((cell, x) => [cell, x, y]))
    .flat()
    .find(([cell]) => cell === "@")!
    .slice(1) as [number, number];

map[position[1]]![position[0]] = ".";

for (const move of moves) {
    const direction: [number, number] = [0, 0];

    switch (move) {
        case "^":
            direction[1]--;
            break;
        case "v":
            direction[1]++;
            break;
        case "<":
            direction[0]--;
            break;
        case ">":
            direction[0]++;
            break;
    }

    let canMove = false;
    let thisPosition: [number, number] = [0, 0];
    const boxesToMove: Array<[number, number]> = [];

    i: for (let i = 1; map[thisPosition[1]]?.[thisPosition[0]] !== undefined; i++) {
        thisPosition = [position[0] + direction[0] * i, position[1] + direction[1] * i];

        switch (map[thisPosition[1]]?.[thisPosition[0]]) {
            case ".":
                canMove = true;
                break i;
            case "O":
                boxesToMove.push(thisPosition);
                break;
            default:
                break i;
        }
    }

    if (canMove) {
        position[0] += direction[0];
        position[1] += direction[1];

        for (const box of boxesToMove.toReversed()) {
            map[box[1]]![box[0]] = ".";
            map[box[1] + direction[1]]![box[0] + direction[0]] = "O";
        }
    }
}

const boxGpsPositions: number[] = [];

for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y]!.length; x++) {
        if (map[y]![x] === "O")
            boxGpsPositions.push(x + 100 * y);
    }
}

printMap(map, position);
console.log(boxGpsPositions.reduce((a, b) => a + b, 0));

// Part 2

const newMapInput = mapInput
    .replaceAll("#", "##")
    .replaceAll("O", "[]")
    .replaceAll(".", "..")
    .replaceAll("@", "@.");
const newMap = newMapInput.split("\n").map((row) => row.split(""));
const newPosition = newMap
    .map((row, y) => row.map((cell, x) => [cell, x, y]))
    .flat()
    .find(([cell]) => cell === "@")!
    .slice(1) as [number, number];

newMap[newPosition[1]]![newPosition[0]] = ".";

for (const move of moves) {
    const direction: [number, number] = [0, 0];

    switch (move) {
        case "^":
            direction[1]--;
            break;
        case "v":
            direction[1]++;
            break;
        case "<":
            direction[0]--;
            break;
        case ">":
            direction[0]++;
            break;
    }

    let canMove = false;
    let thisPosition: [number, number] = [0, 0];
    const boxesToMove: Array<[number, number]> = [];

    i: for (let i = 1; newMap[thisPosition[1]]?.[thisPosition[0]] !== undefined; i++) {
        thisPosition = [newPosition[0] + direction[0] * i, newPosition[1] + direction[1] * i];

        const handleVerticalBox = (pos: [number, number]): boolean => {
            const nextPosition: [number, number] = [pos[0] + direction[0], pos[1] + direction[1]];
            const nextPositionRight: [number, number] = [nextPosition[0] + 1, nextPosition[1]];
            const nextPositionLeft: [number, number] = [nextPosition[0] - 1, nextPosition[1]];
            const nextValue = newMap[nextPosition[1]]?.[nextPosition[0]];
            const nextValueRight = newMap[nextPositionRight[1]]?.[nextPositionRight[0]];

            if (nextValue === "." && nextValueRight === ".") {
                if (!boxesToMove.find((box) => box[0] === pos[0] && box[1] === pos[1]))
                    boxesToMove.unshift(pos);

                return true;
            }

            if (nextValue === "#" || nextValueRight === "#" ||
                nextValue === undefined || nextValueRight === undefined ||
                nextValue === "[" && nextValueRight === "]" && !handleVerticalBox(nextPosition) ||
                nextValue === "." && nextValueRight === "[" && !handleVerticalBox(nextPositionRight) ||
                nextValue === "]" && nextValueRight === "." && !handleVerticalBox(nextPositionLeft) ||
                nextValue === "]" && nextValueRight === "[" &&
                (!handleVerticalBox(nextPositionLeft) || !handleVerticalBox(nextPositionRight)))
                return false;

            if (!boxesToMove.find((box) => box[0] === pos[0] && box[1] === pos[1]))
                boxesToMove.unshift(pos);

            return true;
        };

        switch (newMap[thisPosition[1]]?.[thisPosition[0]]) {
            case ".":
                canMove = true;
                break i;
            case "[":
                if (direction[0] === 0) {
                    canMove = handleVerticalBox(thisPosition);
                    break i;
                } else {
                    // eslint-disable-next-line @typescript-eslint/no-loop-func
                    if (!boxesToMove.find((box) => box[0] === thisPosition[0] && box[1] === thisPosition[1]))
                        boxesToMove.push(thisPosition);

                    break;
                }
            case "]":
                if (direction[0] === 0) {
                    canMove = handleVerticalBox([thisPosition[0] - 1, thisPosition[1]]);
                    break i;
                } else {
                    // eslint-disable-next-line @typescript-eslint/no-loop-func
                    if (!boxesToMove.find((box) => box[0] === thisPosition[0] - 1 && box[1] === thisPosition[1]))
                        boxesToMove.push([thisPosition[0] - 1, thisPosition[1]]);

                    break;
                }
            default:
                break i;
        }
    }

    if (canMove) {
        newPosition[0] += direction[0];
        newPosition[1] += direction[1];

        for (const box of boxesToMove.toReversed()) {
            newMap[box[1]]![box[0]] = ".";
            newMap[box[1]]![box[0] + 1] = ".";
            newMap[box[1] + direction[1]]![box[0] + direction[0]] = "[";
            newMap[box[1] + direction[1]]![box[0] + direction[0] + 1] = "]";
        }
    }
}

const newBoxGpsPositions: number[] = [];

for (let y = 0; y < newMap.length; y++) {
    for (let x = 0; x < newMap[y]!.length; x++) {
        if (newMap[y]![x] === "[")
            newBoxGpsPositions.push(x + 100 * y);
    }
}

printMap(newMap, newPosition);
console.log(newBoxGpsPositions.reduce((a, b) => a + b, 0));

/**
 * Prints the map.
 * @param _map - The map to print.
 * @param _position - The position of the robot.
 */
function printMap(_map: string[][], _position: [number, number]): void {
    process.stdout.write("\n");
    for (let y = 0; y < _map.length; y++) {
        for (let x = 0; x < _map[y]!.length; x++)
            process.stdout.write(y === _position[1] && x === _position[0] ? "@" : _map[y]![x]!);
        process.stdout.write("\n");
    }
}
