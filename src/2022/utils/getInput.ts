import fs from "fs/promises";

export default async (): Promise<string> => {
    const [puzzle] = new Error().stack!
        .split("\n")[2]!
        .split("/")
        .slice(-1)[0]!
        .split(":")
        .slice(0, 2)
        .join(":")
        .split(".");
    const inputPath = `${__dirname.replace("Utils", "Inputs")}/${puzzle}.txt`;
    const inputFile = await fs.readFile(inputPath, { encoding: "utf-8" });

    return inputFile;
};
