// https://adventofcode.com/2024/day/5
import getInput from "../getInput.js";

const input = await getInput();

// Part 1
const [rules, orders] = input.split("\n\n") as [string, string];
const orderLists = orders.split("\n").map((order) => order.split(",").map(Number));
const rulesMap = new Map<number, number[]>();

rules.split("\n").forEach((rule) => {
    const [key, value] = rule.split("|").map(Number) as [number, number];

    if (!rulesMap.has(key))
        rulesMap.set(key, []);

    rulesMap.get(key)!.push(value);
});

const isValidOrder = (order: number[]): boolean => {
    const seenPages: number[] = [];

    for (const page of order) {
        if (rulesMap.get(page)?.some((afterPage) => seenPages.includes(afterPage)) ?? false)
            return false;

        seenPages.push(page);
    }

    return true;
};
const sumOfMiddles = (middles: number[]): number => middles.reduce((acc, middle) => acc + middle, 0);
const validOrders = orderLists.filter(isValidOrder);

console.log(sumOfMiddles(validOrders.map((order) => order[Math.floor(order.length / 2)]!)));

// Part 2

const invalidOrders = orderLists.filter((order) => !isValidOrder(order));
const fixedOrders = invalidOrders.map((order) => [...order]
    .sort((a, b) => (rulesMap.get(b)?.includes(a) ?? false ? 1 : -1)));

console.log(sumOfMiddles(fixedOrders.map((order) => order[Math.floor(order.length / 2)]!)));
