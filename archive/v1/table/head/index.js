import buildRow from "../row/index.js";

const renderTableHead = ({ inColumns = [] } = {}) => ({
    tagName: "thead",
    children: [buildRow({
        inValues: inColumns,
        inCellTagName: "th"
    })]
});

export default renderTableHead;
