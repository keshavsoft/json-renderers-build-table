import buildHeadCell from "../cell/index.js";

const buildHeadRow = ({ inColumns = [] } = {}) => ({
    tagName: "tr",
    children: inColumns.map(column => buildHeadCell({ inColumn: column }))
});

export default buildHeadRow;
