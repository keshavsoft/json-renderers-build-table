import applyShowSerial from "./showSerial/index.js";
import applyShowOptions from "./showOptions/index.js";
import applyShowFooter from "./showFooter/index.js";
import applyShowFooterSave from "./showFooterSave/index.js";

const applyOptions = (inSpec, inOptions = {}, inColumns = []) => {
    // console.log("inOptions : ", inOptions);

    if (inOptions.showSerial) {
        applyShowSerial(inSpec);
    }

    if (inOptions.showOptions) {
        applyShowOptions(inSpec, inOptions.showOptions);
    }

    if (inOptions.showFooter) {
        applyShowFooter(inSpec, inColumns, inOptions);
    }

    if (inOptions.showFooterSave) {
        applyShowFooterSave(inSpec, inColumns, inOptions);
    }

    return inSpec;
};

export default applyOptions;
