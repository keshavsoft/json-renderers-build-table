import tagJson from "./tag.json" with { type: "json" };
import buildFooterCell from "../cell/index.js";

const buildFooterRow = ({
    inColumns = [],
    inOptions = {},
    inSaveButton
} = {}) => {
    const tr = structuredClone(tagJson);
    const columns = [...inColumns];

    if (columns.length === 0 && inSaveButton) {
        tr.children = [buildFooterCell({ inChildren: [inSaveButton] })];
        return tr;
    }

    tr.children = columns.map((column, index) => buildFooterCell({
        inColumn: column,
        inChildren: inSaveButton && index === columns.length - 1
            ? [inSaveButton]
            : []
    }));

    if (inOptions.showSerial) {
        tr.children.unshift(buildFooterCell());
    }

    if (inOptions.showOptions) {
        tr.children.push(buildFooterCell());
    }

    return tr;
};

export default buildFooterRow;
