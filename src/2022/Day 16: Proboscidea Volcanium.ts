// https://adventofcode.com/2022/day/16
// eslint-disable-next-line max-len
const input = "Valve AA has flow rate=0; tunnels lead to valves DD, II, BB\nValve BB has flow rate=13; tunnels lead to valves CC, AA\nValve CC has flow rate=2; tunnels lead to valves DD, BB\nValve DD has flow rate=20; tunnels lead to valves CC, AA, EE\nValve EE has flow rate=3; tunnels lead to valves FF, DD\nValve FF has flow rate=0; tunnels lead to valves EE, GG\nValve GG has flow rate=0; tunnels lead to valves FF, HH\nValve HH has flow rate=22; tunnel leads to valve GG\nValve II has flow rate=0; tunnels lead to valves AA, JJ\nValve JJ has flow rate=21; tunnel leads to valve II";

// Part 1
const valves: Record<string, { edges: string[]; flowRate: number; open: boolean; }> = {};

input.split("\n")
    .map((text) => text.match(/(?<temp2>[A-Z]{2})|(?<temp1>\d{1,2})/gu) as [string, number, ...string[]])
    .forEach(([valve, flowRate, ...edges]) => {
        valves[valve] = { edges, flowRate: Number(flowRate), open: false };
    });
const vertices = Object.keys(valves);
const floydWarshall = (): number[][] => {
    const dist: number[][] = [];

    for (let i = 0; i < vertices.length; i++) {
        dist[i] = [];
        for (let j = 0; j < vertices.length; j++)
            dist[i]![j] = Infinity;
    }
    vertices.forEach((v) => {
        const { edges } = valves[v]!;

        edges.forEach((u) => {
            dist[vertices.indexOf(u)]![vertices.indexOf(v)] = valves[u]!.flowRate;
        });
    });
    vertices.forEach((v) => {
        dist[vertices.indexOf(v)]![vertices.indexOf(v)] = 0;
    });
    for (let k = 0; k < vertices.length; k++) {
        for (let i = 0; i < vertices.length; i++) {
            for (let j = 0; j < vertices.length; j++) {
                if (dist[i]![j]! > dist[i]![k]! + dist[k]![j]!)
                    dist[i]![j] = dist[i]![k]! + dist[k]![j]!;
            }
        }
    }

    return dist;
};
const adjacencyMatrix = floydWarshall();
let pressure = 0;
let currentValve = vertices.indexOf("AA");
const getDistance = (edge: string): number => adjacencyMatrix[currentValve]![vertices.indexOf(edge)]!;

for (let i = 0; i < 30; i++) {
    const valve = valves[vertices[currentValve]!]!;

    console.log(vertices[currentValve], valve);

    if (valve.flowRate > 0) {
        valve.open = true;
        pressure += Object.values(valves).filter(({ open }) => open)
            .map(({ flowRate }) => flowRate)
            .reduce((a, b) => a + b, 0);
        i++;
        continue;
    }

    pressure += Object.values(valves).filter(({ open }) => open)
        .map(({ flowRate }) => flowRate)
        .reduce((a, b) => a + b, 0);
    console.log(valve.edges.map(getDistance));
    currentValve = Math.max(...valve.edges.map(getDistance));
}
console.log(pressure);

// Part 2
