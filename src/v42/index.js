import definitions from "./definitions.json" with { type: "json" };

import runSingleInstructions from "json-instruction-single";
import runDoubleInstructions from "json-instruction-double";
import tableOptions from "json-renderers-build-table-options";

const buildTable = ({ type = "simple", data = [], columns = [], options = {}, showLog = false } = {}) => {
    const config = definitions[type];
    if (!config) {
        throw new Error(`Unknown table type: "${type}". Available types: ${Object.keys(definitions).join(", ")}`);
    }

    const base = structuredClone(config.base);
    const registry = {
        data: { columns, data },
        base,
        ...options
    };

    if (config.single && config.single.length > 0) {
        runSingleInstructions(config.single, registry, showLog);
    }

    if (config.double && config.double.length > 0) {
        runDoubleInstructions(config.double, registry);
    }

    tableOptions({ options, base });

    return base;
};

export { definitions, buildTable };

export default buildTable;