// https://adventofcode.com/2024/day/4
import getInput from "../getInput.js";

const input = await getInput();

// Part 1

const grid = input.split("\n").map((line) => line.split(""));
let count = 0;

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i]!.length; j++) {
        if (grid[i]![j] === "X") {
            // Check right
            if (j + 3 < grid[i]!.length) {
                if (grid[i]![j + 1] === "M" && grid[i]![j + 2] === "A" && grid[i]![j + 3] === "S")
                    count++;
            }

            // Check left
            if (j - 3 >= 0) {
                if (grid[i]![j - 1] === "M" && grid[i]![j - 2] === "A" && grid[i]![j - 3] === "S")
                    count++;
            }

            // Check down
            if (i + 3 < grid.length) {
                if (grid[i + 1]![j] === "M" && grid[i + 2]![j] === "A" && grid[i + 3]![j] === "S")
                    count++;
            }

            // Check up
            if (i - 3 >= 0) {
                if (grid[i - 1]![j] === "M" && grid[i - 2]![j] === "A" && grid[i - 3]![j] === "S")
                    count++;
            }

            // Check diagonal right down
            if (i + 3 < grid.length && j + 3 < grid[i]!.length) {
                if (grid[i + 1]![j + 1] === "M" && grid[i + 2]![j + 2] === "A" && grid[i + 3]![j + 3] === "S")
                    count++;
            }

            // Check diagonal left down
            if (i + 3 < grid.length && j - 3 >= 0) {
                if (grid[i + 1]![j - 1] === "M" && grid[i + 2]![j - 2] === "A" && grid[i + 3]![j - 3] === "S")
                    count++;
            }

            // Check diagonal right up
            if (i - 3 >= 0 && j + 3 < grid[i]!.length) {
                if (grid[i - 1]![j + 1] === "M" && grid[i - 2]![j + 2] === "A" && grid[i - 3]![j + 3] === "S")
                    count++;
            }

            // Check diagonal left up
            if (i - 3 >= 0 && j - 3 >= 0) {
                if (grid[i - 1]![j - 1] === "M" && grid[i - 2]![j - 2] === "A" && grid[i - 3]![j - 3] === "S")
                    count++;
            }
        }
    }
}

console.log(count);

// Part 2

count = 0;

for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i]!.length - 1; j++) {
        if (grid[i]![j] === "A") {
            if (
                grid[i - 1]?.[j - 1] === "M" && grid[i - 1]?.[j + 1] === "S" &&
                grid[i + 1]?.[j - 1] === "M" && grid[i + 1]?.[j + 1] === "S" ||
                grid[i - 1]?.[j - 1] === "M" && grid[i - 1]?.[j + 1] === "M" &&
                grid[i + 1]?.[j - 1] === "S" && grid[i + 1]?.[j + 1] === "S" ||
                grid[i - 1]?.[j - 1] === "S" && grid[i - 1]?.[j + 1] === "M" &&
                grid[i + 1]?.[j - 1] === "S" && grid[i + 1]?.[j + 1] === "M" ||
                grid[i - 1]?.[j - 1] === "S" && grid[i - 1]?.[j + 1] === "S" &&
                grid[i + 1]?.[j - 1] === "M" && grid[i + 1]?.[j + 1] === "M"
            )
                count++;
        }
    }
}

console.log(count);
