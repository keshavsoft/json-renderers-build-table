import tagJson from "./tag.json" with { type: "json" };
import buildHeadRow from "./row/index.js";

const renderTableHead = ({ inColumns = [] } = {}) => {
    const thead = structuredClone(tagJson);

    thead.children = [
        buildHeadRow({ inColumns })
    ];

    return thead;
};

export default renderTableHead;
