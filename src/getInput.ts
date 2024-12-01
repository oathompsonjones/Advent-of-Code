import { readFile } from "fs/promises";

export default async (): Promise<string> => {
    const fullPath = new Error().stack!.split("\n")[2]!.split("/");
    const year = fullPath[fullPath.length - 2]!;
    const puzzle = fullPath[fullPath.length - 1]!.split(".")[0]!;

    return readFile(`data/${year}/${decodeURIComponent(puzzle)}.txt`, "utf8");
};
