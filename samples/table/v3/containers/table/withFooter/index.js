import columns from "./columns.json" with { type: "json" };
import data from "./data.json" with { type: "json" };

const start = () => {
    try {
        const options = {
            search: {
                showLabel: true,
                showHelper: true,
                showInput: true
            },
            serial: true,
            options: {
                showButton: true,
                showEditButton: true,
                showDeleteButton: true
            }
        };

        // 1. Initial Render of the complete Table With Footer
        window.ks.jsonRenderers.build.table.render({
            type: "table.withFooter",
            data,
            columns,
            options,
            targetHtmlId: "dom-render-container",
            classToApply: "",
            appendPosition: "replace"
        });

        // 2. Bind search events (self-contained: table discovery, drill down & surgical tbody repainting)
        window.ks.domEvents.table.bindTableEvents({
            container: "dom-render-container",
            data,
            columns,
            options
        });

    } catch (err) {
        console.error("Error in table.withFooter:", err);
    }
};

start();
