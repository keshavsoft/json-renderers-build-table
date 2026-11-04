import twoDimensional from "json-transformer-funcs-two-dimensions";

import spec from "../spec.json" with { type: "json" };
import base from "./base.json" with { type: "json" };
import doubleInstructions from "./instructions/double.json" with { type: "json" };

import runDoubleInstructions from "../../doubleInstruction/index.js";

const registry = { data: {}, base, spec };
const functions = { twoDimensional };

const startFunc = (data, showLog = false, returnLog = []) => {
    registry.data = data;
    runDoubleInstructions(doubleInstructions, registry, functions, spec, showLog, returnLog);
    return base.children;
};

export default startFunc;
