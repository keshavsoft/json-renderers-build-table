import columns from "./columns.json" with { type: "json" };
import initialData from "./data.json" with { type: "json" };
import { render, hookEvents } from "../../../docs/dist/v57/min.js";

const containerId = "dom-render-container";
const dataset = [...initialData];

const feedbackEl = document.getElementById("event-feedback");
const showFeedback = (msg, alertType = "alert-info") => {
    if (!feedbackEl) return;
    feedbackEl.className = `alert ${alertType} py-2 px-3 small mb-3`;
    feedbackEl.innerHTML = msg;
};

// 1. Initial Render
render({
    data: dataset,
    columns,
    targetHtmlId: containerId,
    type: "table.simple",
    options: {
        search: { showLabel: true, showHelper: true, showInput: true },
        serial: true,
        options: { showButton: true, showEditButton: true, showDeleteButton: true }
    },
    appendPosition: "replace",
    classToApply: ""
});

// 2. Hook Interactive Events
hookEvents({
    container: containerId,
    dataset,
    columns,
    type: "table.simple",
    options: {
        search: { showLabel: true, showHelper: true, showInput: true },
        serial: true,
        options: { showButton: true, showEditButton: true, showDeleteButton: true }
    },
    onSearch: (query, filteredData) => {
        showFeedback(`🔍 Search filter for "<strong>${query}</strong>": ${filteredData.length} records matching.`, "alert-primary");
    },
    onRowClick: (record, rowIndex) => {
        showFeedback(`👆 Row clicked: #${rowIndex + 1} <strong>${record.ItemName}</strong> (${record.Category}) - ${record.Price} / ${record.BaseUnit}`, "alert-secondary");
    },
    onRowAction: (action, record, rowIndex) => {
        showFeedback(`⚡ Row Action [<strong>${action.toUpperCase()}</strong>] on #${rowIndex + 1} "${record.ItemName}"`, "alert-warning");
    },
    onSave: (newRecord) => {
        showFeedback(`💾 Footer Save: Created "<strong>${newRecord.ItemName}</strong>"`, "alert-success");
    }
});
