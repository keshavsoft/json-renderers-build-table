import "../../../docs/dist/v15/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";
import data from "../batches.json" with { type: "json" };

const container = document.getElementById("dom-render-container");

const start = () => {
    try {
        const renderer = window.ks.jsonRenderersBuildTable;
        const spec = renderer.tableFullGrid({
            columns: [
                { columnName: "itemName", width: "350px", template: { bodyCell: "buildBodyCell" } },
                { columnName: "baseUnit", width: "200px", template: { bodyCell: "buildBodyCell" } },
                { columnName: "batches", width: "120px", template: { bodyCell: "buttonCell" } }
            ],
            data: data.slice(0, 5),
            serial: {
                col: { width: "60px" },
                header: { columnName: "#" },
                body: {},
                footer: {}
            },
            options: {
                col: { width: "120px" },
                header: { columnName: "Options" },
                body: { columnName: "Show" },
                footer: { columnName: "Save" }
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
