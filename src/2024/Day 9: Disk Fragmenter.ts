// https://adventofcode.com/2024/day/9
import getInput from "../getInput.js";

const input = await getInput();

// Part 1

const nums = input.split("").map(Number);
const _diskMap: number[] = [];

for (let i = 0, j = 0; i < nums.length; i++) {
    const file = i % 2 === 0;
    const fileId = file ? j++ : NaN;

    _diskMap.push(...Array.from({ length: nums[i]! }, () => (file ? fileId : NaN)));
}

const diskMap = _diskMap.slice();

for (let i = diskMap.length - 1; i >= 0 && diskMap.some((x) => isNaN(x)); i--) {
    diskMap[diskMap.findIndex((x) => isNaN(x))] = diskMap[i]!;
    // eslint-disable-next-line
    delete diskMap[i];
}

console.log(diskMap.map((x, i) => x * i).reduce((a, b) => a + b, 0));

// Part 2

const diskMap1 = _diskMap.slice();

for (let i = diskMap1.length - 1; i >= 0;) {
    const groupItem = diskMap1[i]!;

    if (isNaN(groupItem)) {
        i--;
        continue;
    }

    let groupSize = 0;

    for (let j = i; diskMap1[j] === groupItem; j--)
        groupSize++;

    const nanGroupStart = diskMap1.findIndex((_, k) => {
        if (k >= i - groupSize)
            return false;

        for (let l = 0; l < groupSize; l++) {
            if (!isNaN(diskMap1[k + l]!))
                return false;
        }

        return true;
    });

    if (nanGroupStart !== -1) {
        for (let k = 0; k < groupSize; k++) {
            diskMap1[nanGroupStart + k] = groupItem;
            diskMap1[i - k] = NaN;
        }
    }

    i -= groupSize;
}

console.log(diskMap1.map((x, i) => (isNaN(x) ? 0 : x) * i).reduce((a, b) => a + b, 0));
