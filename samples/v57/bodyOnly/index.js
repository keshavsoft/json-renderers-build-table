import columns from "./columns.json" with { type: "json" };
import data from "./data.json" with { type: "json" };
import { render } from "../../../docs/dist/v57/min.js";

render({
    data,
    columns,
    targetHtmlId: "dom-render-container",
    type: "table.bodyOnly",
    options: {
        serial: true
    },
    appendPosition: "replace",
    classToApply: ""
});
