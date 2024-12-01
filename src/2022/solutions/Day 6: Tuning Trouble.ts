// https://adventofcode.com/2022/day/6
import getInput from "../utils/getInput.js";

const input = await getInput();

// Part 1

const findUniqueString = (length: number): number => {
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

    return -1;
};

console.log(findUniqueString(4));

// Part 2
console.log(findUniqueString(14));
