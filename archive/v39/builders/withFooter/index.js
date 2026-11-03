import fromCollection from "json-transformer-funcs-one-dimension";
import twoDimensional from "json-transformer-funcs-two-dimensions";
import optionsFunc from "json-renderers-build-table-options";

import runSingleInstructions from "json-instruction-single";
import runDoubleInstructions from "json-instruction-double";

import spec from "../spec.json" with { type: "json" };
import base from "./base.json" with { type: "json" };

import singleInstructions from "./single.json" with { type: "json" };
import doubleInstructions from "./double.json" with { type: "json" };

const startFunc = ({ data, columns, options }) => {

    const localBase = structuredClone(base);

    const registry = {
        data: { columns, data },
        base: localBase,
        spec,
        ...options
    };

    runSingleInstructions(singleInstructions, registry);
    runDoubleInstructions(doubleInstructions, registry);

    optionsFunc({ options, base: localBase, showLog: false, returnLog: [] });

    return localBase;
};

export default startFunc;
