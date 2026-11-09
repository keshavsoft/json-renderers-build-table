// import { bindEvents } from "../../common/dom-primitive-bindings.min.js";
// import runInstructions from "../../common/dom-primitive-engine.min.js";
import specs from "./specs.json" with { type: "json" };
import bindings from "./bindings.json" with { type: "json" };

const bindSearch = (root, { onQuery = () => { }, onStatus = () => { } } = {}) => {
    const configuredBindings = bindings.map((binding) => ({
        event: binding.event,
        selector: binding.selector,
        root: binding.root,
        runner: window.ks.domPrimitiveEngine.runInstructions,
        instructions: specs[binding.instructionKey],
        onExtract: (query) => {
            if (query === null) return;
            onQuery(query);
            onStatus("Search Enter captured. No filtering is applied in V50.");
        }
    }));

    return window.ks.domPrimitiveBindings.bindEvents(root, configuredBindings);
    // return bindEvents(root, configuredBindings);
};

export { bindSearch };
export default bindSearch;
