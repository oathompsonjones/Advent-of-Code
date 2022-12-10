// https://adventofcode.com/2022/day/9
const input = require("../Utils/GetInput")();

// Part 1
const steps = input.split("\n").map((step) => step.split(" "))
    .map(([direction, length]) => [direction, Number(length)]);
const directions = { D: [0, -1], L: [-1, 0], R: [1, 0], U: [0, 1] };
const splitter = "|";
const calculateGridDimensions = () => {
    const xs = [0];
    const ys = [0];
    for (const [direction, length] of steps) {
        xs.push(xs[xs.length - 1] += directions[direction][0] * length);
        ys.push(ys[ys.length - 1] += directions[direction][1] * length);
    }
    const maxX = Math.max(...xs) + 1;
    const minX = Math.min(...xs);
    const maxY = Math.max(...ys) + 1;
    const minY = Math.min(...ys);
    return [minX, minY, maxX, maxY];
};
const [minX, minY, maxX, maxY] = calculateGridDimensions();
const drawGrid = (rope) => {
    const grid = [];
    for (let y = minY; y < maxY; y++) {
        let row = "";
        for (let x = minX; x < maxX; x++) {
            let char = x === 0 && y === 0 ? "s" : ".";
            const head = rope[0].split(splitter).map(Number);
            if (head[0] === x && head[1] === y) {
                char = "H";
            } else {
                for (let i = rope.length - 1; i >= 0; i--) {
                    const tail = rope[i].split(splitter).map(Number);
                    if (tail[0] === x && tail[1] === y)
                        char = i;
                }
            }
            row += char;
        }
        grid.push(row);
    }
    return `${grid.reverse().join("\n")}\n`;
};
const drawTailPositions = (tailPositions) => {
    const grid = [];
    for (let y = minY; y < maxY; y++) {
        let row = "";
        for (let x = minX; x < maxX; x++) {
            if (tailPositions.map((position) => position.split(splitter).map(Number)).some((position) => x === position[0] && y === position[1]))
                row += x === 0 && y === 0 ? "s" : "#";
            else
                row += ".";
        }
        grid.push(row);
    }
    return `${grid.reverse().join("\n")}\n`;
};
const updateTail = (head, tail) => {
    let [xStep, yStep] = [0, 0];
    const topLeft = head[0] === tail[0] - 1 && head[1] === tail[1] + 2 ||
        head[0] === tail[0] - 2 && head[1] === tail[1] + 1 ||
        head[0] === tail[0] - 2 && head[1] === tail[1] + 2;
    const topMiddle = head[0] === tail[0] && head[1] > tail[1];
    const topRight = head[0] === tail[0] + 1 && head[1] === tail[1] + 2 ||
        head[0] === tail[0] + 2 && head[1] === tail[1] + 1 ||
        head[0] === tail[0] + 2 && head[1] === tail[1] + 2;
    const left = head[1] === tail[1] && head[0] < tail[0];
    const right = head[1] === tail[1] && head[0] > tail[0];
    const bottomLeft = head[0] === tail[0] - 1 && head[1] === tail[1] - 2 ||
        head[0] === tail[0] - 2 && head[1] === tail[1] - 1 ||
        head[0] === tail[0] - 2 && head[1] === tail[1] - 2;
    const bottomMiddle = head[0] === tail[0] && head[1] < tail[1];
    const bottomRight = head[0] === tail[0] + 1 && head[1] === tail[1] - 2 ||
        head[0] === tail[0] + 2 && head[1] === tail[1] - 1 ||
        head[0] === tail[0] + 2 && head[1] === tail[1] - 2;
    if (topLeft)
        [xStep, yStep] = [-1, 1];
    else if (topMiddle)
        [xStep, yStep] = [0, 1];
    else if (topRight)
        [xStep, yStep] = [1, 1];
    else if (left)
        [xStep, yStep] = [-1, 0];
    else if (right)
        [xStep, yStep] = [1, 0];
    else if (bottomLeft)
        [xStep, yStep] = [-1, -1];
    else if (bottomMiddle)
        [xStep, yStep] = [0, -1];
    else if (bottomRight)
        [xStep, yStep] = [1, -1];
    return [xStep, yStep];
};
const simulation = (ropeLength, print = false, printAll = false) => {
    const rope = Array(ropeLength).fill(0)
        .map(() => [`0${splitter}0`]);
    if (print)
        console.log(drawGrid(rope.map((k) => k[0])));
    for (const [direction, length] of steps) {
        if (print)
            console.log(`== ${direction} ${length} ==`);
        for (let i = 0; i < length; i++) {
            let headPosition = null;
            for (let knot = 0; knot < rope.length; knot++) {
                let [xStep, yStep] = directions[direction];
                const knotPosition = rope[knot][rope[knot].length - 1].split(splitter).map(Number);
                const knotShouldMove = knot === 0 || Math.max(
                    Math.abs(headPosition[0] - knotPosition[0]),
                    Math.abs(headPosition[1] - knotPosition[1])
                ) > 1;
                if (knotShouldMove) {
                    if (knot > 0)
                        [xStep, yStep] = updateTail(headPosition, knotPosition, xStep, yStep);
                    knotPosition[0] += xStep;
                    knotPosition[1] += yStep;
                    rope[knot].push(knotPosition.join(splitter));
                }
                headPosition = knotPosition;
            }
            if (print && printAll)
                console.log(drawGrid(rope.map((k) => k[k.length - 1])));
        }
        if (print && !printAll)
            console.log(drawGrid(rope.map((k) => k[k.length - 1])));
    }
    if (print)
        console.log(drawTailPositions(rope[rope.length - 1]));
    return [...new Set(rope[rope.length - 1])].length;
};
console.log(simulation(2));

// Part 2
console.log(simulation(10));
