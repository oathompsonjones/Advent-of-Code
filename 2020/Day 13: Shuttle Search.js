// https://adventofcode.com/2020/day/13

const input = [
    1000053,
    19,
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    37,
    "x",
    "x",
    "x",
    "x",
    "x",
    523,
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    13,
    "x",
    "x",
    "x",
    "x",
    23,
    "x",
    "x",
    "x",
    "x",
    "x",
    29,
    "x",
    547,
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    41,
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    17
];

// Part 1
const timestamp = input.shift();
const busTimes = {};
input.filter((x) => x !== "x").forEach((x) => {
    busTimes[x] = [];
    for (let i = timestamp; i < timestamp + 100; ++i) {
        if (i % x === 0)
            busTimes[x].push(i);
    }
});
const earliest = Math.min(...Object.keys(busTimes).map((x) => busTimes[x])
    .flat());
const busID = Object.keys(busTimes).find((x) => busTimes[x].includes(earliest));
console.log(busID * (earliest - timestamp));

// Part 2
const buses = input.map((n) => Number(n)).map((v, i) => [v, i])
    .filter((v) => !isNaN(v[0]));
let time = 0;
let [[inc]] = buses;
for (let bus = 1; bus < buses.length; ++bus) {
    while ((time + buses[bus][1]) % buses[bus][0] !== 0)
        time += inc;
    inc *= buses[bus][0];
}
console.log(time);
