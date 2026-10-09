import buildHeadRow from "./row/index.js";

const renderTableHead = ({ inColumns = [] } = {}) => ({
    tagName: "thead",
    children: [
        buildHeadRow({ inColumns })
    ]
});

export default renderTableHead;
