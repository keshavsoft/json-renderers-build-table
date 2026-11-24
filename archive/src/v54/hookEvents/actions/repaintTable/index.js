import runInstructions from "dom-primitive-engine";
import instructions from "./instructions.json" with { type: "json" };

/**
 * Repaints the table within the inner table container resolved via instructions.json.
 * The outer container (search bar and feedback) is never touched, preserving input focus.
 *
 * @param {object} state - Active state instance.
 * @param {Array<object>} records - Filtered/updated records to render.
 */
export const repaintTable = (state, records) => {
    if (typeof state.render !== "function" || !state.container) return;

    // Resolve inner container via declarative instructions
    const resolved = runInstructions(state.container, instructions);
    const targetElement = resolved?.id === "table-content-container"
        ? resolved
        : (resolved?.parentElement || state.container.querySelector("#table-content-container"));

    if (!targetElement) {
        if (state.showLog) console.warn("[repaintTable] Target table content container could not be resolved.");
        return;
    }

    const targetId = targetElement.id || "table-content-container";
    if (!targetElement.id) targetElement.id = targetId;

    state.render({
        data: records,
        columns: state.columns,
        targetHtmlId: targetId,
        appendPosition: "replace",
        type: "withFooter",
        options: {
            showSerial: state.options?.showSerial ?? true,
            showOptions: state.options?.showOptions ?? true
        },
        classToApply: "",
        showLog: false
    });
};

export default repaintTable;
export { instructions };
