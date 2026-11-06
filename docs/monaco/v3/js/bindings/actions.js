import { models, activateTab } from "../monacoEditor/index.js";
import render from "../../../../dist/min.js";

function showToast(message) {
    const banner = document.getElementById("extractionToast");
    if (banner) {
        banner.textContent = message;
        banner.classList.remove("d-none");
        setTimeout(() => banner.classList.add("d-none"), 3000);
    }
}

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

    showRow: (event, matchElement) => {
        const button = matchElement || event?.target;
        const tr = button?.closest("tr");
        if (!tr) return;

        // Visual row highlight
        document.querySelectorAll("#tableRenderContainer tbody tr").forEach(r => r.classList.remove("table-primary"));
        tr.classList.add("table-primary");

        // Extract cells according to instructions.json schema
        const cells = Array.from(tr.querySelectorAll("td"));
        const columns = JSON.parse(models.columns.getValue() || "[]");

        const rowData = {};
        if (cells.length > 0) {
            rowData["#"] = cells[0].textContent.trim();
        }

        columns.forEach((col, idx) => {
            const cell = cells[idx + 1];
            if (cell) {
                const input = cell.querySelector("input, select");
                rowData[col.columnName] = input ? input.value : cell.textContent.trim();
            }
        });

        // Populate extracted data into Monaco output.json and switch to output tab
        models.output.setValue(JSON.stringify({
            event: "showRow",
            source: "dom-primitive-engine extraction",
            timestamp: new Date().toISOString(),
            extracted: rowData
        }, null, 2));
        activateTab("tabOutput", models.output);

        showToast(`Extracted: ${rowData.itemName || "Row " + (rowData["#"] || "")}`);
    },

    saveTable: () => {
        const rows = Array.from(document.querySelectorAll("#tableRenderContainer tbody tr"));
        const columns = JSON.parse(models.columns.getValue() || "[]");

        const tableData = rows.map((tr) => {
            const cells = Array.from(tr.querySelectorAll("td"));
            const rowData = {};
            columns.forEach((col, idx) => {
                const cell = cells[idx + 1];
                if (cell) {
                    const input = cell.querySelector("input, select");
                    rowData[col.columnName] = input ? input.value : cell.textContent.trim();
                }
            });
            return rowData;
        });

        // Populate extracted dataset into Monaco output.json and switch to output tab
        models.output.setValue(JSON.stringify({
            event: "saveTable",
            source: "dom-primitive-engine batch extraction",
            recordCount: tableData.length,
            timestamp: new Date().toISOString(),
            dataset: tableData
        }, null, 2));
        activateTab("tabOutput", models.output);

        showToast(`Saved & extracted ${tableData.length} records!`);
    },

    showTabColumns: () => activateTab("tabColumns", models.columns),
    showTabData: () => activateTab("tabData", models.data),
    showTabBindings: () => activateTab("tabBindings", models.bindings),
    showTabInstructions: () => activateTab("tabInstructions", models.instructions),
    showTabOutput: () => activateTab("tabOutput", models.output)
};

export default actions;