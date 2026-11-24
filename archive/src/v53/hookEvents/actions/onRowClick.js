import { table as traversalTable } from "dom-traversal-functions";

/**
 * Handles body row selection and visual highlighting.
 */
export const onRowClick = (event, matchElement, state) => {
    const bodyRow = matchElement.closest("tbody tr");
    if (!bodyRow || !state.container.contains(bodyRow)) return;

    // Highlight selected row visually
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
