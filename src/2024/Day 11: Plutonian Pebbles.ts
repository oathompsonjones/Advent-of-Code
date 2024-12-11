// https://adventofcode.com/2024/day/11
import getInput from "../getInput.js";

const input = await getInput();

// Part 1

let stones = input.split(" ").map(Number);

for (let i = 0; i < 25; i++) {
    const nextStones: number[] = [];

    for (const stone of stones) {
        if (stone === 0) {
            nextStones.push(1);
        } else if (String(stone).length % 2 === 0) {
            const digits = String(stone);
            const half = digits.length / 2;

            nextStones.push(Number(digits.substring(0, half)), Number(digits.substring(half)));
        } else {
            nextStones.push(stone * 2024);
        }
    }

    stones = nextStones;
}

console.log(stones.length);

// Part 2

stones = input.split(" ").map(Number);

let stoneCounts = new Map<number, number>(stones.map((stone) => [stone, 1]));
const updateMap = (map: Map<number, number>, stone: number, count: number): void => {
    map.set(stone, (map.get(stone) ?? 0) + count);
};

for (let i = 0; i < 75; i++) {
    const nextStoneCounts = new Map<number, number>();

    for (const [stone, count] of stoneCounts.entries()) {
        if (stone === 0) {
            updateMap(nextStoneCounts, 1, count);
        } else if (String(stone).length % 2 === 0) {
            const digits = String(stone);
            const half = Math.floor(digits.length / 2);

            updateMap(nextStoneCounts, Number(digits.slice(0, half)), count);
            updateMap(nextStoneCounts, Number(digits.slice(half)), count);
        } else {
            updateMap(nextStoneCounts, stone * 2024, count);
        }
    }

    stoneCounts = nextStoneCounts;
}

console.log([...stoneCounts.values()].reduce((a, b) => a + b, 0));
