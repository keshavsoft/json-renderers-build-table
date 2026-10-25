import { runSingleInstructions } from "json-instructions";

import insertSerial from "./insertSerial/index.js";
import insertOptions from "./insertOptions/index.js";
import insertSearch from "./insertSearch/index.js";

import serialInstructions from "./instructionsForSerial.json" with { type: "json" };
import optionInstructions from "./instructionsForOptions.json" with { type: "json" };

const startFunc = ({ inOptions = {}, inBase, showLog = false, returnLog = [] }) => {
    const localOptions = inOptions;

    const localBase = inBase;

    console.log("inBase : ", inBase)
    if (localOptions.showSerial || localOptions.serial) {

        runSingleInstructions(serialInstructions, localBase, showLog, returnLog);

        // insertSerial(localBase, localOptions.serial || {}, showLog, returnLog);
    };

    if (localOptions.showOptions || localOptions.options) {
        // runSingleInstructions(optionInstructions, localBase, false, []);

        // insertOptions(localBase, localOptions.options || {}, showLog, returnLog);
    };

    if (localOptions.showSearch) {
        insertSearch();
    };

    return localBase;
};

export default startFunc;