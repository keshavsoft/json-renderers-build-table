import fromCollection from "json-transformer-funcs-one-dimension";

import { resolvePath } from "json-transformer-funcs";

import spec from "../spec.json" with { type: "json" };
import base from "./base.json" with { type: "json" };

import singleInstructions from "./instructions/single.json" with { type: "json" };

import writePath from "../writePath/index.js";

// 1. Keep the input, table structure, and templates together as the build context.
const registry = { data: {}, base, spec };
const functions = {
    fromCollection
};

// 2. Apply each instruction: read source, build result, write destination.
const runInstructions = instructions => {
    instructions.forEach(instruction => {
        const source = resolvePath(registry, instruction.sourcePath);

        if (source) {
            const result = functions[instruction.func](source, spec[instruction.templateKey]);
            writePath(registry, instruction.destinationPath, result);
        } else {
            console.log("   !instruction : ", instruction);
            console.log("   !source : ", source);
        };
    });
};

// 3. Complete the table and return its JSON specification.
const startFunc = data => {
    registry.data = data;

    runInstructions(singleInstructions);

    return base;
};

export default startFunc;