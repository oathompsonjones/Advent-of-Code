// https://adventofcode.com/2024/day/17
import getInput from "../getInput.js";

let input = await getInput();

input = `Register A: 2024
Register B: 0
Register C: 0

Program: 0,3,5,4,3,0`;

// Part 1

const regs = input
    .split("\n")
    .slice(0, 3)
    .map((line) => BigInt(Number(line.split(": ")[1]))) as [bigint, bigint, bigint];
const prog = input
    .split("\n\n")[1]!
    .split(" ")[1]!
    .split(",")
    .map(Number);
const operations = ["adv", "bxl", "bst", "jnz", "bxc", "out", "bdv", "cdv"] as const;
const operationOperandTypes: Array<"combo" | "literal"> = [
    "combo",
    "literal",
    "combo",
    "literal",
    "literal",
    "combo",
    "combo",
    "combo",
];

const realMod = (a: bigint, b: bigint): bigint => (a % b + b) % b;
const execute = (registers: [bigint, bigint, bigint], program: number[]): number[] => {
    const output: number[] = [];

    for (let pc = 0; pc < program.length - 1; pc += 2) {
        const opcode = program[pc]!;
        const operand = program[pc + 1]!;
        const operation = operations[opcode]!;
        const operandType = operationOperandTypes[opcode]!;
        const operandValue = operandType === "literal"
            ? BigInt(operand)
            : [0n, 1n, 2n, 3n, registers[0], registers[1], registers[2], new Error("Invalid program")][operand]!;

        if (operandValue instanceof Error)
            throw operandValue;

        switch (operation) {
            case "adv":
                registers[0] = BigInt(registers[0] / 2n ** operandValue);
                break;
            case "bxl":
                registers[1] ^= operandValue;
                break;
            case "bst":
                registers[1] = realMod(operandValue, 8n);
                break;
            case "jnz":
                if (registers[0] !== 0n)
                    pc = Number(operandValue * 2n - 2n);

                break;
            case "bxc":
                registers[1] ^= registers[2];
                break;
            case "out":
                output.push(Number(realMod(operandValue, 8n)));
                break;
            case "bdv":
                registers[1] = registers[0] / 2n ** operandValue;
                break;
            case "cdv":
                registers[2] = registers[0] / 2n ** operandValue;
                break;
        }
    }

    return output;
};

console.log(execute(regs, prog).join());

// Part 2

let i = 8n ** (BigInt(prog.length) - 1n);

regs[0] = i;

// Const firstOutput = execute(regs, prog);

for (; ; i += 8n) {
    regs[0] = i;
    const output = execute(regs, prog);

    console.log(i, output.join(), prog.join());

    if (output.join() === prog.join())
        break;
}

console.log(i);
