import { table as traversalTable } from "dom-traversal-functions";

/**
 * Handles options button clicks on a row (e.g., "show" or custom actions).
 */
export const onRowAction = (event, matchElement, state) => {
    event.stopPropagation();

    const button = matchElement.closest("button");
    const bodyRow = matchElement.closest("tbody tr");
    if (!button || !bodyRow || !state.container.contains(bodyRow)) return;

    // Highlight row
    bodyRow.parentElement?.querySelectorAll("tr.table-primary, tr.table-active").forEach(r => {
        r.classList.remove("table-primary", "table-active");
    });
    bodyRow.classList.add("table-primary");

    const rowIndex = traversalTable?.body?.getRowIndex
        ? traversalTable.body.getRowIndex(bodyRow)
        : Array.from(bodyRow.parentElement.children).indexOf(bodyRow);

    const record = state.filteredData[rowIndex] || state.dataset[rowIndex];
    state.selectedIndex = rowIndex;

    const action = button.dataset.action || button.textContent.trim().toLowerCase() || "show";

    if (typeof state.onRowAction === "function" && record) {
        state.onRowAction(action, record, rowIndex);
    }
};

export default onRowAction;
