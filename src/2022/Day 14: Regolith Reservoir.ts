// https://adventofcode.com/2022/day/14
import getInput from "../getInput.js";

const input = await getInput();

// Part 1
const SAND_INPUT = { x: 500, y: 0 };
const pathCoords = input.split("\n").map((path) => path.split(" -> ")
    .map((coord) => ({ x: Number(coord.split(",")[0]), y: Number(coord.split(",")[1]) })));
const minX = Math.min(...pathCoords.flat().map(({ x }) => x)) - 10;
const maxX = 2 * SAND_INPUT.x - minX;
const minY = 0;
const maxY = Math.max(...pathCoords.flat().map(({ y }) => y)) + 2;
const generatePathFromCoords = (coordArray: Array<{ x: number; y: number; }>): Array<{ x: number; y: number; }> => {
    const coords = [];

    for (let i = 0; i < coordArray.length - 1; i++) {
        const { x: thisX, y: thisY } = coordArray[i]!;
        const { x: thatX, y: thatY } = coordArray[i + 1]!;

        for (let y = Math.min(thisY, thatY); y <= Math.max(thisY, thatY); y++) {
            for (let x = Math.min(thisX, thatX); x <= Math.max(thisX, thatX); x++)
                coords.push({ x, y });
        }
    }

    return coords;
};
const paths = pathCoords.map((coords) => generatePathFromCoords(coords));
const cellHasRock = ({ x, y }: { x: number; y: number; }): boolean => y === maxY || paths.flat()
    .some(({ x: pathX, y: pathY }) => pathX === x && pathY === y);
const sandCoords: Array<{ x: number; y: number; }> = [];
const cellHasSand = ({ x, y }: { x: number; y: number; }): boolean => sandCoords
    .some(({ x: pathX, y: pathY }) => pathX === x && pathY === y);
const cellIsOccupied = ({ x, y }: { x: number; y: number; }): boolean => cellHasRock({ x, y }) || cellHasSand({ x, y });
const drawGrid = (): void => {
    const xValues = Array(maxX - minX + 1).fill(0)
        .map((_, i) => minX + i);
    let grid = `    ${xValues.map((value) => Math.floor(value / 100 % 10))
        .join(" ")}\n    ${xValues.map((value) => Math.floor(value / 10 % 10))
        .join(" ")}\n    ${xValues.map((value) => Math.floor(value / 1 % 10)).join(" ")}\n`;

    for (let y = minY; y <= maxY; y++) {
        let row = `${y.toString().padStart(3)} `;

        for (let x = minX; x <= maxX; x++) {
            let cellSymbol = ".";

            if (SAND_INPUT.x === x && SAND_INPUT.y === y)
                cellSymbol = "+";
            else if (cellHasRock({ x, y }))
                cellSymbol = "#";
            else if (cellHasSand({ x, y }))
                cellSymbol = "o";

            row += `${cellSymbol} `;
        }
        grid += `${row}\n`;
    }
    console.log(grid);
};

drawGrid();
let sandPosition = SAND_INPUT;

while (sandPosition.y < maxY - 1) {
    const downCoord = { x: sandPosition.x, y: sandPosition.y + 1 };
    const downLeftCoord = { x: sandPosition.x - 1, y: sandPosition.y + 1 };
    const downRightCoord = { x: sandPosition.x + 1, y: sandPosition.y + 1 };

    if (cellIsOccupied(downCoord)) {
        if (cellIsOccupied(downLeftCoord)) {
            if (cellIsOccupied(downRightCoord)) {
                sandCoords.push(sandPosition);
                sandPosition = SAND_INPUT;
            } else {
                sandPosition = downRightCoord;
            }
        } else {
            sandPosition = downLeftCoord;
        }
    } else {
        sandPosition = downCoord;
    }

    drawGrid();
}

console.log(sandCoords.length);

// Part 2
while (sandCoords[sandCoords.length - 1]!.x !== SAND_INPUT.x || sandCoords[sandCoords.length - 1]!.y !== SAND_INPUT.y) {
    const downCoord = { x: sandPosition.x, y: sandPosition.y + 1 };
    const downLeftCoord = { x: sandPosition.x - 1, y: sandPosition.y + 1 };
    const downRightCoord = { x: sandPosition.x + 1, y: sandPosition.y + 1 };

    if (cellIsOccupied(downCoord)) {
        if (cellIsOccupied(downLeftCoord)) {
            if (cellIsOccupied(downRightCoord)) {
                sandCoords.push(sandPosition);
                sandPosition = SAND_INPUT;
            } else {
                sandPosition = downRightCoord;
            }
        } else {
            sandPosition = downLeftCoord;
        }
    } else {
        sandPosition = downCoord;
    }

    drawGrid();
}

console.log(sandCoords.length);
