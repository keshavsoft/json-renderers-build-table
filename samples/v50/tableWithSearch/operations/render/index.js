import render from "../../../../../docs/dist/v48/min.js";
import data from "../../../common/data.json" with { type: "json" };
import columns from "../../../common/columns.json" with { type: "json" };
import spec from "./specs.json" with { type: "json" };

const renderTable = (targetHtmlId = "dom-render-container", options = {}) => {
    return render({
        type: spec.type,
        data,
        columns,
        options: { ...spec.options, ...options },
        targetHtmlId,
        classToApply: spec.classToApply,
        appendPosition: spec.appendPosition
    });
};

export { renderTable };
export default renderTable;
