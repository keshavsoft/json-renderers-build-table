import runInstructions from "dom-primitive-engine";
import { table as traversalTable } from "dom-traversal-functions";
import repaintTable from "../repaintTable/index.js";
import instructions from "./instructions.json" with { type: "json" };

/**
 * Handles live search input.
 * Extracts search query via dom-traversal-functions v3,
 * filters dataset, repaints inner table, and updates feedback element.
 */
export const onSearch = (event, matchElement, state) => {
    // 1. Extract query using dom-traversal-functions v3
    const query = traversalTable?.header?.getSearchQuery
        ? traversalTable.header.getSearchQuery(matchElement)
        : (matchElement?.value || "").trim().toLowerCase();

    // 2. Filter dataset
    const filtered = query
        ? state.dataset.filter(item =>
            Object.values(item).some(val =>
                String(val ?? "").toLowerCase().includes(query)
            )
        )
        : state.dataset;

    state.filteredData = filtered;

    // 3. Repaint table container
    repaintTable(state, filtered);

    // 4. Update feedback using declarative traversal
    const searchFeedback = runInstructions(matchElement, instructions);
    if (searchFeedback) {
        searchFeedback.textContent = query
            ? `Showing ${filtered.length} of ${state.dataset.length} records matching "${matchElement.value.trim()}".`
            : `Showing all ${state.dataset.length} records.`;
    }

    // 5. Fire optional consumer callback
    if (typeof state.onSearch === "function") {
        state.onSearch(query, filtered);
    }
};

export default onSearch;
export { instructions };
