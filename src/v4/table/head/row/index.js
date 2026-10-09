import tagJson from "./tag.json" with { type: "json" };
import buildHeadCell from "../cell/index.js";

const buildHeadRow = ({ inColumns = [] } = {}) => {
    const tr = structuredClone(tagJson);

    tr.children = inColumns.map(column => buildHeadCell({ inColumn: column }));

    return tr;
};

export default buildHeadRow;
