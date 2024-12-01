// https://adventofcode.com/2020/day/15

const input = [2, 0, 6, 12, 1, 3];

// Part 1
const nums = [...input];

for (let i = input.length; nums.length < 2020; ++i) {
    const lastNum = nums[i - 1]!;

    if (nums.slice(0, nums.length - 1).includes(lastNum)) {
        const indexesOfLastNum = nums.map((x, j) => ({ j, x })).filter((x) => x.x === lastNum).map((x) => x.j);

        if (indexesOfLastNum.length === 1)
            nums[i] = indexesOfLastNum[0]!;
        else
            nums[i] = indexesOfLastNum[indexesOfLastNum.length - 1]! - indexesOfLastNum[indexesOfLastNum.length - 2]!;
    } else {
        nums[i] = 0;
    }
}
console.log(nums[nums.length - 1]);

// Part 2
const numsMap = new Map(input.map((value, index) => [value, index + 1]));
let bucket = NaN;
let lastNum = input[input.length - 1]!;

for (let i = input.length; i < 30000000; ++i) {
    lastNum = numsMap.has(lastNum) ? i - numsMap.get(lastNum)! : 0;
    numsMap.set(bucket, i);
    bucket = lastNum;
}
console.log(lastNum);
