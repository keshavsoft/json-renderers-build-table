import runInstructions from "dom-primitive-engine";
import { table as traversalTable } from "dom-traversal-functions";
import instructions from "./instructions.json" with { type: "json" };

/**
 * Handles body row selection and visual highlight.
 */
export const onRowClick = (event, matchElement, state) => {
    // Traverse to closest tbody tr via instructions.json
    const bodyRow = runInstructions(matchElement, instructions);
    if (!bodyRow || !state.container.contains(bodyRow)) return;

    // Highlight row visually
    bodyRow.parentElement?.querySelectorAll("tr.table-primary, tr.table-active").forEach(r => {
        r.classList.remove("table-primary", "table-active");
    });
    bodyRow.classList.add("table-primary");

    const rowIndex = traversalTable?.body?.getRowIndex
        ? traversalTable.body.getRowIndex(bodyRow)
        : Array.from(bodyRow.parentElement.children).indexOf(bodyRow);

    const record = state.filteredData[rowIndex] || state.dataset[rowIndex];
    state.selectedIndex = rowIndex;

    if (typeof state.onRowClick === "function" && record) {
        state.onRowClick(record, rowIndex);
    }
};

export default onRowClick;
export { instructions };
