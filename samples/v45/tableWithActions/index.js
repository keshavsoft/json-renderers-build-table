import render from "../../../docs/dist/v45/min.js";
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
            actions: {
                rowClick: (target, event) => {
                    logAction("rowClick (Button/Row target)", {
                        tagName: target?.tagName,
                        className: target?.className,
                        textContent: target?.textContent?.trim(),
                        dataset: target?.dataset ?? {}
                    });
                },
                searchKeydown: (query, event, target) => {
                    logAction("searchKeydown (Enter key pressed)", {
                        query,
                        targetTag: target?.tagName,
                        key: event?.key
                    });
                },
                footerClick: (target, event) => {
                    logAction("footerClick (Footer target)", {
                        tagName: target?.tagName,
                        className: target?.className,
                        textContent: target?.textContent?.trim()
                    });
                }
            },
            targetHtmlId: "dom-render-container",
            classToApply: "",
            appendPosition: "replace"
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
