import initMonaco from "./monacoEditor/index.js";
import initBindings from "./bindings/index.js";
import actions from "./bindings/actions.js";

const startFunc = async () => {
    await initMonaco();
    initBindings(document.body);
    actions.renderTable();
};

startFunc();
