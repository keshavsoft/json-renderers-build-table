import simple from "./builders/simple/index.js";
import headerOnly from "./builders/headerOnly/index.js";
import bodyOnly from "./builders/bodyOnly/index.js";
import withFooter from "./builders/withFooter/index.js";
import footerOnly from "./builders/footerOnly/index.js";

import insertSerial from "./actions/insertSerial/index.js";
import insertOptions from "./actions/insertOptions/index.js";
import actions from "./actions/index.js";

const withSerial = (inConfig = {}, showLog = false, returnLog = []) => {
    const localConfig = (inConfig && typeof inConfig === "object" && "inConfig" in inConfig)
        ? inConfig.inConfig
        : inConfig;

    return simple({
        ...localConfig,
        options: {
            showSerial: true,
            serial: localConfig.serial || localConfig.inSerial,
            ...(localConfig.options || localConfig.inOptions)
        }
    }, showLog, returnLog);
};

const withOptions = (inConfig = {}, showLog = false, returnLog = []) => {
    const localConfig = (inConfig && typeof inConfig === "object" && "inConfig" in inConfig)
        ? inConfig.inConfig
        : inConfig;

    return simple({
        ...localConfig,
        options: {
            showOptions: true,
            options: localConfig.options || localConfig.inOptions
        }
    }, showLog, returnLog);
};

const tableWithSerial = withSerial;
const tableWithOptions = withOptions;

export {
    simple,
    headerOnly,
    bodyOnly,
    withFooter,
    footerOnly,
    insertSerial,
    insertOptions,
    actions,
    withSerial,
    withOptions,
    tableWithSerial,
    tableWithOptions
};

export default {
    simple,
    headerOnly,
    bodyOnly,
    withFooter,
    footerOnly,
    insertSerial,
    insertOptions,
    actions,
    withSerial,
    withOptions,
    tableWithSerial,
    tableWithOptions
};
