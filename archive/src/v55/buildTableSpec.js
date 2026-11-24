import runInstructions from "json-renderers-run-instructions";
import runOptions from "json-renderers-run-options";
import {
    definitions as fallbackDefinitions,
    spec as fallbackSpec,
    instructions as fallbackInstructions
} from "spec-repo";

export const buildTableSpec = ({
    definitions = fallbackDefinitions,
    spec = fallbackSpec,
    instructions = fallbackInstructions,
    type = "simple",
    data = [],
    columns = [],
    options = {},
    showLog = false
} = {}) => {
    let variant = type;
    if (variant && variant.includes(".")) variant = variant.split(".")[1] || variant.split(".")[0];
    if (!variant || variant === "table") variant = "simple";

    const tableDefs = definitions?.table || {};
    const config = tableDefs[variant] || tableDefs.simple;
    if (!config) throw new Error(`Unknown table variant: "${variant}". Available table variants: ${Object.keys(tableDefs).join(", ")}`);

    const rawBase = config.baseFromSpec ? spec[config.baseFromSpec] : config.base;
    if (!rawBase) throw new Error(`Base template not found for table variant "${variant}".`);

    const single = [...(config.single || [])];
    const rowOnColumn = [...(config.rowOnColumn || [])];
    const columnOnRow = [...(config.columnOnRow || [])];

    const instructionKeys = config.instructions || config.instructionsFromTable;
    if (Array.isArray(instructionKeys)) {
        instructionKeys.forEach(key => {
            const instruction = instructions?.[key];
            if (!instruction) return;
            if (instruction.type === "rowOnColumn") rowOnColumn.push(instruction);
            else if (instruction.type === "columnOnRow") columnOnRow.push(instruction);
            else if (instruction.type === "single" || (!instruction.type && (instruction.sourcePath || instruction.templateKey))) single.push(instruction);
        });
    }

    const result = runInstructions({
        single,
        rowOnColumn,
        columnOnRow,
        base: structuredClone(rawBase),
        data: { columns, data },
        showLog
    });
    const base = result?.base ?? result;

    const rawOptionDefs = config.options || tableDefs.options || {};
    const optionDefs = {};
    for (const [key, value] of Object.entries(rawOptionDefs)) {
        optionDefs[key] = typeof value === "string" && instructions?.[value] ? instructions[value] : value;
    }
    runOptions({ base, options, optionDefs, showLog });
    return base;
};

export default buildTableSpec;
