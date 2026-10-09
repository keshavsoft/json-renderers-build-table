import tagJson from "./tag.json" with { type: "json" };
import buildFooterRow from "../row/index.js";

const buildFooter = ({ inColumns = [], inOptions = {}, inSaveButton } = {}) => {
    const tfoot = structuredClone(tagJson);

    tfoot.children = [
        buildFooterRow({
            inColumns,
            inOptions,
            inSaveButton
        })
    ];

    return tfoot;
};

export default buildFooter;
