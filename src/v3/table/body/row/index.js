import buildBodyCell from "../cell/index.js";

const buildBodyRow = ({ inRow, inColumns = [] } = {}) => ({
    tagName: "tr",
    children: inColumns.map(column => {
        const value = Array.isArray(inRow) ? inRow[column] : inRow?.[column];

        return buildBodyCell({ inValue: value });
    })
});

export default buildBodyRow;
