// https://adventofcode.com/2022/day/13
import getInput from "../utils/getInput.js";

const input = await getInput();

type Packet = Array<Packet | number> | number[];

// Part 1
const packetPairs = input.split("\n\n")
    .map((pair) => pair.split("\n").map((x) => JSON.parse(x) as unknown)) as Array<[Packet, Packet]>;
const compare = (left: Packet, right: Packet): -1 | 0 | 1 => {
    let i = 0;
    const loopTo = Math.min(left.length, right.length);

    for (; i < loopTo; i++) {
        if (typeof left[i] === "number" && typeof right[i] === "number") {
            if ((left[i]!) < (right[i]!))
                return -1;

            if ((left[i]!) > (right[i]!))
                return 1;

            if ((left[i]!) === (right[i]!))
                continue;
        } else if (typeof left[i] === "object" && typeof right[i] === "object") {
            // @ts-expect-error - Can't be bothered to fix this
            const comparison = compare(left[i], right[i]);

            if (comparison === 0)
                continue;

            return comparison;
        } else if (typeof left[i] === "number" && typeof right[i] === "object") {
            // @ts-expect-error - Can't be bothered to fix this
            const comparison = compare([left[i]], right[i]);

            if (comparison === 0)
                continue;

            return comparison;
        } else if (typeof left[i] === "object" && typeof right[i] === "number") {
            // @ts-expect-error - Can't be bothered to fix this
            const comparison = compare(left[i], [right[i]]);

            if (comparison === 0)
                continue;

            return comparison;
        }
    }
    const leftIsShorter = loopTo === left.length ? -1 : 1;

    return i === loopTo ? leftIsShorter : 0;
};

console.log(packetPairs.map(([left, right], i) => [compare(left, right), i])
    .filter(([comparison]) => comparison! < 0)
    .map(([, i]) => i! + 1)
    .reduce((a, b) => a + b));

// Part 2
const unsortedPackets = input
    .replace(/\n\n/gu, "\n")
    .split("\n")
    .map((x) => JSON.parse(x) as Packet)
    .concat([[[2]], [[6]]]);
const sortedPackets = unsortedPackets.sort(compare);
const isDivider = (x: Packet): boolean => typeof x === "object" && x.length === 1 &&
    typeof x[0] === "object" && x[0].length === 1 &&
    typeof x[0][0] === "number" && (x[0][0] === 2 || x[0][0] === 6);
const dividerIndices = sortedPackets.map((packet, i) => (isDivider(packet) ? i + 1 : NaN)).filter((x) => x);

console.log(dividerIndices.reduce((a, b) => a * b));
