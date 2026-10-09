import renderTable, {
    renderTableHead,
    renderTableBody
} from "./table/index.js";

import applyOptions from "./options/index.js";
import renderRequests from "./render-requests.json" with { type: "json" };

const render = ({
    type = "table",
    data = [],
    columns = [],
    options = {}
} = {}) => {
    if (type === "table") {
        const spec = renderTable({
            inColumns: columns,
            inData: data
        });
        // console.log("inOptions : ", options);

        return applyOptions(spec, options);
    }

    if (type === "tableHead" || type === "head") {
        return renderTableHead({
            inColumns: columns
        });
    }

    if (type === "tableBody" || type === "body") {
        return renderTableBody({
            inData: data,
            inColumns: columns
        });
    }

    throw new Error(`Unknown table renderer type "${type}".`);
};

export {
    render,
    renderRequests,
    renderTable,
    renderTableHead,
    renderTableBody
};

export default render;
