import { footerOnly } from "../../../docs/dist/v22/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

import data from "./data.json" with { type: "json" };
import columns from "./columns.json" with { type: "json" };

const container = document.getElementById("tableFooterId");

const showLog = false;
const returnLog = [];

const start = () => {
    try {
        // const renderer = window.ks.jsonRenderersBuildTable;
        const spec = footerOnly({
            columns,
            data
        }, showLog, returnLog);
        console.log("spec ---------: ", spec);


        const element = window.ks.jsonToTag.buildSpecElement(spec);
        console.log("element log : ", element);

        container.append(...element);
    } catch (err) {
        console.error("Render error:", err);
        container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
    }
};

start();
