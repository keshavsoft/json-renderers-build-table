import buildTable from "../../../docs/dist/v42/min.js";
import "https://keshavsoft.github.io/json-to-dom/dist/v42/min.js";

import data from "./data.json" with { type: "json" };
import columns from "./columns.json" with { type: "json" };

const container = document.getElementById("dom-render-container");

const start = () => {
    try {
        const spec = buildTable({
            type: "simple",
            data,
            columns,
            showLog: true,
            options: {
                showSerial: true,
                showOptions: false
            }
        });
        console.log("--------spec ------: ", spec);

        window.ks.jsonToDom.appendToDom({
            jsonSpec: spec,
            targetHtmlId: "dom-render-container",
            options: {},
            classToApply: "",
            appendPosition: "append",
        });

    } catch (err) {
        console.error("Render error:", err);
        container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
    }
};

start();
