import { simple } from "../../../docs/dist/v17/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";
import data from "./batches.json" with { type: "json" };

const container = document.getElementById("dom-render-container");

const start = () => {
    try {
        // const renderer = window.ks.jsonRenderersBuildTable;
        const spec = simple({
            columns: [{
                columnName: "itemName", width: "300px", template: {
                    body: {
                        tr: "buildBodyTr",
                        cell: "buildBodyCell"
                    }
                }
            },
            {
                columnName: "baseUnit", width: "200px", template: {
                    body: {
                        tr: "buildBodyTr",
                        cell: "buildBodyCell"
                    }
                }
            },
            {
                columnName: "batches", width: "100px", template: {
                    body: {
                        tr: "buildBodyTr",
                        cell: "buttonCell"
                    }
                }
            }
            ],
            data: data.slice(0, 10)
        });
        console.log("spec : ", spec);

        const element = window.ks.jsonToTag.buildSpecElement(spec);
        container.appendChild(element);
    } catch (err) {
        console.error("Render error:", err);
        container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
    }
};

start();
