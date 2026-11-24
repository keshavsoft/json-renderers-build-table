import state from "../state.js";

/**
 * Delegated search handler. Extracts query and filters the table dataset.
 *
 * @param {Event} event - Input event.
 * @param {HTMLElement} matchElement - Search input element.
 */
export const onSearch = (event, matchElement) => {
    const query = (matchElement?.value || "").trim().toLowerCase();

    const filtered = query
        ? state.dataset.filter(item =>
            Object.values(item).some(val =>
                String(val ?? "").toLowerCase().includes(query)
            )
        )
        : state.dataset;

    state.filteredData = filtered;

    if (typeof state.renderTable === "function") {
        state.renderTable(filtered);
    }

    const message = query
        ? `Showing ${filtered.length} of ${state.dataset.length} records matching "${matchElement?.value?.trim() || ""}".`
        : `Showing all ${state.dataset.length} records.`;

    state.notifyFeedback(message);

    if (typeof state.onSearch === "function") {
        state.onSearch(query, filtered);
    }
};

export default onSearch;
