// https://adventofcode.com/2022/day/11
/* eslint-disable @typescript-eslint/prefer-for-of */
import getInput from "../utils/getInput.js";

const input = await getInput();

// Part 1
const monkeyInputs = input.split("\n\n");
let monkeys: Monkey[] = [];

class Monkey {
    public id: number;

    public startingItems: number[];

    public operationText: string;

    public testText: string[];

    public testModulus: number;

    public testTrueCase: number;

    public testFalseCase: number;

    public inspections: number;

    public constructor(monkeyInput: string) {
        const lines = monkeyInput.split("\n");

        this.id = parseInt(lines.shift()!.trim().split(" ")[1]!, 10);
        this.startingItems = lines.shift()!.trim().split(": ")[1]!.split(", ").map(Number);
        this.operationText = lines.shift()!.trim().split(": new = old ")[1]!;
        this.testText = lines.map((line) => line.trim());
        const [conditionText, trueCaseText, falseCaseText] = this.testText.map((text) => text.split(" "));

        this.testModulus = Number(conditionText![conditionText!.length - 1]!);
        this.testTrueCase = Number(trueCaseText![trueCaseText!.length - 1]!);
        this.testFalseCase = Number(falseCaseText![falseCaseText!.length - 1]!);
        this.inspections = 0;
    }

    public operation(div: number, modulus: number): void {
        this.inspections++;
        const [operation, value] = this.operationText.split(" ");

        switch (operation!) {
            case "*":
                this.startingItems[0]! *= value === "old" ? this.startingItems[0]! : Number(value);
                break;
            case "+":
                this.startingItems[0]! += value === "old" ? this.startingItems[0]! : Number(value);
                break;
        }

        this.startingItems[0] = Math.floor(this.startingItems[0]! / div) % modulus;
        this.test();
    }

    public test(): void {
        this.throw(this.startingItems[0]! % this.testModulus === 0 ? this.testTrueCase : this.testFalseCase);
    }

    public throw(targetMonkey: number): void {
        monkeys[targetMonkey]!.catch(this.startingItems.shift()!);
    }

    public catch(item: number): void {
        this.startingItems.push(item);
    }
}

const runRounds = (totalRounds: number, div: number): number => {
    monkeys = monkeyInputs.map((monkeyInput) => new Monkey(monkeyInput));
    let modulus = 1;

    for (let i = 0; i < monkeys.length; i++)
        modulus *= monkeys[i]!.testModulus;
    for (let round = 0; round < totalRounds; round++) {
        for (let turn = 0; turn < monkeys.length; turn++) {
            const monkey = monkeys[turn]!;
            const numberOfItems = monkey.startingItems.length;

            for (let i = 0; i < numberOfItems; i++)
                monkey.operation(div, modulus);
        }
    }
    const inspections = monkeys.map((monkey) => monkey.inspections).sort((a, b) => b - a);

    return inspections[0]! * inspections[1]!;
};

console.log(runRounds(20, 3));

// Part 2
console.log(runRounds(10_000, 1));
