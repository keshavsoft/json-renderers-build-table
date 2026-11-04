import twoDimensional from "json-transformer-funcs-two-dimensions";

import spec from "../spec.json" with { type: "json" };
import base from "./base.json" with { type: "json" };

import twoDimensionalInstructions from "./instructions/double.json" with { type: "json" };

import writePath from "./writePath/index.js";

// 1. Keep the input, table structure, and templates together as the build context.
const registry = { data: {}, base, spec };
const functions = {
    twoDimensional
};

const runInstructions2 = instructions => {
    instructions.forEach(instruction => {
        const result = functions[instruction.func](
            registry.data.columns,
            registry.data.data,
            spec
        );
        writePath(registry, instruction.destinationPath, result);
    });
};

// 3. Complete the table and return its JSON specification.
const startFunc = data => {
    registry.data = data;

    runInstructions2(twoDimensionalInstructions);

    return base.children;
};

export default startFunc;