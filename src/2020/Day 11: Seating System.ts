// https://adventofcode.com/2020/day/11

const input = [
    "LLLLLLLLLLLL.LLLLLLL.LLLLLLL..LLLL.LLLLL.LLLLL.LLL..LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLL.LLLLL.L.LLL.LLLLL.LLLL..LLLL.LLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLLL.LLLLLLL",
    "LLLLL.LLLLLLLLLLLLLLLL.LLLLL.LLLLL.L.LLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL..LLLLL.",
    "L.LLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLL.LLLL.LLLLLLLL.LL.L.LLLLLLL.LLLL.LLLLLLLL.LLLLLLL",
    "LLLLL..LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLL.LLLL.LLLLLLLL.LL.LLLL",
    "LLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLL.LLLL.LLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLLL.LLLLLLL",
    "LLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LL.LLLLL.LLLL.LLLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLL",
    ".L...LL.L.L.L....L..L......LL...L..L.L.LLL.....L...L..LLL.L.LL..LLL......L..L.LLLLL.....L..L...",
    "LLLLL..LLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLL.LLLLLLLLLLLLLLLLLLLLL",
    "LLL.LLLLLLLL..LLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLL.LLLL.L.LLLLLL.LLLL.LLLLLLLLLLLL.LLLLLLLL.LLLLLLL",
    "LLLLL.L.LLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLL.LLLLL.LLLL.LLLLLLLLLLLL..LLLLLLL.LLLLLLLLLL.LL.LLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLL.LLLLL.LLLL.LLLLLLLL.LLLL.LLLL.LLLLLLL.LLL.LLLL.LLLLLLL",
    "LLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLL.LLL...LLLLLL",
    "LLL.LLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLL.LLLLL.LLLLLL.LLLLLLLL",
    "LLLLL.LLLLLLLLLLLLLLLL.LL.LL.LLLLL.LLLLL.LLLLL.LLLL.LLLLLLLL.LLLL.LLLLLL..LLLLLLLLLLLLL.LLLLL.L",
    "L.LLLLLLLLLL.LLLLLLLLL.LLLLL.L.LLL.LLLLL.LLLLLLLLLL.LLLLLLLL.LLLL.LLLLL.L.LLLL.LLLLLLLL.LLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLL.LL.LL.LLLLL.LLLLL.LLLLL.LLLLLLLLLLLLL.LLLL.LLLLLLL.LLLL.L.LLLLLL.LLLLLLL",
    "L...L.LL..L.L.LL.LL.L.....L..L.L.......L.L.LL...L....L......L.L.L.L.L..L....LL......L......L...",
    "LLLL..LLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLL.L.LLLL.LLLL.LLLLL..LLLLLLL.LLLLLLL",
    "LLLLL.LLLLLL.LLL.LL.LL.LLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLL.",
    "L..LL.LLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLL.LLLLL.LL.L.LLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL..LLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLLLLLLL.LLLL.LLLLLLLL.LLLL.LLLLLLL.LLLLLLLLLLLLL.LLLLLLL",
    "LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLL.LLLL.LLLLLLL.LLLLL.L.LLLLL.LLLLLLL",
    "LL.LL.LLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLL.LLLLL.LLLL.LLLLLLLL.LLLL.LLLLLLLLLLLL.LLLLLLLL.LLL.LLL",
    "...............L.L..LL.....L.L..L...LL.......LL....L......L...L....L...............LLL...L.LLL.",
    "LLLLLLLLLLL..LLLLLL.LLLLLLLL.LLLLL.LLLLL.LLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLL.L.LLLLL",
    "LL.LL.LLLLLL.LLLLLLLLL.LLLLL.LLLL..LLLLLLLLLLL.LLLLLLLLLLLLL.LLLL.LLLLLLL.LLL.LLLLLLLLL.LLLLLLL",
    ".LLLL.LLLLLLL.LLLLLLLL.LLLLL.LLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLLL.LLLL.LLLLLLLLLLLLLLL.LLL.LLLLLLLLLLLL.LLLLL.LLLLLLLLLL",
    "LLLLL.L.LLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLL.LLLL.LLLLLLLL.LLLL.LLLLLLL.LLL..LLLLLLLLLLLLLLLL",
    "LLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLL.LLLL.LLLLL.LLLL.LLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLL.LLLLLLL",
    "LLL.L.LLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLL.LLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLL.LLLLLLL",
    "LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLLL.LLLLLLL",
    "....L..L..........L......L.LL..L.L..LL.......L.....LL..L..LL...L......L....L..L..L....L.......L",
    ".L.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLL.LLLLLL.LLLLLLLLLL.LL.LLLLLLLLLL.L.LLLL.LLLLLLLL.LLLLLLL",
    "LLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLL.LLLLLLL.LLLLLLLL.LLLLLLL",
    "LLLLL.LLL.LL.LLL.LLLLL.LLLLLLLLLLL.LLLLL.LLLLL.LLLL.L.LLLLLLLLLL..LLLLLLLLLLLL.LLLLLLLL.LLLLLLL",
    "LL.LL.LLLLLL.LLLL.LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLL.L.LLLLLLLL.LLLLLLLLLLLL.L.LL.LLLLLLLL.LLLLLLL",
    "LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLL.LLLL.LLLLLLL..LLLLLLL",
    ".....L.L..LL.LLL.LL.L.L.....L..L.L......L......L.LL...L....LL..L.........L..L.....L.L....L..L..",
    "LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL",
    "LLLLL.LLLLLL.LLL.LLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLL.LLLLLLLL.LLLLLLL",
    "LLLLL.LLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLL.LLLL.LLLLLLLL.LLLL.LLLLLLL.LLL..LLLLLLLL.LLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLLLLLLLL.L.LLL.LLLLL.LL.LL.LLLL.L.LLLLL...LLL.LLL.LLLLLLLL.LLLLLLLL.LLLLLLL",
    "LLLLL.L.LLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLLLLLLLLLLL",
    "LLLLL.LLLLL..LLLLLLLLL.L.LLL.LLL.L.LLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLL.",
    "LLLLLLLLLLLL.LLLLLLLL..LLLLLLLLLLLLLLLLL.LLLLL.LLLL.LLLLLLLL.LLLL.LLLLLLL.LLLL.LLLLLLLL.LLLLLLL",
    "LLLLL.LLLLLL.LLLL.LLLL.LLLLL.LLLLLLLLLLL.LLLLL.LLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLL",
    "...L..LL.L......L....LLL....L.L.LL..L.L..L.LL..L..L.L......L...L.L..L..LL....L..L..LL...LL.....",
    "L..LL.LLLLLL.LLLLLLLLLL.LL.L.LLLLL.L.LLL.LLLLLL.LLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLL.LLLLL.LLLLLLLLLLLLL.LLLL..LL.LLLLLLLL.LLLLLLLL.LLLLLLL",
    "LLLLLLLLLLLL.L.LLLLLLL.LLLLL.LLLLLLLLLLL.LLLLL.LLLL.LLLLLLLL.LLLL.LLLLLLL.LLLLLLLLLLLLL.LLLLLLL",
    "LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLL.LLLLLLL.LLLLLLLLLLL..LLLLLLLLLLLLL.LLLLLLL",
    "LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLL.LLLL.LLLLLLLL.LLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLL.LLLLLL.LLLL.L.LLL.LL.LLLL.LLLLLLL.LLLLLLLLLLLLL.LLLLLLL",
    "LLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLLL..LLLLLLLLLLLLLLLLLL.LLLL.LLLLLLL.LLLL.LLLLLLLLLLLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLL.L.LLLL.LLLLLLLL.LLLL.LLLLLLLLLLLL.LLLLLLLL.LLLLLLL",
    "LL..L.L.L.L..LL...LL....L.L..L..LLL..L.LL.L.LLLL..L.L.L..L...L.....L..LL........L...LL..L.L.LL.",
    "LLLLL.LLLL.L.LL.LLLLLL.LLLLLLLLLLLLL.LLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.L.LLLLLLLL.LLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLL.LLLLL.LLLLLL.LLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLL",
    "LLLLL.LLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLL.LL.L.LLLLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL",
    "LLLLL.LLLLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLL..LLLL.LLLLLLL.LLLL.LLLLLLLL.LLLLLLL",
    "LL.L..L..L.....LL......L.......LLLLL..L.L.LL...L......L.L..L.L.L........L..L.L.L..LLLL....L....",
    "LLL.L.LLLLLLLLLLL.LLLL.LLLLL..LLLLLLLLLLLLLLLL.LLLL.LLLLLLLL.LLLL.LLLLLLL.L.LLL.LLLLLLL.LLLLLLL",
    "LLLLLLLLLLLL.LLLLLLLLL.LLLLLLL.LLL.LLLL..LLL.LLLLLL.LLLLLLLL.LLLL.LL.LLLLLLLLLLLLLLLLLL.LLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLLLLL.LL.LLLLLLLLLLLLLLLLLLLLLL..LLLLLLL.L.LLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLLL.LLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLL.LL.LLLLL.LLLLLLL",
    "LLLLL.L.LLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLLLLLLL.LLLL.LLLLLLLL.LLLL.LLLLLLL.LLLL.LL.LLLLL.LLLLLLL",
    "LLLLL.LLLLLLLLLLLLLL.L.LLLLL.L.LLL.LLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
    "LLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLL.LLLLL.LL.L.LLL.LLLLLLLLL.LLLLLLL.LLLL.LLLLLLLL.LLLLLL.",
    "LLLLL.LLLLLLLLLLLL.LLL.LLL.L.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLL..LLLL.LLLLLLLL..LLLLLL",
    "LL.LL..L......L...L.....LL...L......L..L..LL...LL..L.L.....L.L...L...........LL...L.L.L..L.L.L.",
    "LLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLL.LLLL.LLLLLLLL.LLLL.LLLLLLL.LLLL.LLL.LLLL.LLLLLLL",
    "LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLL.L.LLL..L.LLLLL.LLLLLLLLLLLLL.LLLLLLL",
    "LLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLL.LLLL.LLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLL",
    "LLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLL..LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLL.LLLL..LLLLLLL.LLLLLLL",
    "LLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLL.LLL.LL.LLLL",
    "L....L..L..L...LL.L....L..LL.LL..L....L.L.....LL..........L...L...L..L.L.........L....L..L.....",
    "LLLLL.LLLL.LLLLL.LLLLL..LLLL.LLLLL.LLLLLLLLLLLL.LLLLLLLLLLLL.LLLL.L.LLLLLLLLLL.LLLLLLLLLLL.LLLL",
    "..LLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLL.LLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLL.LLLLLLL",
    "LLL.L.LLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLL.LLLLL.LLLL.LLLLLLLL.LLLL.LLLLLLL.LLLL.LLLLLLLLLLLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLL.L.LLLL.LLLLLLLLLLLLLLLL",
    "L.........LL.L..L.L....L.LLLL...L.L.....LLLL.........LL..LL....L...L..L.L...LL..LL...L.L.L..L.L",
    "LLLLL.LLLLLL..LLLLLLLL.LLL.L.LLLLL.LLL.L.LLLLL.L.LL.LLLLLLLL.LLLL.L.LLLLL...LL.LL.LLLLLLLLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLL.LL.LLLLLLLLLLLLLLLLLLLLL",
    "LLLLLLLLLL.L.LLLLLLLLL.LLLLL.LLL.L.LLLLLLLLLLL.LLLL.LLLLLLLL.LLLLLLLLLLLL.LL.L.LLLLLLLL.L.LLLLL",
    "LLLLL.LLLLLL.LLLLLLLLLLLLLL..LLLLL.LLLLL.LLLLL.LLLL.LLLLLLLL.LLLLLLLLLLLL.LLLL.LLLL.LLL.LLLLLLL",
    "LLLLLLLLLLL..LLLLLLLLL.LLLLL.LLLLLLLLLLL.L.LLL.LLLL.LLLLLLLL.LLLL.LLLL.LL.LLL.LLLLLLLLLLLLLLLLL",
    "LLLLL.LLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLL.LLLLLLLLL..LLLLLLLL.LLLL.LLLLLLL.LLLL.LLLLLLLL.LLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLL.LL.LLLLLLLLLLLLLL.LLLLL.LLLL.LLLLLLLL.LLLL.LLLLLLL.LLLL.LLLLLLLLLLLLLLLL",
    ".LLLL.LLLLLL.LLLLLLLLL.LLLLL.L.LLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLLLL.LLLLLLLL.LL.L.LLLLLLL",
    "LLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLL.L.L..LLLLLLLLLLLLLLLL",
];

// Part 1
let layouts = [input];

for (let i = 0; layouts[layouts.length - 1]!.join("") !== layouts[layouts.length - 2]?.join(""); ++i) {
    const newLayout = [];

    for (let y = 0; y < input.length; ++y) {
        let newRow = "";

        for (let x = 0; x < input[0]!.length; ++x) {
            const adjacentSeats = [
                layouts[layouts.length - 1]![y - 1]?.[x - 1] ?? ".",
                layouts[layouts.length - 1]![y - 1]?.[x + 0] ?? ".",
                layouts[layouts.length - 1]![y - 1]?.[x + 1] ?? ".",
                layouts[layouts.length - 1]![y + 0]?.[x - 1] ?? ".",
                layouts[layouts.length - 1]![y + 0]?.[x + 0] ?? ".",
                layouts[layouts.length - 1]![y + 0]?.[x + 1] ?? ".",
                layouts[layouts.length - 1]![y + 1]?.[x - 1] ?? ".",
                layouts[layouts.length - 1]![y + 1]?.[x + 0] ?? ".",
                layouts[layouts.length - 1]![y + 1]?.[x + 1] ?? ".",
            ];
            const currentSeat = adjacentSeats.splice(4, 1).join("");

            if (currentSeat === "L" && !adjacentSeats.includes("#"))
                newRow += "#";
            else if (currentSeat === "#" && adjacentSeats.filter((z) => z === "#").length >= 4)
                newRow += "L";
            else
                newRow += currentSeat;
        }
        newLayout.push(newRow);
    }
    layouts.push(newLayout);
}
console.log(layouts[layouts.length - 1]!.join("").split("")
    .filter((x) => x === "#").length);

// Part 2
layouts = [input];
const width = input[0]!.length - 1;
const hieght = input.length - 1;

for (let i = 0; layouts[layouts.length - 1]!.join("") !== layouts[layouts.length - 2]?.join(""); ++i) {
    const newLayout = [];

    for (let y = 0; y < input.length; ++y) {
        let newRow = "";

        for (let x = 0; x < input[0]!.length; ++x) {
            const adjacentSeats = [];

            /**
             * Top Left: 0
             * Top Middle: 1
             * Top Right: 2
             * Middle Left: 3
             * Middle Middle: 4
             * Middle Right: 5
             * Bottom Left: 6
             * Bottom Middle: 7
             * Bottom Right: 8.
             */

            // Top Left
            for (let j = 1; j <= Math.min(x, y); ++j) {
                const pos = layouts[layouts.length - 1]![y - j]?.[x - j];

                if (pos !== ".") {
                    adjacentSeats.push(pos ?? ".");
                    break;
                }
            }

            if (adjacentSeats.length === 0)
                adjacentSeats.push(".");

            // Top Middle
            for (let j = 1; j <= y; ++j) {
                const pos = layouts[layouts.length - 1]![y - j]?.[x];

                if (pos !== ".") {
                    adjacentSeats.push(pos ?? ".");
                    break;
                }
            }

            if (adjacentSeats.length === 1)
                adjacentSeats.push(".");

            // Top Right
            for (let j = 1; j <= Math.min(width - x, y); ++j) {
                const pos = layouts[layouts.length - 1]![y - j]?.[x + j];

                if (pos !== ".") {
                    adjacentSeats.push(pos ?? ".");
                    break;
                }
            }

            if (adjacentSeats.length === 2)
                adjacentSeats.push(".");

            // Middle Left
            for (let j = 1; j <= x; ++j) {
                const pos = layouts[layouts.length - 1]![y]?.[x - j];

                if (pos !== ".") {
                    adjacentSeats.push(pos ?? ".");
                    break;
                }
            }

            if (adjacentSeats.length === 3)
                adjacentSeats.push(".");

            adjacentSeats.push(layouts[layouts.length - 1]![y]?.[x]);

            // Middle Right
            for (let j = 1; j <= width - x; ++j) {
                const pos = layouts[layouts.length - 1]![y]?.[x + j];

                if (pos !== ".") {
                    adjacentSeats.push(pos ?? ".");
                    break;
                }
            }

            if (adjacentSeats.length === 5)
                adjacentSeats.push(".");

            // Bottom Left
            for (let j = 1; j <= Math.min(x, hieght - y); ++j) {
                const pos = layouts[layouts.length - 1]![y + j]?.[x - j];

                if (pos !== ".") {
                    adjacentSeats.push(pos ?? ".");
                    break;
                }
            }

            if (adjacentSeats.length === 6)
                adjacentSeats.push(".");

            // Bottom Middle
            for (let j = 1; j <= hieght - y; ++j) {
                const pos = layouts[layouts.length - 1]![y + j]?.[x];

                if (pos !== ".") {
                    adjacentSeats.push(pos ?? ".");
                    break;
                }
            }

            if (adjacentSeats.length === 7)
                adjacentSeats.push(".");

            // Bottom Right
            for (let j = 1; j <= Math.min(width - x, hieght - y); ++j) {
                const pos = layouts[layouts.length - 1]![y + j]?.[x + j];

                if (pos !== ".") {
                    adjacentSeats.push(pos ?? ".");
                    break;
                }
            }

            if (adjacentSeats.length === 8)
                adjacentSeats.push(".");

            const currentSeat = adjacentSeats.splice(4, 1).join("");

            // eslint-disable-next-line @typescript-eslint/no-array-delete
            delete adjacentSeats[4];

            if (currentSeat === "L" && !adjacentSeats.includes("#"))
                newRow += "#";
            else if (currentSeat === "#" && adjacentSeats.filter((z) => z === "#").length >= 5)
                newRow += "L";
            else
                newRow += currentSeat;
        }
        newLayout.push(newRow);
    }
    layouts.push(newLayout);
}
console.log(layouts[layouts.length - 1]!.join("").split("")
    .filter((x) => x === "#").length);
