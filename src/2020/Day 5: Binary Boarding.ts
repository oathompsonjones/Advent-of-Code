// https://adventofcode.com/2020/day/5
/* eslint-disable max-lines */

const input = [
    "FFBFBBBRLR",
    "BBFFBFFRRR",
    "BFFFFBBRRR",
    "FFBFFBBLRR",
    "FFBFBFBLLL",
    "FFBFFBFLRR",
    "BFFFBBBLLR",
    "FFBFBFFRLR",
    "FFBFFFBRRR",
    "FFBFFFFRRL",
    "BFFBBFFLRL",
    "FFFBFFBLRR",
    "FBBFBFFRLR",
    "BFFFBFBRLR",
    "BFBFFBBRLR",
    "FFBBFBBLRR",
    "BFBBBFBRLR",
    "FFBBBFBRRL",
    "FFBFBBBRRR",
    "BFBBBBFRLL",
    "FBBFFFBRRR",
    "BFFBFBFRRR",
    "FFBFBBBLRL",
    "FBFFFFBLLR",
    "BBFFBFBRLL",
    "FBBBFFBLRL",
    "FBBBFFFRRR",
    "BFBFFBFRLR",
    "BFFFFBBLLL",
    "FBFFBBFRLR",
    "BFBBBBBLLR",
    "FFFFBBFLRR",
    "FBFBFBFRLR",
    "FBFFBFFLRR",
    "FFBFFBFRRR",
    "BFFBFBFRLL",
    "BFFFBBBLRR",
    "FFBBFFFLLR",
    "FBBBFBBLRR",
    "FFBBFBFRRL",
    "BFFBFFBRLL",
    "FBFFFBBLLR",
    "BFFFBFBLRL",
    "FFFBFBBRRL",
    "FBBBFBBRLL",
    "BFFBBBFRLL",
    "FBFFFFBLRR",
    "FFFBBBBLRR",
    "FFBFFBBLLL",
    "FBFBFBBRRL",
    "FFFBFBFRLR",
    "FBBFFFFRRR",
    "BFFFBBBRLR",
    "FBBBBFFLRR",
    "FFFFBBFLLR",
    "BFFBBBFRRR",
    "FBBBFFBRLL",
    "FBBBFBFLLR",
    "FBFBBFFRRL",
    "FFFBBFFLLR",
    "FFBFBFFLRL",
    "BFBBBFFRRL",
    "BFFBFBFRRL",
    "FFFBFBBLLL",
    "BFFBFFBLLR",
    "FBFBBFFLLL",
    "FFBBFBFLRR",
    "FFFBBBFRLR",
    "FBBBFBFRLL",
    "FBBBBBFLRR",
    "FFBFBFBRLR",
    "BBFFFFBRLR",
    "BFFBFBBRRL",
    "FBFFFFBRLL",
    "FFBFBFBLRR",
    "FBBBBFFRRR",
    "FBFBBBFLRL",
    "FBBBFFFLLL",
    "BFBFBFFRLL",
    "FBFFFBFLLR",
    "BFBFFBFLRL",
    "BFBBBFBLRR",
    "FBBFFBBRLR",
    "BFFFBBBRLL",
    "FBFBBBFLLL",
    "BFFFBFBLRR",
    "BFBBBFFRLR",
    "FFBBFFFRLL",
    "FFFBFBFRRL",
    "FBBFBFBLLR",
    "FBFFBFFLRL",
    "FBBFFBBLLR",
    "FBBBFBBRLR",
    "FBBBFBBLLR",
    "FBBFBBBLLL",
    "BFFFFBBRRL",
    "FBBFFBBRRR",
    "BFBFFBBLLR",
    "FFBBBBFLLR",
    "FFBFBFFLRR",
    "BBFFFBFRLL",
    "FFBFBBBLLL",
    "BFFFFBFRRL",
    "FBFBBBBLLL",
    "BFBBFFBLRR",
    "BFBBBFBRLL",
    "FBFFFFFLLL",
    "FBFBBFFLRL",
    "FFFBBFBLRL",
    "BFFFBFBLLR",
    "FBFBFFFRLL",
    "BBFFBFFLLL",
    "FFFFBBFLLL",
    "BFBBFBBLRR",
    "BFBBFBBRLR",
    "BFBFFFBLLL",
    "FBBBBFBRLL",
    "FFBFBBBLRR",
    "FFFBFBBLRL",
    "BFBFFBBRLL",
    "BFBFBBBRLL",
    "FFBFBBBRRL",
    "FFFBBBBRLR",
    "FFBBBBFLLL",
    "FBFBFBFRLL",
    "BFBFBBBLRL",
    "FFBBFFBRLL",
    "BFFBBFBRLR",
    "FFBBBBFLRR",
    "FFFBBBFLLL",
    "FFBFBBFLRL",
    "BFFBBFFLRR",
    "FFFFBBBLLL",
    "BFBFFFFRRL",
    "FBFFBBBRRR",
    "FBBFFBFRRR",
    "BFFFBFFRRR",
    "FFBBBFBRLL",
    "BBFFFBBLLL",
    "FFFFBBBRRR",
    "FFFBBFBRRL",
    "BBFFFBBLRR",
    "FBBFFFFLLR",
    "BFBFBBBRLR",
    "FFBFFBFRLR",
    "BFBFBFBLRR",
    "FBBFFBFLLL",
    "FBFBBFBLLR",
    "FBFFBBFRRR",
    "BFFFBBFRLR",
    "BFFFFFFRRR",
    "FFFBFFFLRR",
    "FBFBBFBRLR",
    "FFFBFBFLRL",
    "FFFBFFBLRL",
    "BFBFBFBRRR",
    "FFFBFFBRRL",
    "FFBBFFBRLR",
    "BFFBBFBLLR",
    "FFBFFFFLLR",
    "FBBBBBFLRL",
    "FBBBBFFLRL",
    "BFBFFBFLRR",
    "FFFBBBBLLL",
    "FFFBBFBLRR",
    "BFBBBFFLLR",
    "FBFBBFFLRR",
    "BBFFFBFRRR",
    "FBFBBFBLRL",
    "FFBBFFFLRL",
    "BFBFBFFLRR",
    "BFBFBFBRLL",
    "FBFBBBFLRR",
    "FBFFFFFLRR",
    "BFFFBBBRRL",
    "BFBBFFBRRR",
    "BBFFFBFLRL",
    "BFFBFFFRLL",
    "BBFFFBFLRR",
    "BFFBFBBRRR",
    "FBFFFBFLRL",
    "FBFBFBBLLR",
    "FFFBBFBRLR",
    "BFBBBFFRRR",
    "FBFBFBFRRL",
    "FBFFBFBLLR",
    "BFFBFBFLRL",
    "FBBBBFBLLL",
    "FFFBFBBLLR",
    "BFBFFFFRLR",
    "FBBBBBBLLL",
    "FBBBBFBLLR",
    "FFBFBBFRLL",
    "BFBBFFFLRL",
    "FFFBFFBLLL",
    "BFBFFFBLRL",
    "FBBBBFFRLL",
    "BFBBFFFRRL",
    "BFBBBBFRRR",
    "BFBBBBFLLL",
    "BFFBFBBLLL",
    "FBFBFFFRRR",
    "BFBBFFFRLL",
    "FBBFBBBRRR",
    "BFFFFFBLRL",
    "FBFFFBFLRR",
    "FBFBFBBLLL",
    "BFBBFFBRLL",
    "BFFBBFFRRL",
    "FBFBFFFLLR",
    "FBFFFBBRRL",
    "BFBFBBFRRL",
    "BBFFFFFLLR",
    "BFBFBFFRRR",
    "FFBFFFFLRL",
    "FBBBFBBLRL",
    "FFBBBFFLRR",
    "FBBBBFBRRL",
    "FFFBBBFRRL",
    "BFBFBFFLLL",
    "BFFBFBFRLR",
    "BFBBFBFRLR",
    "FBFBFBBRLL",
    "FBFFBBBRRL",
    "BBFFFFBLRR",
    "BFFFFFBRLR",
    "FBBFFBFLRL",
    "BFBFFBFRLL",
    "BFFFBBFLRL",
    "FBBBFBFRRR",
    "BBFFFFFLLL",
    "FBFBBFBRLL",
    "BFBFBFBLLL",
    "FBBFFBFRLR",
    "FBBBFBFLRR",
    "FBFFFFFLLR",
    "BBFFBBFLLL",
    "FFBFBBFLRR",
    "FFBBBBFLRL",
    "BFFFFBBLRL",
    "BFFFFFBRRL",
    "FBFFFFBRLR",
    "FFBBFBBRRR",
    "FFBFBBFLLR",
    "FBFBBBBLLR",
    "BFFFBFFLRR",
    "BFFBBBFRRL",
    "FBBBBBBRRL",
    "FBBBBFBRLR",
    "BFBFBBFLLL",
    "BFFBBBFRLR",
    "BFBBFBBRLL",
    "FBBBBBBRLL",
    "FFBBFFFRLR",
    "FFFBBFFRLL",
    "FBFBBBFRLL",
    "FBBFFBFLRR",
    "BFBBFFBRLR",
    "BFFBBFBRRR",
    "FFBFBBFRRL",
    "FFBFBBFLLL",
    "FFFBBFBLLL",
    "FBFFFBFRLL",
    "FFBBBFFRLR",
    "FFFBFBBLRR",
    "FBBFFBFLLR",
    "BBFFFBFLLL",
    "BBFFFBBRLR",
    "FFBBBFFLRL",
    "FBFBBFBRRR",
    "BFFFBBFLRR",
    "FBBBFFFRLL",
    "BFFBFFBRRL",
    "FBBBBBBLRR",
    "BFFFBFFRRL",
    "FFBFBBBRLL",
    "FBFBBFFLLR",
    "BFFFBBBLLL",
    "BFBFFFFLLR",
    "FBBBBBBLLR",
    "FFBBFBFRRR",
    "FBFBFBFLLL",
    "BFBFBFBLLR",
    "FFBBFBBLRL",
    "FFFFBBBLRR",
    "BFFBFBBRLR",
    "BFFBBBBRRL",
    "FBFFBFFLLL",
    "BFBBBBBRRR",
    "BFBFFFFLRL",
    "FFFBBBBRLL",
    "BFFFBFFLLR",
    "FBBFBFFLRR",
    "BFBFFBFLLR",
    "FBBBBFBRRR",
    "FFBFFBBRRR",
    "FFBFFFFRRR",
    "FBBFBFBLRR",
    "BFBFBBFRRR",
    "FBFFFBFRRR",
    "FBFFBFFRRR",
    "BFFFBBFLLL",
    "BFBFBBFLRR",
    "BFFBFFFRLR",
    "FFFBFFBLLR",
    "FFFBFFFLLR",
    "FBBBBBFRRL",
    "FBBFBBFRRL",
    "BFFBFFBRLR",
    "BBFFBFFRLR",
    "FFBBFFFRRR",
    "FBFFFFFRRR",
    "BBFFFBBLLR",
    "BBFFBBFLRL",
    "FFBBBBBLLR",
    "FFBFBBFRLR",
    "BFFBFFBRRR",
    "BFBFFFBRLL",
    "FFBBBBFRLR",
    "BFFFFFFLRL",
    "BFBBFBBRRL",
    "BFFBBFBLRR",
    "FFFBBBFLRL",
    "BFBBFBBRRR",
    "FFBBFFFLLL",
    "FFFBBFFRLR",
    "FBFBFFBLRR",
    "BFFFFBFRRR",
    "BBFFBFBLLL",
    "BFFFFBFLRL",
    "BFFBBBFLLR",
    "BFFFBFFRLR",
    "FBFBBBBRLL",
    "BBFFBFFRLL",
    "FBFFBBFLRL",
    "FFBFFBBRRL",
    "BFFFFBBRLL",
    "FFFFBBBLRL",
    "FFBFBFBLLR",
    "BFBFBBBLLL",
    "FBBFFBBLRR",
    "FFBBBBFRRR",
    "FFBBBFFLLL",
    "BFBBBFBLLR",
    "FFFFBBFRRR",
    "BFFBBBBRRR",
    "FFBBFFBLLL",
    "FBFFFFFLRL",
    "FBFBBBFLLR",
    "FFBBFFFLRR",
    "FBFBFBFLRR",
    "BFFBFBBLRL",
    "FBFFFFBLLL",
    "FFBBBBBRRL",
    "FBBBBFFLLL",
    "BBFFFFBLLL",
    "BFFBBFBRRL",
    "FFBBBFFLLR",
    "FBBFBFBRRR",
    "BBFFFBBRRR",
    "FBFBFFBRLL",
    "FBFFBFBLRR",
    "BFBFFBBRRL",
    "FBBFBBFLRR",
    "BBFFFFBLRL",
    "BFFBBBBRLR",
    "BFBFFBBRRR",
    "FBBFFFBRLR",
    "FBBFBBBLRL",
    "FBFBFBFRRR",
    "FFBFFFBRLR",
    "FFBBFBFLRL",
    "FFBBBBFRRL",
    "FFBBBFBLRR",
    "BFFBBFFLLR",
    "FFFFBBBRLL",
    "BFBBFBBLLR",
    "BBFFFFBRLL",
    "FBBFFFFLRR",
    "BFFBFBFLLR",
    "FBBBFBFLRL",
    "FBBFFFFLLL",
    "BFFBFFFLRR",
    "BFBBFBFLRR",
    "BFFBFBBRLL",
    "FBFFBBBLRL",
    "FBBBFFBLLL",
    "FBBBFFFLRL",
    "BFFBBBBLLL",
    "BFFFBFFLLL",
    "FFFBFFBRRR",
    "FFBFFFBLRL",
    "FBBFBBBLRR",
    "FFFBBFBRRR",
    "FBBFBFFLLL",
    "BFBFBBFLRL",
    "BFFBFFFRRL",
    "BFBFBBBLRR",
    "FFBFFBBRLL",
    "FFBFBFFLLR",
    "BFBBBBBRRL",
    "FBFFBFFRLR",
    "BBFFBFBLRL",
    "FFFBBFFLRR",
    "BBFFBBFLLR",
    "FFFBBBBRRR",
    "FFBFFBFLLR",
    "BFFFFBFRLR",
    "FFBFFFFLRR",
    "BBFFFFFRLR",
    "FBFBBBBLRL",
    "FBFFBBFRRL",
    "BFBBFBFRRR",
    "FBBBBFFLLR",
    "FFBBBFFRRR",
    "FBBFBFBRRL",
    "BFBBFBBLLL",
    "BBFFFBBRLL",
    "FBBFBFFRRL",
    "FBBBBBFLLL",
    "BFBBBFFLRR",
    "BFFFFFFRRL",
    "BBFFFBFRLR",
    "BFBFFFBLRR",
    "FBFBFFFLRR",
    "BBFFFBBLRL",
    "BFFFFBBRLR",
    "BFFBFBBLRR",
    "BFBFFFBRLR",
    "BFFFFBBLRR",
    "BBFFFFBRRL",
    "BFBBBFBRRR",
    "BFBBBBBLRL",
    "FFFBBBFLRR",
    "BFFBBFFRLL",
    "FBFFBFBRRR",
    "FFFBBFFLLL",
    "FFBFFBFRRL",
    "FBFFBFFRLL",
    "BFBBBFFLLL",
    "BFFFBFBRRL",
    "FFFBFFFRRL",
    "FFFBFBFLLL",
    "FFFBBBBRRL",
    "BFBBFFBRRL",
    "BFBFFBFLLL",
    "BBFFFBFRRL",
    "BFBFBFFRLR",
    "FFFBFBBRLR",
    "BFBFBFBLRL",
    "BFFBFFFLLR",
    "FBFBBBFRRL",
    "FBFBBBBRLR",
    "BFFBBBBLRL",
    "BFBBFBFLLL",
    "FFFBFFBRLL",
    "FBBFFFBLRR",
    "FFFFBBFRLR",
    "BFBFFFFRRR",
    "BFBBFBFLRL",
    "FFBFBFFRRR",
    "BFBBBBBRLL",
    "FBFFFFFRLR",
    "FBFBFFBLLL",
    "FFBBFFBRRR",
    "FFFBBBFRRR",
    "FBFFBBFLLR",
    "BFBBFFBLLL",
    "BFBBFFFRRR",
    "FBFBBFFRLL",
    "FFBBBBBLRR",
    "FBFBFBBLRR",
    "FBFFFBFRRL",
    "FBBFFFBRRL",
    "BFFBBBBLLR",
    "BFBBFFFRLR",
    "FBBBFFFLRR",
    "FBBFBBBRLR",
    "FFFBFBFLLR",
    "FFBFBFBRRR",
    "BFBFBBBRRL",
    "FBFFBFFLLR",
    "FFFBFFBRLR",
    "BFBFBBFLLR",
    "FBBFFFBLLL",
    "FBFFBFBRLL",
    "BFFFBBFRRL",
    "FBBBBBFRRR",
    "BBFFFFFRRL",
    "BFBFFFFLLL",
    "FBFFFFBRRR",
    "BFFFFFFRLR",
    "BFFBFFBLRL",
    "BFBBFBFRRL",
    "BFBBFFFLLL",
    "FFBBBFBRLR",
    "FFFBFBBRLL",
    "FBFFFBBLRR",
    "BFFFFFBRRR",
    "BBFFBFBRRL",
    "FFFFBBFRLL",
    "BFBBBBFRLR",
    "BFBBBFBRRL",
    "BFBFBFBRLR",
    "FFBFBFBLRL",
    "BFBFFFFRLL",
    "FBFFBBBRLR",
    "FBFBFFBLLR",
    "FFBFFFBLLR",
    "FBFBBBBRRR",
    "FFFBBBFLLR",
    "BBFFFFFRRR",
    "FBBFBBFRRR",
    "FBBFBBBRLL",
    "BFFFFFBLLR",
    "BFFFBBFRRR",
    "FBFFFFBLRL",
    "FFFBFBFRRR",
    "FFBFFFBRLL",
    "FBBBBBFLLR",
    "FFBFFFBLLL",
    "BFFFFBBLLR",
    "FBFFBFBLRL",
    "FFBBFFBRRL",
    "BFFBFFBLLL",
    "FBBBFBBRRR",
    "BFFBBFBLLL",
    "FBFBBBFRLR",
    "FFBBFBBLLL",
    "FFBBFFBLRR",
    "BFFFFFFLRR",
    "FFBFFBBRLR",
    "FBBBBBFRLL",
    "FFBBFFBLLR",
    "FBFFBBBLLR",
    "FBFBFFBRRL",
    "BFFBBBFLLL",
    "FFBFFFFRLR",
    "FBFBFBBRLR",
    "FBBFFFBLRL",
    "FFBFBFBRRL",
    "FBFFFBFRLR",
    "FBBBBBBLRL",
    "FFFFBBBRRL",
    "BFBBBBFLLR",
    "BBFFBFBRLR",
    "FBBBBFFRLR",
    "BFFFFFFRLL",
    "FBBFFBBLRL",
    "FBFBFBBLRL",
    "FBFBFBBRRR",
    "BFBBBBFRRL",
    "BFBBBBBRLR",
    "FFFBBFBRLL",
    "FBBFFBBRLL",
    "BFFFFFFLLL",
    "FBBBFBFLLL",
    "FBBFBBFLRL",
    "FFBBBBBRRR",
    "BFBFFBBLRL",
    "BFFBFBBLLR",
    "FBBBBFBLRR",
    "BFBBFFBLRL",
    "BBFFFFBLLR",
    "BFFFBFBRLL",
    "FBBBBFBLRL",
    "BFBFBFFLLR",
    "FBBBFBBLLL",
    "FBBFFBFRRL",
    "BBFFBFFLRR",
    "FBFBFBFLLR",
    "FBBFBBFLLL",
    "FBFFBFFRRL",
    "FFBBBBBRLR",
    "FBBBFFBLRR",
    "FBBBBBFRLR",
    "FBFBBBBRRL",
    "BBFFFBFLLR",
    "FBFBBFBRRL",
    "BFFFFFBLRR",
    "FFFBFFFLLL",
    "FBFBFFFLRL",
    "FFBFFBFLRL",
    "BFBFFBFRRR",
    "FBFBFFBLRL",
    "FFBFFBBLRL",
    "FFBBFBFLLR",
    "FBFBBFFRLR",
    "FFBFBFFRLL",
    "BFBFFBFRRL",
    "BFFFFFBRLL",
    "BFBBBFFLRL",
    "BBFFBFFLLR",
    "BFFFBBFLLR",
    "BFFBBBFLRR",
    "FBBFFFFRRL",
    "FFBBBFBLLR",
    "BFBBBFBLLL",
    "BFFFFFFLLR",
    "FBBFBBFLLR",
    "FBFBBFBLRR",
    "FFBFBBFRRR",
    "BFFBBFFRLR",
    "BFFBBBFLRL",
    "FBFFBFBRLR",
    "BFBBFFBLLR",
    "BFBFFFFLRR",
    "FFBBBBBRLL",
    "FBBBFBBRRL",
    "BFFBBFFRRR",
    "FBFFBBBRLL",
    "FFBFFFFRLL",
    "BFBFBFBRRL",
    "FBBFFBFRLL",
    "BFFFBFFRLL",
    "BFBBBBBLLL",
    "FBBBFFBLLR",
    "FFFBFBFLRR",
    "FFFBBFFRRL",
    "FFBBBFBLRL",
    "BFFBFBFLLL",
    "FFBBBFFRLL",
    "FFBFFBFLLL",
    "FBBBFBFRLR",
    "FFBBFBFLLL",
    "BFBBFFFLLR",
    "FBBBFFFRLR",
    "FBFFFFBRRL",
    "FFFBFBBRRR",
    "FBFFBBFLRR",
    "BBFFFFFRLL",
    "FBFFBBBLRR",
    "FBFBFFBRRR",
    "FBFFFFFRLL",
    "FFBFFFBRRL",
    "FFFFBBFLRL",
    "BFBBFBBLRL",
    "FFBFFBBLLR",
    "BFBFBBBLLR",
    "FFBBBFBLLL",
    "BBFFBFBLLR",
    "FFFBFFFLRL",
    "FBFFFBBLRL",
    "FBFFFBBRLL",
    "BFFFBFFLRL",
    "FBBBBBBRRR",
    "FBFFFBBLLL",
    "FFFBFFFRLR",
    "FBBFBBBRRL",
    "BFFBBFBRLL",
    "FFFBBFBLLR",
    "FBBBFFBRRL",
    "BFBFBBFRLR",
    "FBFFBFBLLL",
    "BFBFFFBLLR",
    "FFFBBBFRLL",
    "FBFFBBFLLL",
    "FBBBFFFLLR",
    "FBBBFBFRRL",
    "BFBFFFBRRR",
    "BFBFBBFRLL",
    "BFFBFFFLRL",
    "BFFBBBBRLL",
    "BBFFBFFRRL",
    "BFBFBFFRRL",
    "FBBFBBFRLL",
    "FFFBBBBLLR",
    "BFFBFFFRRR",
    "FFFFBBBLLR",
    "BFFBBFBLRL",
    "FBBFFFFLRL",
    "FBBFBFBLRL",
    "FBFFFBFLLL",
    "BFFFFBFLRR",
    "FBFFBBFRLL",
    "FFBBFBBRLR",
    "BFBBBBFLRL",
    "FFFBFBFRLL",
    "FBBFFFBRLL",
    "FFBFFBFRLL",
    "BFFBFBFLRR",
    "FFFFBBBRLR",
    "BFBBFFFLRR",
    "FBFBFBFLRL",
    "FFBBBBFRLL",
    "BBFFBFBLRR",
    "FFBBBFBRRR",
    "BFBBBFBLRL",
    "BFFFFFBLLL",
    "BFFBFFFLLL",
    "FBBBBFFRRL",
    "FFBBFFFRRL",
    "FBBFFBBLLL",
    "BBFFBFBRRR",
    "FBFBFFFRLR",
    "FFBFFFBLRR",
    "FBFBBFBLLL",
    "BFFBBBBLRR",
    "BFFBBFFLLL",
    "FFBFFFFLLL",
    "BBFFFFFLRR",
    "FBBFBFBRLR",
    "BBFFFBBRRL",
    "BFFFFBFLLR",
    "FBBFBFFRLL",
    "BFFBFFBLRR",
    "FFFBFFFRRR",
    "FBFFBFBRRL",
    "FBBFBFFRRR",
    "BFBBBBFLRR",
    "FBBBFFFRRL",
    "FFBBFBBLLR",
    "FFFFBBFRRL",
    "FFBBFBBRRL",
    "BFFFBBBLRL",
    "FBBBFFBRRR",
    "FBBFBFBLLL",
    "FBFBFFBRLR",
    "BFFFBBFRLL",
    "BBFFFFFLRL",
    "BFFFBFBLLL",
    "FFBFBFFRRL",
    "FBFFFBBRRR",
    "FFBBFFBLRL",
    "FBFBBBFRRR",
    "FFBBFBBRLL",
    "FFBBBBBLLL",
    "FFBFBFFLLL",
    "BFBFFBBLLL",
    "FFFBBBBLRL",
    "BBFFBFFLRL",
    "FBFFFFFRRL",
    "FFBFBBBLLR",
    "FBBFFFFRLR",
    "FFBBBFFRRL",
    "FBBFBFFLLR",
    "FBFBFFFRRL",
    "FBBFFFFRLL",
    "BFBBBFFRLL",
    "BBFFFFBRRR",
    "BFBFBBBRRR",
    "FBFFFBBRLR",
    "BFFFFBFRLL",
    "FFBFBFBRLL",
    "FBBFBFBRLL",
    "FBBFBBFRLR",
    "FFFBFFFRLL",
    "BFBBFBFRLL",
    "FBBBFFBRLR",
    "FFFBBFFRRR",
    "FBBFFFBLLR",
    "FBBBBBBRLR",
    "FFBBBBBLRL",
    "FBBFBFFLRL",
    "BFBFFFBRRL",
    "FBFBFFFLLL",
    "FFBBFBFRLL",
    "BFBFFBBLRR",
    "FBFFBBBLLL",
    "FBFBBFFRRR",
    "BFFFBBBRRR",
    "BFBBBBBLRR",
    "FBBFBBBLLR",
    "FFFBBFFLRL",
    "FBBFFBBRRL",
    "FFBBFBFRLR",
    "BFBFBFFLRL",
    "BFBBFBFLLR",
    "FBFBBBBLRR",
    "BFFFFBFLLL",
];

// Part 1
const ids = input.map((seat) => parseInt(seat.slice(0, 7).replace(/F/gu, "0")
    .replace(/B/gu, "1"), 2) * 8 +
    parseInt(seat.slice(7, 10).replace(/L/gu, "0")
        .replace(/R/gu, "1"), 2));

console.log(Math.max(...ids));

// Part 2
const missingIDs = Array(818).fill(0)
    .map((_, i) => i)
    .filter((x) => !ids.includes(x));

console.log(missingIDs);
