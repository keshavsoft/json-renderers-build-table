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
            },
            showFooter: false
        };

        // 1. Initial Render of the complete Table With Footer
        window.ks.jsonRenderers.build.table.render({
            data,
            columns,
            options,
            targetHtmlId: "dom-render-container",
            classToApply: "",
            appendPosition: "replace"
        });
    } catch (err) {
        console.error("Error in table.withFooter:", err);
    }
};

start();
