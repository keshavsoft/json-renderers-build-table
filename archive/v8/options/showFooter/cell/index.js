import tagJson from "./tag.json" with { type: "json" };
import buildFooterInput from "../input/index.js";

const buildFooterCell = ({ inColumn, inChildren = [] } = {}) => {
    const td = structuredClone(tagJson);

    if (inColumn !== undefined) {
        td.children.push(buildFooterInput({ inColumn }));
    }

    td.children.push(...inChildren);

    return td;
};

export default buildFooterCell;
