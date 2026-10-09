import buildBodyRow from "./row/index.js";

const renderTableBody = ({ inData = [], inColumns = [] } = {}) => ({
    tagName: "tbody",
    children: inData.map(row => buildBodyRow({
        inRow: row,
        inColumns
    }))
});

export default renderTableBody;
