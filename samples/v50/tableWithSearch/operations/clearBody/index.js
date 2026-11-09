// import { bindEvents } from "../../common/dom-primitive-bindings.min.js";
// import runInstructions from "../../common/dom-primitive-engine.min.js";
import specs from "./specs.json" with { type: "json" };
import bindings from "./bindings.json" with { type: "json" };

const bindClearBody = (root, { onStatus = () => { } } = {}) => {
    const configuredBindings = bindings.map((binding) => ({
        event: binding.event,
        selector: binding.selector,
        runner: window.ks.domPrimitiveEngine.runInstructions,
        instructions: specs[binding.instructionKey],
        onExtract: (tbody) => {
            if (!tbody) {
                onStatus("Could not locate the live table body.");
                return;
            }
            tbody.replaceChildren();
            onStatus("Cleared tbody only. Table header and search remain.");
        }
    }));

    return window.ks.domPrimitiveBindings.bindEvents(root, configuredBindings);
};

export { bindClearBody };
export default bindClearBody;
