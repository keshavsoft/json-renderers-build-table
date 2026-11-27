import columns from "./columns.json" with { type: "json" };
import data from "./data.json" with { type: "json" };

const start = () => {
    try {
        // 1. Initial Render of the complete Table Simple
        window.ks.jsonRenderers.build.table.render({
            type: "simpleSortable",
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
        console.error("Error in table.simple:", err);
    }
};

start();
