// https://adventofcode.com/2020/day/15

const input = [ 2, 0, 6, 12, 1, 3 ];

// Part 1
let nums = [ ...input ];
for (let i = input.length; nums.length < 2020; ++i) {
    const lastNum = nums[ i - 1 ];
    if (!nums.slice(0, nums.length - 1).includes(lastNum)) nums[ i ] = 0;
    else {
        const indexesOfLastNum = nums.map((x, i) => ({ x, i })).filter((x) => x.x === lastNum).map((x) => x.i);
        if (indexesOfLastNum.length === 1) nums[ i ] = indexesOfLastNum[ 0 ];
        else nums[ i ] = indexesOfLastNum[ indexesOfLastNum.length - 1 ] - indexesOfLastNum[ indexesOfLastNum.length - 2 ];
    }
}
console.log(nums[ nums.length - 1 ]);

// Part 2
nums = new Map(input.map((value, index) => [ value, index + 1 ]));
let bucket = NaN;
let lastNum = input[ input.length - 1 ];
for (let i = input.length; i < 30000000; ++i) {
    lastNum = nums.has(lastNum) ? i - nums.get(lastNum) : 0;
    nums.set(bucket, i);
    bucket = lastNum;
}
console.log(lastNum);