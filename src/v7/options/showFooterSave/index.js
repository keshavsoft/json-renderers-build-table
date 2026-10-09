import buildFooter from "../showFooter/footer/index.js";
import tagJson from "./button/tag.json" with { type: "json" };

const applyShowFooterSave = (inSpec, inColumns, inOptions) => {
    const button = structuredClone(tagJson);

    inSpec.children.push(buildFooter({
        inColumns,
        inOptions,
        inSaveButton: button
    }));
};

export default applyShowFooterSave;
