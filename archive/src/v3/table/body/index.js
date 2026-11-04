import tagJson from "./tag.json" with { type: "json" };
import buildBodyRow from "./row/index.js";

const renderTableBody = ({ inData = [], inColumns = [] } = {}) => {
    const tbody = structuredClone(tagJson);

    tbody.children = inData.map(row => buildBodyRow({
        inRow: row,
        inColumns
    }));

    return tbody;
};

export default renderTableBody;
