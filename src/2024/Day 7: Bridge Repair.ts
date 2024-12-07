// https://adventofcode.com/2024/day/7
import getInput from "../getInput.js";

const input = await getInput();

// Part 1
const equations = input.split("\n").map((line) => ({
    operands: line.split(":")[1]!.trim().split(" ").map((part) => parseInt(part, 10)),
    target: parseInt(line.split(":")[0]!, 10),
}));
const getOperationConfigurations = (operands: number[]): Array<Array<"*" | "+">> => {
    if (operands.length < 2)
        return [];

    return Array.from(
        { length: 2 ** (operands.length - 1) },
        (_, index) => index.toString(2).padStart(operands.length - 1, "0"),
    ).map((binary) => binary.split("").map((bit) => (bit === "0" ? "*" : "+")));
};
let sum = 0;

for (const { target, operands } of equations) {
    const operationConfigurations = getOperationConfigurations(operands);

    for (const configuration of operationConfigurations) {
        const result = operands.reduce((acc, operand, index) => {
            if (index === 0)
                return operand;

            switch (configuration[index - 1]) {
                case "*":
                    return acc * operand;
                case "+":
                    return acc + operand;
                default:
                    throw new Error("Invalid configuration");
            }
        }, 0);

        if (result === target) {
            sum += target;
            break;
        }
    }
}

console.log(sum);

// Part 2

const getNewOperationConfigurations = (operands: number[]): Array<Array<"*" | "+" | "||">> => {
    if (operands.length < 2)
        return [];

    return Array.from(
        { length: 3 ** (operands.length - 1) },
        (_, index) => index.toString(3).padStart(operands.length - 1, "0"),
    ).map((trinary) => trinary.split("").map((bit) => {
        switch (bit) {
            case "0":
                return "*";
            case "1":
                return "+";
            default:
                return "||";
        }
    }));
};

sum = 0;

for (const { target, operands } of equations) {
    const operationConfigurations = getNewOperationConfigurations(operands);

    for (const configuration of operationConfigurations) {
        const result = operands.reduce((acc, operand, index) => {
            if (index === 0)
                return operand;

            switch (configuration[index - 1]) {
                case "*":
                    return acc * operand;
                case "+":
                    return acc + operand;
                case "||":
                    return parseInt(acc.toString() + operand.toString(), 10);
                default:
                    throw new Error("Invalid configuration");
            }
        }, 0);

        if (result === target) {
            sum += target;
            break;
        }
    }
}

console.log(sum);
