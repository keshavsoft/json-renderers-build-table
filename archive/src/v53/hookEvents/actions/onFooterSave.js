import { table as traversalTable } from "dom-traversal-functions";
import { repaintTable } from "./repaintTable.js";

/**
 * Handles footer save button click.
 * Extracts footer inputs via dom-traversal-functions v3, clears inputs,
 * appends new row to dataset, and repaints table-content-container.
 */
export const onFooterSave = (event, matchElement, state) => {
    const footerRow = matchElement.closest("tfoot tr");
    if (!footerRow || !state.container.contains(footerRow)) return;

    // Extract footer data using traversal function (powered by instructions.json)
    const footerData = traversalTable?.footer?.getFooterData
        ? traversalTable.footer.getFooterData(footerRow, state.columns)
        : {};

    // Fallback extraction if empty
    if (!footerData || Object.keys(footerData).length === 0) {
        footerRow.querySelectorAll("input, select").forEach(input => {
            const colKey = input.id || input.name;
            if (colKey) footerData[colKey] = input.value;
        });
    }

    // Clear input fields
    if (traversalTable?.footer?.clearRowInputs) {
        traversalTable.footer.clearRowInputs(footerRow);
    } else {
        footerRow.querySelectorAll("input").forEach(i => i.value = "");
    }

    state.dataset.push(footerData);
    state.filteredData.push(footerData);

    repaintTable(state, state.filteredData);

    if (typeof state.onSave === "function") {
        state.onSave(footerData, state.dataset);
    }
};

export default onFooterSave;
