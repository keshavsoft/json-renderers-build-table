import renderTable, {
    renderTableHead,
    renderTableBody
} from "./table/index.js";

const render = ({
    type = "table",
    data = [],
    columns = []
} = {}) => {
    if (type === "table") {
        return renderTable({
            inColumns: columns,
            inData: data
        });
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
    renderTable,
    renderTableHead,
    renderTableBody
};

export default render;
