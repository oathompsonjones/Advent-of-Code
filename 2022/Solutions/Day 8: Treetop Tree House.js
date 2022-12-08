// https://adventofcode.com/2022
const input = require("../Utils/GetInput")();

// Part 1
const grid = input.split("\n").map((row) => row.split("").map(Number));
const visibilityGrid = [];
const checkVisibility = (endPoint, y, x, yMultiplier, xMultiplier) => {
    let isVisible = true;
    for (let i = 1; i < endPoint; i++)
        isVisible &&= grid[y + yMultiplier * i][x + xMultiplier * i] < grid[y][x];
    return isVisible;
};
for (let y = 0; y < grid.length; y++) {
    visibilityGrid[y] = [];
    for (let x = 0; x < grid[y].length; x++) {
        // Check is the tree is on the edge.
        let isVisible = x === 0 || y === 0 || x === grid[y].length - 1 || y === grid.length - 1;
        // Check if the tree can be seen from above.
        isVisible ||= checkVisibility(y + 1, y, x, -1, 0);
        // Check if the tree can be seen from the left.
        isVisible ||= checkVisibility(x + 1, y, x, 0, -1);
        // Check if the tree can be seen from below.
        isVisible ||= checkVisibility(grid.length - y, y, x, 1, 0);
        // Check if the tree can be seen from the right.
        isVisible ||= checkVisibility(grid[y].length - x, y, x, 0, 1);
        visibilityGrid[y][x] = isVisible;
    }
}
const visibilityCount = visibilityGrid.flat().filter((x) => x).length;
console.log(visibilityCount);

// Part 2
const visibleTreesGrid = [];
const countVisibleTrees = (endPoint, y, x, yMultiplier, xMultiplier) => {
    let visibleTrees = 0;
    for (let i = 1; i < endPoint; i++) {
        const isShorter = grid[y + yMultiplier * i][x + xMultiplier * i] < grid[y][x];
        visibleTrees++;
        if (!isShorter)
            break;
    }
    return visibleTrees;
};
for (let y = 0; y < grid.length; y++) {
    visibleTreesGrid[y] = [];
    for (let x = 0; x < grid[y].length; x++) {
        let visibilityScore = 1;
        // Check how many trees can be seen from above.
        visibilityScore *= countVisibleTrees(y + 1, y, x, -1, 0);
        // Check how many trees can be seen from the left.
        visibilityScore *= countVisibleTrees(x + 1, y, x, 0, -1);
        // Check how many trees can be seen from below.
        visibilityScore *= countVisibleTrees(grid.length - y, y, x, 1, 0);
        // Check how many trees can be seen from the right.
        visibilityScore *= countVisibleTrees(grid[y].length - x, y, x, 0, 1);
        visibleTreesGrid[y][x] = visibilityScore;
    }
}
const greatestVisible = Math.max(...visibleTreesGrid.flat());
console.log(greatestVisible);
