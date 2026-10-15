import "../../../docs/dist/v15/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";
import data from "../batches.json" with { type: "json" };

const container = document.getElementById("dom-render-container");

const start = () => {
    try {
        const renderer = window.ks.jsonRenderersBuildTable;
        const spec = renderer.simpleTable({
            columns: [
                { columnName: "itemName" },
                { columnName: "baseUnit" }
            ],
            data: data.slice(0, 10)
        });

        const element = window.ks.jsonToTag.buildSpecElement(spec);
        container.appendChild(element);
    } catch (err) {
        console.error("Render error:", err);
        container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
    }
};

start();
