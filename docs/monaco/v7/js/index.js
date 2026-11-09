import initMonaco from "./monacoEditor/index.js";
import initDefinitions from "./domains/definitions/index.js";
import initToolbar from "./domains/toolbar/index.js";
import initTabs from "./domains/tabs/index.js";
import { populateDefinitionsSelectors } from "./domains/definitions/actions.js";

const startFunc = async () => {
    try {
        await initMonaco();
        initDefinitions();
        initToolbar();
        initTabs();
        populateDefinitionsSelectors();
    } catch (error) {
        console.error("Monaco playground initialization failed:", error);
        const stage = document.getElementById("renderOutput");
        if (stage) stage.textContent = error.message;
    }
};

startFunc();
