/**
 * Repaints the table within #table-content-container using state.render().
 * The outside container (with search input and feedback) remains completely untouched!
 *
 * @param {object} state - Active state manager instance.
 * @param {Array<object>} records - Filtered or updated records to render.
 */
export const repaintTable = (state, records) => {
    if (typeof state.render !== "function") return;

    const rootElement = state.container;
    const tableContentContainer = rootElement.querySelector("#table-content-container") ||
        rootElement.querySelector("table")?.parentElement;

    if (!tableContentContainer) {
        if (state.showLog) console.warn("[hookEvents] #table-content-container not found for repaint.");
        return;
    }

    const targetId = tableContentContainer.id || "table-content-container";
    if (!tableContentContainer.id) {
        tableContentContainer.id = targetId;
    }

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
