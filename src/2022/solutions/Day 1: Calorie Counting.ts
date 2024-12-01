// https://adventofcode.com/2022/day/1
import getInput from "../utils/getInput.js";

const input = await getInput();

// Part 1
const calorieList = input.split("\n\n").map((elf) => elf.split("\n").map(Number));
const reducedList = calorieList.map((list) => list.reduce((a, b) => a + b));
const maxCalories = Math.max(...reducedList);

console.log(maxCalories);

// Part 2
const sortedList = reducedList.sort((a, b) => b - a);
const top3Sum = sortedList[0]! + sortedList[1]! + sortedList[2]!;

console.log(top3Sum);
