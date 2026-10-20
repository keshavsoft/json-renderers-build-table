import simple from "./builders/simple/index.js";
import headerOnly from "./builders/headerOnly/index.js";
import bodyOnly from "./builders/bodyOnly/index.js";
import withFooter from "./builders/withFooter/index.js";
import footerOnly from "./builders/footerOnly/index.js";
import withSerial from "./builders/withSerial/index.js";
import withOptions from "./builders/withOptions/index.js";

const tableWithSerial = withSerial;
const tableWithOptions = withOptions;

export {
    simple,
    headerOnly,
    bodyOnly,
    withFooter,
    footerOnly,
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
    withSerial,
    withOptions,
    tableWithSerial,
    tableWithOptions
};
