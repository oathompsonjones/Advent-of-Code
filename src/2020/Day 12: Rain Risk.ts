// https://adventofcode.com/2020/day/12
/* eslint-disable max-classes-per-file, max-lines, @typescript-eslint/naming-convention */

const input = [
    "E1",
    "S5",
    "W5",
    "R90",
    "S2",
    "L90",
    "F70",
    "W1",
    "R90",
    "E4",
    "F50",
    "S2",
    "F92",
    "L270",
    "W2",
    "S2",
    "W1",
    "L270",
    "W2",
    "F77",
    "R180",
    "F100",
    "L90",
    "F45",
    "W2",
    "S2",
    "F68",
    "L90",
    "N1",
    "E4",
    "S5",
    "R180",
    "N1",
    "L90",
    "W5",
    "F59",
    "E4",
    "F10",
    "E1",
    "F95",
    "F33",
    "L180",
    "F67",
    "L90",
    "E3",
    "L90",
    "F97",
    "E5",
    "L90",
    "N4",
    "L180",
    "E5",
    "N1",
    "F70",
    "E1",
    "F43",
    "E3",
    "R90",
    "N4",
    "R90",
    "F27",
    "R90",
    "E1",
    "L180",
    "E1",
    "F24",
    "F83",
    "S5",
    "F81",
    "F25",
    "E3",
    "F20",
    "N5",
    "W2",
    "W2",
    "R90",
    "W1",
    "F63",
    "F36",
    "W4",
    "F12",
    "W4",
    "L90",
    "F53",
    "S4",
    "W4",
    "W5",
    "R180",
    "W3",
    "L90",
    "W4",
    "S3",
    "E1",
    "N2",
    "W3",
    "F16",
    "S5",
    "F74",
    "E2",
    "R90",
    "N2",
    "L90",
    "N1",
    "R90",
    "S4",
    "S3",
    "L90",
    "W3",
    "F72",
    "N3",
    "F34",
    "E3",
    "F84",
    "N5",
    "F65",
    "R90",
    "W5",
    "R90",
    "F51",
    "L90",
    "F3",
    "N3",
    "F98",
    "R90",
    "S2",
    "E2",
    "L180",
    "N5",
    "F75",
    "R180",
    "F90",
    "S4",
    "R90",
    "W5",
    "F41",
    "E2",
    "S1",
    "L90",
    "R180",
    "N2",
    "W1",
    "S1",
    "R90",
    "E3",
    "W1",
    "R90",
    "W4",
    "N4",
    "R180",
    "S5",
    "R90",
    "N4",
    "R90",
    "W1",
    "L90",
    "S5",
    "R180",
    "W2",
    "R90",
    "F61",
    "F94",
    "E5",
    "S2",
    "E2",
    "E2",
    "F91",
    "W4",
    "N5",
    "L90",
    "F71",
    "F15",
    "W2",
    "F37",
    "W5",
    "N4",
    "F47",
    "E1",
    "R90",
    "W1",
    "F28",
    "R90",
    "F95",
    "N3",
    "F32",
    "W1",
    "F6",
    "S3",
    "R90",
    "E1",
    "F41",
    "L90",
    "E3",
    "F65",
    "R90",
    "E3",
    "N1",
    "L90",
    "S4",
    "F6",
    "E3",
    "E4",
    "S4",
    "L90",
    "F6",
    "S3",
    "R90",
    "E3",
    "S4",
    "N2",
    "F74",
    "N1",
    "E1",
    "L90",
    "E5",
    "L270",
    "W5",
    "L270",
    "N1",
    "F67",
    "F12",
    "W5",
    "N2",
    "F8",
    "S1",
    "F13",
    "S1",
    "E3",
    "F41",
    "N5",
    "W5",
    "L90",
    "N2",
    "E4",
    "F72",
    "R90",
    "W1",
    "W4",
    "R90",
    "F17",
    "L90",
    "W5",
    "N4",
    "R90",
    "E5",
    "F40",
    "N5",
    "R90",
    "F16",
    "R90",
    "W5",
    "F35",
    "E4",
    "S3",
    "L180",
    "S4",
    "W1",
    "N3",
    "F10",
    "N2",
    "W4",
    "S4",
    "R90",
    "N3",
    "F65",
    "R90",
    "F73",
    "E1",
    "S2",
    "L90",
    "F23",
    "N5",
    "R90",
    "N1",
    "E3",
    "F89",
    "S2",
    "E3",
    "L90",
    "R90",
    "F28",
    "R90",
    "W4",
    "F4",
    "L90",
    "E4",
    "F99",
    "W1",
    "R90",
    "N2",
    "L90",
    "F16",
    "F61",
    "N3",
    "E4",
    "S3",
    "L90",
    "E5",
    "L90",
    "N2",
    "L90",
    "W3",
    "S1",
    "F1",
    "R270",
    "E3",
    "L90",
    "F37",
    "L180",
    "E1",
    "N4",
    "W2",
    "F34",
    "W3",
    "N2",
    "E5",
    "L90",
    "F76",
    "S3",
    "W1",
    "F57",
    "E4",
    "R90",
    "W5",
    "S4",
    "R90",
    "W2",
    "N4",
    "L90",
    "N4",
    "E2",
    "W5",
    "S1",
    "F90",
    "E3",
    "L90",
    "N5",
    "F61",
    "W1",
    "F1",
    "E2",
    "L270",
    "W2",
    "R90",
    "N3",
    "W1",
    "R90",
    "N5",
    "W2",
    "R180",
    "F67",
    "S4",
    "N5",
    "F44",
    "E4",
    "F33",
    "R90",
    "E2",
    "R90",
    "F92",
    "L90",
    "N3",
    "S2",
    "L90",
    "N5",
    "R90",
    "W5",
    "R90",
    "F40",
    "W1",
    "F4",
    "W5",
    "S5",
    "E3",
    "S1",
    "L90",
    "S4",
    "L90",
    "L90",
    "S2",
    "F32",
    "N3",
    "E5",
    "L90",
    "N1",
    "W2",
    "R90",
    "S4",
    "F78",
    "N4",
    "F34",
    "L90",
    "F19",
    "E3",
    "R90",
    "W5",
    "R180",
    "N1",
    "F57",
    "E3",
    "R180",
    "E5",
    "F77",
    "W4",
    "N2",
    "W4",
    "F8",
    "L90",
    "W5",
    "S2",
    "F29",
    "R90",
    "W2",
    "F17",
    "N3",
    "F54",
    "S3",
    "F69",
    "S2",
    "R90",
    "N3",
    "W1",
    "N5",
    "R90",
    "S2",
    "F53",
    "N4",
    "W1",
    "F13",
    "S4",
    "S1",
    "L90",
    "S5",
    "E2",
    "F25",
    "W2",
    "S1",
    "F25",
    "E2",
    "F21",
    "S2",
    "L270",
    "N3",
    "F28",
    "L90",
    "F63",
    "R90",
    "S3",
    "F83",
    "W5",
    "F86",
    "N5",
    "W5",
    "L90",
    "F100",
    "E1",
    "F67",
    "L90",
    "F73",
    "W4",
    "L90",
    "F28",
    "E1",
    "W4",
    "S2",
    "R90",
    "N4",
    "N5",
    "F92",
    "W5",
    "L90",
    "E3",
    "S3",
    "E1",
    "F89",
    "S5",
    "F60",
    "L90",
    "F10",
    "R90",
    "N3",
    "N5",
    "R90",
    "F51",
    "N5",
    "L90",
    "W1",
    "F2",
    "E3",
    "N1",
    "R90",
    "E5",
    "N2",
    "F2",
    "R90",
    "F25",
    "W5",
    "S5",
    "F87",
    "N2",
    "R270",
    "W3",
    "F67",
    "N2",
    "F30",
    "E3",
    "L180",
    "F63",
    "R180",
    "W3",
    "L180",
    "S1",
    "E5",
    "R180",
    "E5",
    "L90",
    "S5",
    "R90",
    "E5",
    "L180",
    "R90",
    "W5",
    "N1",
    "F95",
    "W5",
    "F79",
    "W2",
    "R90",
    "F57",
    "W1",
    "F36",
    "L90",
    "W1",
    "F92",
    "N1",
    "L90",
    "F84",
    "R90",
    "F2",
    "R90",
    "W1",
    "S5",
    "W2",
    "F48",
    "N4",
    "L90",
    "S1",
    "F1",
    "N3",
    "L180",
    "F27",
    "N1",
    "R90",
    "F6",
    "L90",
    "E3",
    "S1",
    "F96",
    "R90",
    "E5",
    "F52",
    "L180",
    "W1",
    "R270",
    "N1",
    "F53",
    "E2",
    "F49",
    "N1",
    "F59",
    "E1",
    "W2",
    "L270",
    "S2",
    "N1",
    "F47",
    "W2",
    "L90",
    "W5",
    "N5",
    "R180",
    "E1",
    "R270",
    "E3",
    "F34",
    "E5",
    "R90",
    "N4",
    "F17",
    "W1",
    "L90",
    "F9",
    "E1",
    "F27",
    "N1",
    "F32",
    "L90",
    "S2",
    "L180",
    "E5",
    "F39",
    "S1",
    "F87",
    "L90",
    "N4",
    "R180",
    "W4",
    "F81",
    "L90",
    "S3",
    "F8",
    "S2",
    "E4",
    "F87",
    "S4",
    "R90",
    "F35",
    "W5",
    "N2",
    "F77",
    "E2",
    "F95",
    "L90",
    "F82",
    "E2",
    "F94",
    "L90",
    "W1",
    "N2",
    "R90",
    "F8",
    "E2",
    "S3",
    "R90",
    "N2",
    "E4",
    "R90",
    "S2",
    "R270",
    "N2",
    "F58",
    "S4",
    "R90",
    "S3",
    "R180",
    "F15",
    "E3",
    "S1",
    "R90",
    "F17",
    "W4",
    "S2",
    "E1",
    "S5",
    "R180",
    "N3",
    "W4",
    "S2",
    "R90",
    "S3",
    "W5",
    "S1",
    "R90",
    "S2",
    "F16",
    "L90",
    "N4",
    "L180",
    "F29",
    "R90",
    "E5",
    "L90",
    "E1",
    "F24",
    "W4",
    "F66",
    "E2",
    "F78",
    "L180",
    "F90",
    "N2",
    "F58",
    "S3",
    "W5",
    "L90",
    "F79",
    "R90",
    "S5",
    "F98",
    "N1",
    "R180",
    "S1",
    "L180",
    "N2",
    "F57",
    "E3",
    "F75",
    "S3",
    "W5",
    "R90",
    "W4",
    "F58",
    "E4",
    "N1",
    "W1",
    "S5",
    "F84",
    "L90",
    "F12",
    "S2",
    "F58",
    "R180",
    "F93",
    "W3",
    "F66",
    "L270",
    "N2",
    "F42",
    "R90",
    "E2",
    "S2",
    "L90",
    "F68",
    "R90",
    "N3",
    "F8",
    "R180",
    "E2",
    "F78",
    "R180",
    "F26",
    "E2",
    "R90",
    "S3",
    "L90",
    "N4",
    "E4",
    "S5",
    "R180",
    "S3",
    "L270",
    "S2",
    "L90",
    "S5",
    "F92",
    "E1",
    "N1",
    "F18",
    "E4",
    "F43",
    "N3",
    "W2",
    "R90",
    "E3",
    "F48",
    "W2",
    "N2",
    "L270",
    "E4",
    "F58",
    "N3",
    "W3",
    "F27",
    "R90",
    "F44",
    "E1",
    "F60",
    "E4",
    "R90",
    "E4",
    "R90",
    "F52",
    "R90",
    "S3",
    "W1",
    "R90",
    "S1",
    "W3",
    "F31",
];

// Part 1
class Ship {
    private direction: [number, number] = [1, 0];

    private readonly position: [number, number] = [0, 0];

    public init(): [number, [number, number]] {
        input.forEach((line) => {
            const [instruction] = line;
            const value = parseInt(line.slice(1), 10);

            this[instruction as "E" | "F" | "L" | "N" | "R" | "S" | "W"](value);
        });

        return [Math.abs(this.position[0]) + Math.abs(this.position[1]), this.position];
    }

    public N(val: number): void {
        this.position[1] += val;
    }

    public S(val: number): void {
        this.position[1] -= val;
    }

    public E(val: number): void {
        this.position[0] += val;
    }

    public W(val: number): void {
        this.position[0] -= val;
    }

    public L(val: number): void {
        if (val === 90)
            this.direction = [-this.direction[1], this.direction[0]];
        else if (val === 180)
            this.direction = [-this.direction[0], -this.direction[1]];
        else if (val === 270)
            this.direction = [this.direction[1], -this.direction[0]];
    }

    public R(val: number): void {
        if (val === 90)
            this.direction = [this.direction[1], -this.direction[0]];
        else if (val === 180)
            this.direction = [-this.direction[0], -this.direction[1]];
        else if (val === 270)
            this.direction = [-this.direction[1], this.direction[0]];
    }

    public F(val: number): void {
        this.position[0] += this.direction[0] * val;
        this.position[1] += this.direction[1] * val;
    }
}

console.log(new Ship().init()[0]);

// Part 2
class Ship2 {
    private readonly shipPosition: [number, number] = [0, 0];

    private waypointPosition: [number, number] = [10, 1];

    public init(): [number, [number, number]] {
        input.forEach((line) => {
            const [instruction] = line;
            const value = parseInt(line.slice(1), 10);

            this[instruction as "E" | "F" | "L" | "N" | "R" | "S" | "W"](value);
        });

        return [Math.abs(this.shipPosition[0]) + Math.abs(this.shipPosition[1]), this.shipPosition];
    }

    public N(val: number): void {
        this.waypointPosition[1] += val;
    }

    public S(val: number): void {
        this.waypointPosition[1] -= val;
    }

    public E(val: number): void {
        this.waypointPosition[0] += val;
    }

    public W(val: number): void {
        this.waypointPosition[0] -= val;
    }

    public L(val: number): void {
        if (val === 90)
            this.waypointPosition = [-this.waypointPosition[1], this.waypointPosition[0]];
        else if (val === 180)
            this.waypointPosition = [-this.waypointPosition[0], -this.waypointPosition[1]];
        else if (val === 270)
            this.waypointPosition = [this.waypointPosition[1], -this.waypointPosition[0]];
    }

    public R(val: number): void {
        if (val === 90)
            this.waypointPosition = [this.waypointPosition[1], -this.waypointPosition[0]];
        else if (val === 180)
            this.waypointPosition = [-this.waypointPosition[0], -this.waypointPosition[1]];
        else if (val === 270)
            this.waypointPosition = [-this.waypointPosition[1], this.waypointPosition[0]];
    }

    public F(val: number): void {
        this.shipPosition[0] += this.waypointPosition[0] * val;
        this.shipPosition[1] += this.waypointPosition[1] * val;
    }
}

console.log(new Ship2().init()[0]);
