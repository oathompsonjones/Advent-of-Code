// https://adventofcode.com/2022/day/7
/* eslint-disable @typescript-eslint/naming-convention */
import getInput from "../getInput.js";

const input = await getInput();

// Part 1
const terminalOutput = input.split("\n")
    .map((line) => [line.startsWith("$ "), line.startsWith("$ ") ? line.slice(2) : line]);
const directorySizes: Record<string, number> = { "/": 0 };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const directories: any = { "/": {} };
const directoryHistory: string[] = [];
const getPath = (directory: string, history: string[]): string => (directory === "/"
    ? "/"
    : [...["", history.slice(1)].flat(), directory].join("/"));
const createItem = (type: string, name: string): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    let currentDirectory = directories;

    directoryHistory.forEach((directory) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        currentDirectory = currentDirectory[directory];
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    currentDirectory[name] = type === "dir" ? {} : Number(type);

    if (type === "dir") {
        directorySizes[getPath(name, directoryHistory)] = 0;
    } else {
        directoryHistory.forEach((directory, i) => {
            directorySizes[getPath(
                directory,
                directoryHistory.slice(0, i),
            )]! += Number(type);
        });
    }
};

for (const [isCommand, line] of terminalOutput as Array<[boolean, string]>) {
    if (isCommand) {
        const [command, args] = line.split(" ") as [string, string];

        if (command === "cd") {
            if (args === "..")
                directoryHistory.pop();
            else
                directoryHistory.push(args);
        }
    } else {
        const [type, name] = line.split(" ") as [string, string];

        if (type !== "dir" || !(name in directories))
            createItem(type, name);
    }
}
const sumOfSizesUnder100000 = Object.values(directorySizes)
    .filter((size) => size <= 100_000)
    .reduce((a, b) => a + b);

console.log(sumOfSizesUnder100000);

// Part 2
const unusedSpace = 70_000_000 - directorySizes["/"]!;
const spaceNeeded = 30_000_000 - unusedSpace;
const [directoryToDeleteSize] = Object.values(directorySizes)
    .filter((size) => size >= spaceNeeded)
    .sort((a, b) => a - b);

console.log(directoryToDeleteSize);
