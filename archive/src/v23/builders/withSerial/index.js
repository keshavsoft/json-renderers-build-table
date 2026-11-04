import applyTemplate from "json-transformer-funcs-primitive";
import fromCollection from "json-transformer-funcs-one-dimension";
import twoDimensional from "json-transformer-funcs-two-dimensions";

import spec from "../spec.json" with { type: "json" };
import base from "./base.json" with { type: "json" };
import singleInstructions from "./instructions/single.json" with { type: "json" };
import doubleInstructions from "./instructions/double.json" with { type: "json" };
import postSingleInstructions from "./instructions/postSingle.json" with { type: "json" };

import runSingleInstructions from "../../singleInstruction/index.js";
import runDoubleInstructions from "../../doubleInstruction/index.js";

const functions = { fromCollection, twoDimensional, applyTemplate };

const startFunc = (data = {}, showLog = false, returnLog = []) => {
    const localInput = (data && typeof data === "object" && "inConfig" in data)
        ? data.inConfig
        : data;

    const columns = localInput.inColumns || localInput.columns || [];
    const tableData = localInput.inData || localInput.data || [];
    const serialInput = localInput.inSerial || localInput.serial || {};

    const localSerial = {
        col: { width: "50px" },
        header: { columnName: "#" },
        body: {},
        ...serialInput
    };

    const localBase = structuredClone(base);

    const registry = {
        data: {
            columns,
            data: tableData,
            serial: localSerial
        },
        base: localBase,
        spec
    };

    runSingleInstructions(singleInstructions, registry, functions, spec, showLog, returnLog);
    runDoubleInstructions(doubleInstructions, registry, functions, spec, showLog, returnLog);
    runSingleInstructions(postSingleInstructions, registry, functions, spec, showLog, returnLog);

    return localBase;
};

export default startFunc;
