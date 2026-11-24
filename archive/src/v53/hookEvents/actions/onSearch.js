import { table as traversalTable } from "dom-traversal-functions";
import { repaintTable } from "./repaintTable.js";

/**
 * Handles live search input.
 * Extracts search query via dom-traversal-functions v3, filters the dataset,
 * repaints the inner table-content-container, and keeps input focus intact.
 */
export const onSearch = (event, matchElement, state) => {
    // Extract query using traversal function (powered by instructions.json via dom-primitive-engine)
    const query = traversalTable?.header?.getSearchQuery
        ? traversalTable.header.getSearchQuery(matchElement)
        : (matchElement?.value || "").trim().toLowerCase();

    const filtered = query
        ? state.dataset.filter(item =>
            Object.values(item).some(val =>
                String(val ?? "").toLowerCase().includes(query)
            )
        )
        : state.dataset;

    state.filteredData = filtered;

    // Repaint table inside #table-content-container
    repaintTable(state, filtered);

    // Update feedback if element exists
    const searchFeedback = state.container.querySelector("#search-feedback");
    if (searchFeedback) {
        searchFeedback.textContent = query
            ? `Showing ${filtered.length} of ${state.dataset.length} records matching "${matchElement.value.trim()}".`
            : `Showing all ${state.dataset.length} records.`;
    }

    if (typeof state.onSearch === "function") {
        state.onSearch(query, filtered);
    }
};

export default onSearch;
