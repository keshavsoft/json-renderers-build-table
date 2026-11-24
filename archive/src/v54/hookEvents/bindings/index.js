import bindings from "./bindings.json" with { type: "json" };
import * as actions from "../actions/index.js";

/**
 * Attaches delegated listeners to the root container based on declarative bindings.json.
 *
 * @param {HTMLElement} rootElement - The table component's root container.
 * @param {object} state - Reactive state instance.
 */
export const attachBindings = (rootElement, state) => {
    // 1. Input Event Delegation (e.g. Search)
    rootElement.addEventListener("input", (event) => {
        for (const binding of bindings) {
            if (binding.event !== "input") continue;
            const matchElement = event.target.closest(binding.selector);
            if (matchElement && rootElement.contains(matchElement)) {
                const handler = actions[binding.action];
                if (typeof handler === "function") {
                    handler(event, matchElement, state);
                }
                return;
            }
        }
    });

    // 2. Click Event Delegation (e.g. Footer save, row action button, row selection)
    rootElement.addEventListener("click", (event) => {
        for (const binding of bindings) {
            if (binding.event !== "click") continue;
            const matchElement = event.target.closest(binding.selector);
            if (matchElement && rootElement.contains(matchElement)) {
                const handler = actions[binding.action];
                if (typeof handler === "function") {
                    handler(event, matchElement, state);
                }
                return;
            }
        }
    });
};

export default attachBindings;
export { bindings };
