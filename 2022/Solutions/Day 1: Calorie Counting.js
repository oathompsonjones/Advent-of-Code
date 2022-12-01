// https://adventofcode.com/2022/day/1
const input = require("../Utils/GetInput")();

const calorieList = input.split("\n\n").map((elf) => elf.split("\n").map(Number));
const reducedList = calorieList.map((list) => list.reduce((a, b) => a + b));
const maxCalories = Math.max(...reducedList);

console.log(maxCalories);

const sortedList = reducedList.sort((a, b) => b - a);
const top3Sum = sortedList[0] + sortedList[1] + sortedList[2];

console.log(top3Sum);
