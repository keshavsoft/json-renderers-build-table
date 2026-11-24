import columns from "./columns.json" with { type: "json" };
import data from "./data.json" with { type: "json" };
import { render } from "../../../docs/dist/v58/min.js";

render({
    data,
    columns,
    targetHtmlId: "dom-render-container",
    type: "table.simple",
    options: {
        search: { showLabel: true, showHelper: true, showInput: true },
        serial: true,
        options: { showButton: true, showEditButton: true, showDeleteButton: true }
    },
    appendPosition: "replace",
    classToApply: ""
});
