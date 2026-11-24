import state from "./state.js";
import { onSearch } from "./actions/onSearch.js";

/**
 * Binds delegated table search events to the main container.
 */
export const bindTableEvents = ({
    container,
    dataset = [],
    columns = [],
    renderTable = null,
    onSearch: onSearchCallback = null,
    setFeedback = null
} = {}) => {
    const rootElement = typeof container === "string" ? document.getElementById(container) : container;

    if (!rootElement) {
        console.warn("[dom-table-events] Container element not found:", container);
        return null;
    }

    // Initialize reactive state
    state.init({
        container: rootElement,
        dataset,
        columns,
        renderTable,
        onSearch: onSearchCallback,
        setFeedback
    });

    // Delegated input listener for table search
    rootElement.addEventListener("input", (event) => {
        const input = event.target;
        if (input.matches("input[type='search'], input[name='search'], [data-role='table-search'], #tableSearch, .table-search-input")) {
            onSearch(event, input);
        }
    });

    return state;
};

export default bindTableEvents;
