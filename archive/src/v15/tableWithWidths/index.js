import { runInstructions, buildBody, findByRole } from "../common/runner.js";
import spec from "../spec.json" with { type: "json" };
import base from "./config/base.json" with { type: "json" };
import instructions from "./config/instructions.json" with { type: "json" };

const buildSpec = ({ inColumns = [], inData = [] } = {}) => {
    const localColumns = inColumns;
    const localData = inData;

    const localBase = structuredClone(base);
    const localSpec = structuredClone(spec);

    const normalizedColumns = localColumns.map(col => {
        const colCopy = structuredClone(col);
        colCopy.template = {
            bodyCell: "buildBodyCell",
            ...(colCopy.template || {})
        };
        return colCopy;
    });

    const buildData = {
        columns: normalizedColumns,
        data: localData
    };

    const registry = {
        data: buildData,
        base: localBase,
        spec: localSpec
    };

    runInstructions({
        inInstructions: instructions,
        inRegistry: registry
    });

    const tbodyElement = findByRole(localBase, "table-body");
    if (tbodyElement && Array.isArray(tbodyElement.children)) {
        buildBody(tbodyElement.children, buildData, localSpec);
    }

    return localBase;
};

const startFunc = (input = {}) => {
    const localInput = (input && typeof input === "object" && "inConfig" in input)
        ? input.inConfig
        : input;

    return buildSpec({
        inColumns: localInput.columns || [],
        inData: localInput.data || []
    });
};

export { buildSpec };
export default startFunc;
