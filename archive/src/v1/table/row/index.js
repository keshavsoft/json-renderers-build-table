const isTagSpec = (inValue) => (
    inValue &&
    typeof inValue === "object" &&
    !Array.isArray(inValue) &&
    typeof inValue.tagName === "string"
);

const cloneTagSpec = (inValue) => (
    isTagSpec(inValue) && typeof structuredClone === "function"
        ? structuredClone(inValue)
        : inValue
);

const buildCell = ({
    inValue,
    inCellTagName = "td",
    inAttributes = {}
} = {}) => {
    const cell = { tagName: inCellTagName };
    const cellAttributes = { ...inAttributes };

    if (Object.keys(cellAttributes).length > 0) {
        cell.attributes = cellAttributes;
    }

    if (isTagSpec(inValue)) {
        cell.children = [cloneTagSpec(inValue)];
        return cell;
    }

    if (inValue !== undefined) {
        cell.attributes ??= {};
        cell.attributes.value = inValue;
        cell.textContent = inValue;
    }

    return cell;
};

const buildCells = ({
    inValues = [],
    inCellTagName = "td",
    inCellAttributes = {}
} = {}) => {
    const localValues = Array.isArray(inValues) ? inValues : [];

    return localValues.map(inValue => buildCell({
        inValue,
        inCellTagName,
        inAttributes: inCellAttributes
    }));
};

const buildRow = ({
    inValues = [],
    inCellTagName = "td",
    inCellAttributes = {},
    inRowOptions = {}
} = {}) => {
    const localRowOptions = inRowOptions || {};
    const row = {
        tagName: "tr",
        children: buildCells({
            inValues,
            inCellTagName,
            inCellAttributes
        })
    };

    if (localRowOptions.attributes) {
        row.attributes = { ...localRowOptions.attributes };
    }

    if (Array.isArray(localRowOptions.prependCells)) {
        row.children.unshift(...buildCells({
            inValues: localRowOptions.prependCells,
            inCellTagName,
            inCellAttributes
        }));
    }

    if (Array.isArray(localRowOptions.appendCells)) {
        row.children.push(...buildCells({
            inValues: localRowOptions.appendCells,
            inCellTagName,
            inCellAttributes
        }));
    }

    return row;
};

export { buildCell, buildCells, buildRow };
export default buildRow;
