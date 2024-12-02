// https://adventofcode.com/2024/day/2
import getInput from "../getInput.js";

const input = await getInput();

// Part 1

const reports: number[][] = input.split("\n").map((line) => line.split(" ").map(Number));
const safeReports = reports.map((report) => {
    const allIncreasing = report.every((num, i, arr) => i === 0 || num > arr[i - 1]!);
    const allDecreasing = report.every((num, i, arr) => i === 0 || num < arr[i - 1]!);
    const allDiffsAtMost3 = report.every((num, i, arr) => i === 0 || Math.abs(num - arr[i - 1]!) <= 3);

    return (allIncreasing || allDecreasing) && allDiffsAtMost3;
});

console.log(safeReports.filter(Boolean).length);

// Part 2

const safeEnoughReports = reports.map((report) => {
    for (let j = 0; j < report.length; j++) {
        const newReport = report.slice();

        newReport.splice(j, 1);

        const allIncreasing = newReport.every((num, i, arr) => i === 0 || num > arr[i - 1]!);
        const allDecreasing = newReport.every((num, i, arr) => i === 0 || num < arr[i - 1]!);
        const allDiffsAtMost3 = newReport.every((num, i, arr) => i === 0 || Math.abs(num - arr[i - 1]!) <= 3);

        if ((allIncreasing || allDecreasing) && allDiffsAtMost3)
            return true;
    }

    return false;
});

console.log(safeEnoughReports.filter(Boolean).length);
