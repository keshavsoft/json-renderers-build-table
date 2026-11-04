
import renderTable from "./table/index.js";

const render = ({
    inTargetHtmlId,
    targetHtmlId,
    inColumns,
    columns,
    inData,
    data,
    inColGroup,
    colGroup
} = {}) => {
    const localTargetHtmlId = inTargetHtmlId || targetHtmlId;
    const localColumns = inColumns || columns;
    const localData = inData || data;
    const localColGroup = inColGroup || colGroup;

    return renderTable({
        inTargetHtmlId: localTargetHtmlId,
        inColumns: localColumns,
        inData: localData,
        inColGroup: localColGroup
    });
};

export { render, renderTable };
export default render;
