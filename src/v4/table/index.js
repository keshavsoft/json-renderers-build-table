import tagJson from "./tag.json" with { type: "json" };
import renderTableHead from "./head/index.js";
import renderTableBody from "./body/index.js";

const renderTable = ({
    inColumns = [],
    inData = []
} = {}) => {
    const table = structuredClone(tagJson);

    table.children = [
        renderTableHead({ inColumns }),
        renderTableBody({ inData, inColumns })
    ];

    return table;
};

export { renderTableHead, renderTableBody };
export default renderTable;
