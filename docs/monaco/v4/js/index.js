import initMonaco from "./monacoEditor/index.js";
import initBindings from "./bindings/index.js";
import { populateDefinitionsSelectors } from "./bindings/actions.js";

const startFunc = async () => {
    try {
        await initMonaco();
        initBindings();
        populateDefinitionsSelectors();
    } catch (error) {
        console.error("Monaco playground initialization failed:", error);
        const stage = document.getElementById("renderOutput");
        if (stage) stage.textContent = error.message;
    }
};

startFunc();
