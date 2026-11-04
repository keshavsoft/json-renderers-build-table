import fromCollection from "json-transformer-funcs-one-dimension";

import spec from "../spec.json" with { type: "json" };
import base from "./base.json" with { type: "json" };
import singleInstructions from "./instructions/single.json" with { type: "json" };

import runSingleInstructions from "../../singleInstruction/index.js";

const registry = { data: {}, base, spec };
const functions = { fromCollection };

const startFunc = (data, showLog = false, returnLog = []) => {
    registry.data = data;
    runSingleInstructions(singleInstructions, registry, functions, spec, showLog, returnLog);
    return base;
};

export default startFunc;
