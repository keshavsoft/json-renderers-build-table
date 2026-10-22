import { simple } from "../../../docs/dist/v25/min.js";
import "https://keshavsoft.github.io/json-renderers/dist/v19/min.js";

import data from "./data.json" with { type: "json" };
import columns from "./columns.json" with { type: "json" };

const container = document.getElementById("dom-render-container");

const showLog = false;
const returnLog = [];

const start = () => {
    try {

        window.ks.jsonRenderers.render({
            type: "table.simple", columns, data,
            targetHtmlId: "dom-render-container",
            options: {},
            classToApply: "",
            appendPosition: "",
        });

    } catch (err) {
        console.error("Render error:", err);
        container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
    }
};

start();
