import { withSerial } from "../../../docs/dist/v23/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

import data from "./data.json" with { type: "json" };
import columns from "./columns.json" with { type: "json" };

const container = document.getElementById("tableSerialId");

const showLog = false;
const returnLog = [];

const start = () => {
    try {
        const spec = withSerial({
            columns,
            data,
            serial: {
                col: { width: "60px" },
                header: { columnName: "S.No" }
            }
        }, showLog, returnLog);
        console.log("spec : ", spec);
        console.log("guard log : ", returnLog);

        const element = window.ks.jsonToTag.buildSpecElement(spec);
        container.appendChild(element);
    } catch (err) {
        console.error("Render error:", err);
        container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
    }
};

start();
