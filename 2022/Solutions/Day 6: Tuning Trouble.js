// https://adventofcode.com/2022/day/6
const input = require("../Utils/GetInput")();

// Part 1
const findUniqueString = (length) => {
    const chars = [];
    for (let i = 0; i < input.length; i++) {
        chars.push(input[i]);
        if (i < length) {
            continue;
        } else {
            chars.shift();
            if (new Set(chars).size === length)
                return i + 1;
        }
    }
};
console.log(findUniqueString(4));

// Part 2
console.log(findUniqueString(14));
