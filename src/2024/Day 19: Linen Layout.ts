// https://adventofcode.com/2024/day/19
import getInput from "../getInput.js";

let input = await getInput();

input = `r, wr, b, g, bwu, rb, gb, br

brwrr
bggr
gbbr
rrbgbr
ubwu
bwurrg
brgr
bbrgwb`;

// Part 1

const towels = input.split("\n\n")[0]!.split(", ").sort((a, b) => b.length - a.length);
const patterns = input.split("\n\n")[1]!.split("\n");

const towelRegex = new RegExp(`(${towels.join("|")})+`, "gu");
const validPatterns = patterns.filter((pattern) => pattern.match(towelRegex)?.[0] === pattern);

console.log(validPatterns);
console.log(towelRegex);
console.log(validPatterns.length);

/* Const findNextTowels = (pattern: string, index: number): string[] => {
    const nextTowels: string[] = [];

    for (const towel of towels) {
        if (pattern.slice(index).startsWith(towel))
            nextTowels.push(towel);
    }

    return nextTowels;
};

type Node = {
    children: Node[];
    value: string;
};

const buildTree = (pattern: string, index: number = 0, node: Node = { children: [], value: "" }): Node => {
    const nextTowels = findNextTowels(pattern, index);

    console.log(
        "Found next towels for",
        pattern,
        "at index",
        index,
        `(${pattern.slice(0, index)}):`,
        nextTowels,
    );

    for (const towel of nextTowels) {
        const child = {
            children: [],
            value: towel,
        };

        node.children.push(child);

        buildTree(pattern, index + towel.length, child);
    }

    return node;
};

const traverseTree = (node: Node, path: string = "", paths: Set<string> = new Set()): Set<string> => {
    if (node.children.length === 0) {
        paths.add(path);

        return paths;
    }

    for (const child of node.children)
        traverseTree(child, path + child.value, paths);

    return paths;
};

const allTreePaths: Array<Set<string>> = [];

for (const pattern of patterns) {
    console.log(pattern);

    const tree = buildTree(pattern);

    console.log("Built tree for", pattern);

    const treePaths = traverseTree(tree);

    console.log("Traversed tree for", pattern);

    allTreePaths.push(treePaths);
}

console.log(allTreePaths.map((paths, i) => paths.has(patterns[i]!)).filter(Boolean).length); */

// Part 2

