import "../../../docs/dist/v15/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";
import data from "../batches.json" with { type: "json" };

const container = document.getElementById("dom-render-container");

const start = () => {
    try {
        const renderer = window.ks.jsonRenderersBuildTable;
        const spec = renderer.tableWithOptions({
            columns: [
                { columnName: "itemName", width: "400px" },
                { columnName: "baseUnit", width: "200px" }
            ],
            data: data.slice(0, 10),
            options: {
                col: { width: "120px" },
                header: { columnName: "Actions" },
                body: { columnName: "View" }
            }
        });

        const element = window.ks.jsonToTag.buildSpecElement(spec);
        container.appendChild(element);
    } catch (err) {
        console.error("Render error:", err);
        container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
    }
};

start();
