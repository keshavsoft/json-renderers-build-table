// import { bindEvents } from "../../common/dom-primitive-bindings.min.js";
// import runInstructions from "../../common/dom-primitive-engine.min.js";
import renderTable from "../render/index.js";
import specs from "./specs.json" with { type: "json" };
import bindings from "./bindings.json" with { type: "json" };

const bindShowBody = (root, { stagingId = "v50-staging", onStatus = () => { } } = {}) => {
    const configuredBindings = bindings.map((binding) => ({
        event: binding.event,
        selector: binding.selector,
        runner: window.ks.domPrimitiveEngine.runInstructions,
        instructions: specs[binding.instructionKey],
        onExtract: (liveTbody) => {
            if (!liveTbody) {
                onStatus("Could not locate the live table body.");
                return;
            }

            // Let the existing renderer + JSON-to-DOM pipeline create all rows/cells.
            renderTable(stagingId, {
                showSerial: true,
                showSearch: false,
                showOptions: false
            });

            const staging = document.getElementById(stagingId);
            const generatedTbody = staging?.querySelector("tbody");
            if (!generatedTbody) {
                onStatus("Renderer did not produce a staging tbody.");
                return;
            }

            liveTbody.replaceChildren(...Array.from(generatedTbody.childNodes));
            onStatus("Body restored using the existing renderer.");
        }
    }));

    return window.ks.domPrimitiveBindings.bindEvents(root, configuredBindings);
};

export { bindShowBody };
export default bindShowBody;
