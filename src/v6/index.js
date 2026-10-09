import renderTable from "./table/index.js";

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

        return applyOptions(spec, options);
    };

    throw new Error(`Unknown table renderer type "${type}".`);
};

export {
    render,
    renderRequests
};

export default render;
