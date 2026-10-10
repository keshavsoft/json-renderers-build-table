import renderTable, {
    renderTableHead,
    renderTableBody,
    renderTableFoot
} from "./table/index.js";

const RENDERER_MAP = {
    table: renderTable,
    tableHead: renderTableHead,
    tableBody: renderTableBody,
    tableFoot: renderTableFoot
};

const render = ({
    type = "table",
    data = [],
    columns = [],
    footerData = [],
    options = {}
} = {}) => {
    const renderer = RENDERER_MAP[type];

    if (typeof renderer !== "function") {
        throw new Error(`Unknown table renderer type "${type}".`);
    }

    return renderer({
        inColumns: columns,
        inData: data,
        inFooterData: footerData,
        inOptions: options
    });
};

export {
    render,
    renderTable,
    renderTableHead,
    renderTableBody,
    renderTableFoot
};

export default render;
