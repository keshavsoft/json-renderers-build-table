import renderTableHead from "./head/index.js";
import renderTableBody from "./body/index.js";

const renderTable = ({
    inColumns = [],
    inData = []
} = {}) => ({
    tagName: "table",
    attributes: {
        class: "table table-hover table-striped mb-0"
    },
    children: [
        renderTableHead({ inColumns }),
        renderTableBody({ inData, inColumns })
    ]
});

export { renderTableHead, renderTableBody };
export default renderTable;
