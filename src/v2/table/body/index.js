import buildRow from "../row/index.js";

const resolveColumnKey = (inColumn) => (
    typeof inColumn === "string" ? inColumn : inColumn?.key
);

const resolveRowValues = ({ inRow, inColumns = [] } = {}) => {
    if (Array.isArray(inRow)) {
        return inRow;
    }

    return (Array.isArray(inColumns) ? inColumns : []).map(inColumn => (
        inRow?.[resolveColumnKey(inColumn)]
    ));
};

const resolveRowOptions = ({ inOptions = {}, inRow, inIndex } = {}) => {
    const rowOptions = inOptions?.row;

    return typeof rowOptions === "function"
        ? rowOptions({ inRow, inIndex })
        : rowOptions;
};

const renderTableBody = ({
    inData = [],
    inColumns = [],
    inOptions = {}
} = {}) => ({
    tagName: "tbody",
    children: (Array.isArray(inData) ? inData : []).map((inRow, inIndex) => buildRow({
        inValues: resolveRowValues({ inRow, inColumns }),
        inCellTagName: "td",
        inRowOptions: resolveRowOptions({ inOptions, inRow, inIndex })
    }))
});

export default renderTableBody;
