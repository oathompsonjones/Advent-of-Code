// https://adventofcode.com/2020/day/10

let input = [
    49,
    89,
    70,
    56,
    34,
    14,
    102,
    148,
    143,
    71,
    15,
    107,
    127,
    165,
    135,
    26,
    119,
    46,
    53,
    69,
    134,
    1,
    40,
    81,
    140,
    160,
    33,
    117,
    82,
    55,
    25,
    11,
    128,
    159,
    61,
    105,
    112,
    99,
    93,
    151,
    20,
    108,
    168,
    2,
    109,
    75,
    139,
    170,
    65,
    114,
    21,
    92,
    106,
    162,
    124,
    158,
    38,
    136,
    95,
    161,
    146,
    129,
    154,
    121,
    86,
    118,
    88,
    50,
    48,
    62,
    155,
    28,
    120,
    78,
    60,
    147,
    87,
    27,
    7,
    54,
    39,
    113,
    5,
    74,
    169,
    6,
    43,
    8,
    29,
    18,
    68,
    32,
    19,
    133,
    22,
    94,
    47,
    132,
    59,
    83,
    12,
    13,
    96,
    35
];

const inputs = [
    [
        16,
        10,
        15,
        5,
        1,
        11,
        7,
        19,
        6,
        12,
        4
    ], [
        28,
        33,
        18,
        42,
        31,
        14,
        46,
        20,
        48,
        47,
        24,
        23,
        49,
        45,
        19,
        38,
        39,
        11,
        1,
        32,
        25,
        35,
        8,
        17,
        7,
        9,
        4,
        2,
        34,
        10,
        3
    ]
];
[input] = inputs;

// Part 1
const arr = [0].concat(input.sort((a, b) => a - b)).concat([Math.max(...input) + 3]);
const differences = [];
arr.forEach((x, i) => differences.push(arr[i + 1] - x));
console.log(differences.filter((x) => x === 1).length * differences.filter((x) => x === 3).length);

// Part 2
/* Function take1() {
    const arrangements = [];
    const skipable = (n) => n.filter((_, i) => n[i + 1] - n[i - 1] <= 3);
    const recursive = (n) => {
        arrangements.push(n);
        skipable(n).forEach((x) => recursive(n.filter((y) => x !== y)));
    };
    recursive(arr);
    console.log(skipable(arr));
    console.log(
        skipable(arr).length,
        [...new Set(arrangements.map((x) => JSON.stringify(x)))].map((x) => JSON.parse(x)).length
    );
} */

/* Function take2() {
    const combos = (input) => {
        const combos = [];
        const x = 2 ** input.length;
        for (let i = 0; i < x; ++i) {
            const temp = [];
            for (let j = 0; j < input.length; ++j) if (i & 2 ** j) temp.push(input[j]);
            if (temp.length) combos.push(temp);
        }
        return combos;
    };
    const allCombinations = combos(arr.slice(1, arr.length - 1));
    const validCombinations = allCombinations.map((x) => [0].concat(x).concat(arr[arr.length - 1]))
        .filter((x) => {
            for (let j = 1; j < x.length; ++j) if (x[j] - x[j - 1] > 3) return false;
            return true;
        });
    console.log(validCombinations.length);
} */

let arrangements = 1;
const tribonacci = [0, 1, 2, 4, 7, 13, 24];
for (let i = 7; i < 100; ++i)
    tribonacci.push(tribonacci[i - 1] + tribonacci[i - 2] + tribonacci[i - 3]);
console.log(tribonacci);
let oneJoltDifferences = 0;
for (let i = 1; i < arr.length; ++i) {
    if (arr[i] - arr[i - 1] === 1) {
        oneJoltDifferences++;
    } else if (oneJoltDifferences > 0) {
        arrangements *= tribonacci[oneJoltDifferences];
        oneJoltDifferences = 0;
    }
}
console.log(arrangements);
