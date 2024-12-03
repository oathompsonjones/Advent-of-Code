// https://adventofcode.com/2024/day/3
import getInput from "../getInput.js";

const input = await getInput();

// Part 1

const mulRegex = /mul\((?<op1>\d{1,3}),(?<op2>\d{1,3})\)/u;
const validMuls = input.match(new RegExp(mulRegex, "gu"))?.map((match) => mulRegex.exec(match)?.groups) ?? [];
const results = validMuls.map((groups) => Number(groups?.op1) * Number(groups?.op2));
const sum = results.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

// Part 2

const doMulRegex = /(?<mul>mul\((?<op1>\d{1,3}),(?<op2>\d{1,3})\))|(?<do>do\(\))|(?<dont>don't\(\))/u;
let doMul = true;
let result = 0;

for (const match of input.match(new RegExp(doMulRegex, "gu")) ?? []) {
    switch (match) {
        case "do()":
            doMul = true;
            break;
        case "don't()":
            doMul = false;
            break;
        default: {
            const groups = doMulRegex.exec(match)?.groups;

            if (doMul)
                result += Number(groups?.op1) * Number(groups?.op2);

            break;
        }
    }
}

console.log(result);
