import columns from "./columns.json" with { type: "json" };
import data from "./data.json" with { type: "json" };
import "../../../../../../docs/dist/v57/min.js";

const start = () => {
    try {
        window.ks.jsonRenderers.build.table.render({
            type: "table.withFooter",
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
    } catch (err) {
        console.error("Error in table.withFooter:", err);
    }
};

start();
