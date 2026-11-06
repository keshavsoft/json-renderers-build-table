import { models, activateTab } from "../monacoEditor/index.js";
// import render from "../../../../dist/v47/min.js";
import render from "https://keshavsoft.github.io/json-renderers-build-table/dist/v48/min.js";

export const actions = {
    loadColumns: async () => {
        const response = await fetch("./columns.json");
        const json = await response.json();

        models.columns.setValue(JSON.stringify(json, null, 2));
        activateTab("tabColumns", models.columns);
    },

    loadData: async () => {
        const response = await fetch("./data.json");
        const json = await response.json();

        models.data.setValue(JSON.stringify(json, null, 2));
        activateTab("tabData", models.data);
    },

    renderTable: () => {
        try {
            const columns = JSON.parse(models.columns.getValue());
            const data = JSON.parse(models.data.getValue());

            const container = document.getElementById("tableRenderContainer");
            if (container) {
                container.innerHTML = "";
            }

            render({
                type: "table.simple",
                data,
                columns,
                options: {
                    showSerial: true,
                    showOptions: true
                },
                targetHtmlId: "tableRenderContainer",
                appendPosition: "replace",
                classToApply: ""
            });
        } catch (err) {
            console.error("Render table error:", err);
            const container = document.getElementById("tableRenderContainer");
            if (container) {
                container.innerHTML = `
                    <div class="alert alert-danger font-monospace small my-3" role="alert">
                        <strong><i class="bi bi-exclamation-triangle me-1"></i>Render Error:</strong>
                        <div class="mt-1">${err.message}</div>
                    </div>`;
            }
        }
    },

    showTabColumns: () => {
        activateTab("tabColumns", models.columns);
    },

    showTabData: () => {
        activateTab("tabData", models.data);
    }
};

export default actions;
