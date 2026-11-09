import twoDimension from "https://keshavsoft.github.io/json-transformer-funcs-two-dimensions/dist/v8/min.js";
import { models, activateTab } from "../../monacoEditor/index.js";
import { parseModel, renderJsonSpec, showError, updateTargetDropdown } from "../../shared/runtime.js";

export const actions = {
    renderBase: () => {
        try {
            const base = parseModel(models.base, "base.json");
            renderJsonSpec(base, "renderOutput", "replace");
            updateTargetDropdown();
            const select = document.getElementById("targetSelect");
            if (select && [...select.options].some((option) => option.value === "tableBody")) {
                select.value = "tableBody";
            }
        } catch (error) {
            showError(error);
        }
    },

    build: () => {
        try {
            const columns = parseModel(models.columns, "columns.json");
            const data = parseModel(models.data, "data.json");
            const columnSpec = parseModel(models.columnSpec, "columnSpec.json");
            const rowSpec = parseModel(models.rowSpec, "rowSpec.json");

            const rows = twoDimension({ columns, data, columnSpec, rowSpec });
            if (!Array.isArray(rows)) {
                throw new Error("The two-dimensional transformer did not return an array of rows.");
            }

            models.output.setValue(JSON.stringify(rows, null, 2));
            activateTab("tabOutput", models.output);

            const targetSelect = document.getElementById("targetSelect");
            const targetHtmlId = targetSelect?.value || "tableBody";
            renderJsonSpec(rows, targetHtmlId, "replace");
            updateTargetDropdown();
        } catch (error) {
            showError(error);
        }
    },

    clearDom: () => {
        const stage = document.getElementById("renderOutput");
        if (stage) {
            stage.innerHTML = `<div class="text-center text-muted py-5">
                <i class="bi bi-arrow-left-circle fs-2 text-primary d-block mb-2"></i>
                <p class="mb-0 fw-medium">Click <strong>render base</strong>, then <strong>build 2D</strong>.</p>
            </div>`;
        }
        updateTargetDropdown();
    },

    showTabBase: () => activateTab("tabBase", models.base),
    showTabColumns: () => activateTab("tabColumns", models.columns),
    showTabData: () => activateTab("tabData", models.data),
    showTabColumnSpec: () => activateTab("tabColumnSpec", models.columnSpec),
    showTabRowSpec: () => activateTab("tabRowSpec", models.rowSpec),
    showTabOutput: () => activateTab("tabOutput", models.output)
};

export default actions;
