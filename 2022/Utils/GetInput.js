const fs = require("fs");

module.exports = () => {
    const [puzzle] = new Error().stack
        .split("\n")[2]
        .split("/")
        .slice(-1)[0]
        .split(":")
        .slice(0, 2)
        .join(":")
        .split(".");
    const inputPath = `${__dirname.replace("Utils", "Inputs")}/${puzzle}.txt`;
    const inputFile = fs.readFileSync(inputPath, { encoding: "utf-8" });
    return inputFile;
};
