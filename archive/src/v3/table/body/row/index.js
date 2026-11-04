import tagJson from "./tag.json" with { type: "json" };
import buildBodyCell from "../cell/index.js";

const buildBodyRow = ({ inRow, inColumns = [] } = {}) => {
    const tr = structuredClone(tagJson);

    tr.children = inColumns.map(column => {
        const value = Array.isArray(inRow) ? inRow[column] : inRow?.[column];

        return buildBodyCell({ inValue: value });
    });

    return tr;
};

export default buildBodyRow;
