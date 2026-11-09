import render from "../../../docs/dist/v48/min.js";
import applyActions from "../common/json-renderers-actions.min.js";
import data from "../common/data.json" with { type: "json" };
import columns from "../common/columns.json" with { type: "json" };

const outputEl = document.getElementById("action-output");
const timestampEl = document.getElementById("event-timestamp");

const logAction = (label, payload) => {
    if (timestampEl) {
        timestampEl.textContent = new Date().toLocaleTimeString();
    }
    if (outputEl) {
        outputEl.textContent = `${label}:\n${JSON.stringify(payload, null, 2)}`;
    }
    console.log(label, payload);
};

const start = () => {
    try {
        render({
            type: "table.simple",
            data,
            columns,
            options: {
                showSerial: true,
                showSearch: true,
                showOptions: true
            },
            targetHtmlId: "dom-render-container",
            classToApply: "",
            appendPosition: "replace"
        });

        applyActions("dom-render-container", {
            columns,
            actions: {
                rowClick: (rowData, event, target) => {
                    logAction("rowClick (Extracted Row Data via dom-primitive-engine)", rowData);
                },
                searchKeydown: (query, event, target) => {
                    logAction("searchKeydown (Enter query)", { query });
                },
                footerClick: (footerData, event, target) => {
                    logAction("footerClick (Extracted Footer Data via dom-primitive-engine)", footerData);
                }
            }
        });
    } catch (err) {
        console.error("Render error:", err);
        const container = document.getElementById("dom-render-container");
        if (container) {
            container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
        }
    }
};

start();
