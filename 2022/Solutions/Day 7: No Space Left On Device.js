// https://adventofcode.com/2022/day/7
const input = require("../Utils/GetInput")();

// Part 1
const terminalOutput = input.split("\n").map((line) => [line.startsWith("$ "), line.startsWith("$ ") ? line.slice(2) : line]);
const directorySizes = { "/": 0 };
const directories = { "/": {} };
const directoryHistory = [];
const getPath = (directory, history) => (directory === "/" ? "/" : [...["", history.slice(1)].flat(), directory].join("/"));
const createItem = (type, name) => {
    let currentDirectory = directories;
    directoryHistory.forEach((directory) => (currentDirectory = currentDirectory[directory]));
    currentDirectory[name] = type === "dir" ? {} : Number(type);
    if (type === "dir")
        directorySizes[getPath(name, directoryHistory)] = 0;
    else
        directoryHistory.forEach((directory, i) => (directorySizes[getPath(directory, directoryHistory.slice(0, i))] += Number(type)));
};
for (const [isCommand, line] of terminalOutput) {
    if (isCommand) {
        const [command, args] = line.split(" ");
        if (command === "cd") {
            if (args === "..")
                directoryHistory.pop();
            else
                directoryHistory.push(args);
        }
    } else {
        const [type, name] = line.split(" ");
        if (type !== "dir" || !(name in directories))
            createItem(type, name);
    }
}
const sumOfSizesUnder100000 = Object.values(directorySizes)
    .filter((size) => size <= 100_000)
    .reduce((a, b) => a + b);
console.log(sumOfSizesUnder100000);

// Part 2
const unusedSpace = 70_000_000 - directorySizes["/"];
const spaceNeeded = 30_000_000 - unusedSpace;
const [directoryToDeleteSize] = Object.values(directorySizes)
    .filter((size) => size >= spaceNeeded)
    .sort((a, b) => a - b);
console.log(directoryToDeleteSize);
