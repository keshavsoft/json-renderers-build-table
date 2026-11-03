import fromCollection from "json-transformer-funcs-one-dimension";
import twoDimensional from "json-transformer-funcs-two-dimensions";

import runSingleInstructions from "json-instruction-single";
import runDoubleInstructions from "json-instruction-double";

import tableOptions from "json-renderers-build-table-options";

import base from "./simple/base.json" with { type: "json" };

import singleInstructions from "./simple/single.json" with { type: "json" };
import doubleInstructions from "./simple/double.json" with { type: "json" };

const startFunc = ({ type, data, columns, options, showLog }) => {
    const localShowLog = showLog;

    const localBase = structuredClone(base);

    const registry = {
        data: { columns, data },
        base: localBase,
        ...options
    };

    runSingleInstructions(singleInstructions, registry, localShowLog);
    runDoubleInstructions(doubleInstructions, registry);

    tableOptions({ options, base: localBase });

    return localBase;
};

export default startFunc;