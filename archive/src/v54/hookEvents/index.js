import createState from "./state.js";
import attachBindings from "./bindings/index.js";
import { repaintTable } from "./actions/repaintTable/index.js";

/**
 * Modular hookEvents orchestrator.
 * Wires state, declarative bindings, and instruction-driven action handlers.
 */
export const hookEvents = (config = {}) => {
    const rootElement = typeof config.container === "string"
        ? document.getElementById(config.container)
        : config.container;

    if (!rootElement) {
        if (config.showLog) console.warn("[json-renderers-build-table:v54:hookEvents] Container not found:", config.container);
        return null;
    }

    // 1. Initialize State
    const state = createState({
        ...config,
        container: rootElement
    });

    // 2. Attach Declarative Bindings
    attachBindings(rootElement, state);

    // 3. Return Public Controller
    return {
        getState: () => ({ ...state }),
        repaint: (records) => repaintTable(state, records || state.filteredData)
    };
};

export default hookEvents;
