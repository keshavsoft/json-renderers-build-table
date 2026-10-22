import fromCollection from "json-transformer-funcs-one-dimension";
import twoDimensional from "json-transformer-funcs-two-dimensions";

import spec from "../spec.json" with { type: "json" };
import base from "./base.json" with { type: "json" };
import singleInstructions from "./instructions/single.json" with { type: "json" };
import doubleInstructions from "./instructions/double.json" with { type: "json" };

import runSingleInstructions from "../../singleInstruction/index.js";
import runDoubleInstructions from "../../doubleInstruction/index.js";
import insertSerial from "../../actions/insertSerial/index.js";
import insertOptions from "../../actions/insertOptions/index.js";

const functions = { fromCollection, twoDimensional };

const startFunc = (inConfig = {}, showLog = false, returnLog = []) => {
    const localConfig = (inConfig && typeof inConfig === "object" && "inConfig" in inConfig)
        ? inConfig.inConfig
        : inConfig;

    const localColumns = localConfig.inColumns || localConfig.columns || [];
    const localData = localConfig.inData || localConfig.data || [];
    const localOptions = localConfig.inOptions || localConfig.options || {};

    const localBase = structuredClone(base);
    const registry = {
        data: {
            columns: localColumns,
            data: localData
        },
        base: localBase,
        spec
    };

    runSingleInstructions(singleInstructions, registry, functions, spec, showLog, returnLog);
    runDoubleInstructions(doubleInstructions, registry, functions, spec, showLog, returnLog);

    if (localOptions.showSerial || localOptions.serial) {
        insertSerial(localBase, localOptions.serial || {}, showLog, returnLog);
    }

    if (localOptions.showOptions || localOptions.options) {
        insertOptions(localBase, localOptions.options || {}, showLog, returnLog);
    }

    return localBase;
};

export default startFunc;
