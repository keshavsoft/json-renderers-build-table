import columns from "./columns.json" with { type: "json" };
import data from "./data.json" with { type: "json" };
import "../../../../../../docs/dist/v57/min.js";
import { bindTableEvents } from "../../../../../../../dom-table-events-search/src/v2/index.js";

const start = () => {
    try {
        // 1. Initial Render of the complete Table Simple
        window.ks.jsonRenderers.build.table.render({
            type: "table.simple",
            data,
            columns,
            options: {
                search: {
                    showLabel: true,
                    showHelper: true,
                    showInput: true
                },
                serial: true
            },
            targetHtmlId: "dom-render-container",
            classToApply: "",
            appendPosition: "replace"
        });

        // 2. Bind search events (self-contained: table discovery, drill down & surgical tbody repainting)
        bindTableEvents({
            container: "dom-render-container",
            dataset: [...data],
            columns,
            options: { serial: true }
        });

    } catch (err) {
        console.error("Error in table.simple:", err);
    }
};

start();
