import runSingleInstructions from "json-instruction-single";
import runDoubleInstructions from "json-instruction-double";
import tableOptions from "json-renderers-build-table-options";

const buildTableSpec = ({
    definitions,
    type = "simple",
    data = [],
    columns = [],
    options = {},
    showLog = false
} = {}) => {
    let localType = type;
    if (localType && localType.includes(".")) {
        const parts = localType.split(".");
        localType = parts[1] || "simple";
    }
    if (!localType || localType === "table") {
        localType = "simple";
    }

    const tableDefs = definitions?.table || {};
    const config = tableDefs[localType] || tableDefs.simple;

    if (!config) {
        throw new Error(`Unknown table type: "${localType}". Available types: ${Object.keys(tableDefs).join(", ")}`);
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

export default buildTableSpec;

