// https://adventofcode.com/2022/day/2
const input = require("../Utils/GetInput")();

// Part 1
const [WIN, DRAW, LOSE] = [6, 3, 0];
const [ROCK, PAPER, SCISSORS] = [1, 2, 3];
const formattedInput = input.split("\n").map((line) => line.split(" "));
const getChoices = (char) => ({
    A: ROCK,
    B: PAPER,
    C: SCISSORS,
    X: ROCK,
    Y: PAPER,
    Z: SCISSORS
}[char]);
const getResult = (opponent, me) => {
    if (opponent === me)
        return DRAW;
    switch (opponent) {
        case ROCK:
            switch (me) {
                case PAPER:
                    return WIN;
                case SCISSORS:
                    return LOSE;
            }
            break;
        case PAPER:
            switch (me) {
                case ROCK:
                    return LOSE;
                case SCISSORS:
                    return WIN;
            }
            break;
        case SCISSORS:
            switch (me) {
                case ROCK:
                    return WIN;
                case PAPER:
                    return LOSE;
            }
    }
    return -1;
};
let myTotalScore = 0;
for (const line of formattedInput) {
    const [opponent, me] = line.map(getChoices);
    const myResult = getResult(opponent, me);
    const myScore = me + myResult;
    myTotalScore += myScore;
}
console.log(myTotalScore);

// Part 2
const getChoiceAndOutcome = (char) => ({
    A: ROCK,
    B: PAPER,
    C: SCISSORS,
    X: LOSE,
    Y: DRAW,
    Z: WIN
}[char]);
const calculateChoice = (opponent, outcome) => {
    if (outcome === DRAW)
        return opponent;
    switch (opponent) {
        case ROCK:
            switch (outcome) {
                case WIN:
                    return PAPER;
                case LOSE:
                    return SCISSORS;
            }
            break;
        case PAPER:
            switch (outcome) {
                case WIN:
                    return SCISSORS;
                case LOSE:
                    return ROCK;
            }
            break;
        case SCISSORS:
            switch (outcome) {
                case WIN:
                    return ROCK;
                case LOSE:
                    return PAPER;
            }
            break;
    }
    return -1;
};
myTotalScore = 0;
for (const line of formattedInput) {
    const [opponent, outcome] = line.map(getChoiceAndOutcome);
    const myChoice = calculateChoice(opponent, outcome);
    const myScore = myChoice + outcome;
    myTotalScore += myScore;
}
console.log(myTotalScore);
