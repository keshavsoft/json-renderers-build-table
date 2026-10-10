import renderTableHead from "./head/index.js";
import renderTableBody from "./body/index.js";
import renderTableFoot from "./foot/index.js";

const renderTable = ({
    inColumns = [],
    inData = [],
    inFooterData = [],
    inOptions = {}
} = {}) => {
    const table = {
        tagName: "table",
        attributes: {
            class: inOptions?.table?.class || "table table-hover table-striped mb-0"
        },
        children: [
            renderTableHead({ inColumns }),
            renderTableBody({ inData, inColumns, inOptions })
        ]
    };

    if (Array.isArray(inFooterData) && inFooterData.length > 0) {
        table.children.push(renderTableFoot({
            inData: inFooterData,
            inColumns,
            inOptions
        }));
    }

    return table;
};

export { renderTableHead, renderTableBody, renderTableFoot };
export default renderTable;
