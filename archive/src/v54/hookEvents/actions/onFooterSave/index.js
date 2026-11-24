import runInstructions from "dom-primitive-engine";
import { table as traversalTable } from "dom-traversal-functions";
import repaintTable from "../repaintTable/index.js";
import instructions from "./instructions.json" with { type: "json" };

/**
 * Handles footer save button click.
 * Traverses to footer row using instructions.json, extracts data with dom-traversal-functions v3,
 * clears inputs, appends new row, and repaints table content.
 */
export const onFooterSave = (event, matchElement, state) => {
    // 1. Locate footer row via declarative instructions
    const footerRow = runInstructions(matchElement, instructions);
    if (!footerRow || !state.container.contains(footerRow)) return;

    // 2. Extract footer data using dom-traversal-functions v3
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

    // 3. Clear inputs
    if (traversalTable?.footer?.clearRowInputs) {
        traversalTable.footer.clearRowInputs(footerRow);
    } else {
        footerRow.querySelectorAll("input").forEach(i => i.value = "");
    }

    // 4. Update state dataset
    state.dataset.push(footerData);
    state.filteredData.push(footerData);

    // 5. Repaint table container
    repaintTable(state, state.filteredData);

    // 6. Fire consumer callback
    if (typeof state.onSave === "function") {
        state.onSave(footerData, state.dataset);
    }
};

export default onFooterSave;
export { instructions };
