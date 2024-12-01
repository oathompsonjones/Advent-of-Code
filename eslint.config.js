// @ts-check
import createConfig from "@oathompsonjones/eslint-config";

export default createConfig({
    configs: [{ rules: { "no-console": "off" } }],
    tsConfig: "tsconfig.json",
});
