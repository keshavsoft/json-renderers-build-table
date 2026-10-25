import { runSingleInstructions } from "json-instructions";

import insertSearch from "./insertSearch/index.js";

import serialInstructions from "./instructionsForSerial.json" with { type: "json" };
import optionInstructions from "./instructionsForOptions.json" with { type: "json" };

const startFunc = ({ inOptions = {}, inBase, showLog = false, returnLog = [] }) => {
    const localOptions = inOptions;

    const localBase = inBase;

    if (localOptions.showSerial || localOptions.serial) {
        runSingleInstructions(serialInstructions, { base: localBase }, showLog, returnLog);
    };

    if (localOptions.showOptions || localOptions.options) {
        runSingleInstructions(optionInstructions, { base: localBase }, showLog, returnLog);
    };

    if (localOptions.showSearch) {
        insertSearch();
    };

    return localBase;
};

export default startFunc;