import buildFooter from "./footer/index.js";

const applyShowFooter = (inSpec, inColumns, inOptions) => {
    inSpec.children.push(buildFooter({
        inColumns,
        inOptions
    }));
};

export default applyShowFooter;
