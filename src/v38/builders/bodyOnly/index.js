import runDoubleInstructions from "json-instruction-double";

import tableOptions from "json-renderers-build-table-options";

import spec from "../spec.json" with { type: "json" };
import base from "./base.json" with { type: "json" };

import doubleInstructions from "./double.json" with { type: "json" };

const startFunc = ({ data, columns, options }) => {

    const localBase = structuredClone(base);

    const registry = {
        data: { columns, data },
        base: localBase,
        spec,
        ...options
    };

    runDoubleInstructions(doubleInstructions, registry);

    tableOptions({ options, base: localBase });

    return localBase;
};

export default startFunc;
