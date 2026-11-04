import fromCollection from "json-transformer-funcs-one-dimension";
import twoDimensional from "json-transformer-funcs-two-dimensions";
import { runSingleInstructions } from "json-instruction-single";
import { runDoubleInstructions } from "json-instruction-double";
import spec from "../spec.json" with { type: "json" };
import base from "./base.json" with { type: "json" };
import singleInstructions from "./single.json" with { type: "json" };
import doubleInstructions from "./double.json" with { type: "json" };
import actions from "../../actions/index.js";

const functions = { fromCollection, twoDimensional };

const startFunc = (config = {}, showLog = false, returnLog = []) => {
    const columns = config.columns || config.inColumns || [];
    const data = config.data || config.inData || [];
    const options = config.options || config.inOptions || {};
    const localBase = structuredClone(base);
    const registry = {
        data: { columns, data },
        base: localBase,
        spec,
        ...options
    };
    const instructionOptions = {
        functions,
        showLog: config.showLog ?? showLog,
        returnLog
    };

    runSingleInstructions(singleInstructions, registry, instructionOptions);
    runDoubleInstructions(doubleInstructions, registry, instructionOptions);
    actions({ inOptions: options, inBase: localBase });

    return localBase;
};

export default startFunc;
