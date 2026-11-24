/**
 * Encapsulated table reactive state manager.
 */
class TableStateManager {
    constructor() {
        this.dataset = [];
        this.filteredData = [];
        this.columns = [];
        this.selectedIndex = -1;
        this.container = null;
        this.renderTable = null;
        this.onRowClick = null;
        this.onRowAction = null;
        this.onFooterSave = null;
        this.onSearch = null;
        this.setFeedback = null;
    }

    init({
        container,
        dataset = [],
        columns = [],
        renderTable = null,
        onRowClick = null,
        onRowAction = null,
        onFooterSave = null,
        onSearch = null,
        setFeedback = null
    }) {
        this.container = typeof container === "string" ? document.getElementById(container) : container;
        this.dataset = dataset;
        this.filteredData = [...dataset];
        this.columns = columns;
        this.selectedIndex = -1;
        this.renderTable = renderTable;
        this.onRowClick = onRowClick;
        this.onRowAction = onRowAction;
        this.onFooterSave = onFooterSave;
        this.onSearch = onSearch;
        this.setFeedback = setFeedback;
    }

    notifyFeedback(message) {
        if (typeof this.setFeedback === "function") {
            this.setFeedback(message);
        } else {
            const feedbackEl = this.container?.querySelector("#search-feedback, [data-role='feedback']");
            if (feedbackEl) feedbackEl.textContent = message;
        }
    }
}

export const state = new TableStateManager();
export default state;
