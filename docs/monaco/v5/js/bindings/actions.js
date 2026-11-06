import { models, activateTab, editor } from "../monacoEditor/index.js";
import twoDimension from "https://keshavsoft.github.io/json-transformer-funcs-two-dimensions/dist/v8/min.js";

function updateTargetDropdown() {
    const stage = document.getElementById("renderOutput");
    const select = document.getElementById("targetSelect");
    if (!stage || !select) return;

    const previous = select.value || "tableBody";
    const ids = new Map();
    stage.querySelectorAll("[id]").forEach((node) => ids.set(node.id, node.tagName.toLowerCase()));

    // Also scan data-role elements so spec definitions without explicit IDs are targetable
    stage.querySelectorAll("[data-role]").forEach((node) => {
        if (!node.id) {
            node.id = node.getAttribute("data-role") === "table-body" ? "tableBody" : node.getAttribute("data-role");
        }
        ids.set(node.id, `${node.tagName.toLowerCase()} [${node.getAttribute("data-role")}]`);
    });

    select.innerHTML = "";
    for (const [id, tag] of ids) {
        const option = document.createElement("option");
        option.value = id;
        option.textContent = `#${id} (${tag})`;
        select.appendChild(option);
    }
    select.value = ids.has(previous) ? previous : (ids.has("tableBody") ? "tableBody" : (ids.has("table-body") ? "table-body" : "renderOutput"));
}

export function updateSubTypeDropdown() {
    const definitions = window.ks?.specs?.jsonFiles?.definitions;
    const mainSelect = document.getElementById("mainTypeSelect");
    const subSelect = document.getElementById("subTypeSelect");
    if (!definitions || !mainSelect || !subSelect) return;

    const mainType = mainSelect.value;
    const entry = definitions[mainType];
    subSelect.innerHTML = "";

    if (entry && typeof entry === "object") {
        const subKeys = Object.keys(entry).filter((k) => {
            const val = entry[k];
            return typeof val === "object" && val !== null && !val.tagName;
        });

        if (subKeys.length > 0) {
            subKeys.forEach((key) => {
                const opt = document.createElement("option");
                opt.value = key;
                opt.textContent = key;
                subSelect.appendChild(opt);
            });
            if (subKeys.includes("simple")) {
                subSelect.value = "simple";
            }
        } else {
            const opt = document.createElement("option");
            opt.value = "default";
            opt.textContent = "default";
            subSelect.appendChild(opt);
        }
    }
}

export function fillFromDefinition() {
    const definitions = window.ks?.specs?.jsonFiles?.definitions;
    const spec = window.ks?.specs?.jsonFiles?.spec;
    if (!definitions) {
        showError(new Error("Definitions from spec-repo are not available yet."));
        return;
    }

    const mainSelect = document.getElementById("mainTypeSelect");
    const subSelect = document.getElementById("subTypeSelect");
    if (!mainSelect || !subSelect) return;

    const mainType = mainSelect.value;
    const subType = subSelect.value;

    let targetDef = null;
    if (definitions[mainType]?.[subType]) {
        targetDef = definitions[mainType][subType];
    } else if (definitions[mainType]) {
        targetDef = definitions[mainType];
    }

    if (!targetDef) {
        showError(new Error(`Definition not found for ${mainType} / ${subType}`));
        return;
    }

    // 1. Fill base.json
    if (targetDef.base && models.base) {
        models.base.setValue(JSON.stringify(targetDef.base, null, 2) + "\n");
    }

    // 2. Fill columnSpec.json & rowSpec.json from spec if available
    if (spec) {
        if (spec.buildBodyCell && models.columnSpec) {
            models.columnSpec.setValue(JSON.stringify(spec.buildBodyCell, null, 2) + "\n");
        }
        if (spec.buildBodyTr && models.rowSpec) {
            models.rowSpec.setValue(JSON.stringify(spec.buildBodyTr, null, 2) + "\n");
        }
    }

    // Activate base tab to view filled content in Monaco
    activateTab("tabBase", models.base);
}

export function populateDefinitionsSelectors() {
    const tryPopulate = () => {
        const definitions = window.ks?.specs?.jsonFiles?.definitions;
        if (!definitions) {
            setTimeout(tryPopulate, 100);
            return;
        }

        const mainSelect = document.getElementById("mainTypeSelect");
        if (!mainSelect) return;

        mainSelect.innerHTML = "";
        const mainKeys = Object.keys(definitions);
        mainKeys.forEach((key) => {
            const opt = document.createElement("option");
            opt.value = key;
            opt.textContent = key;
            mainSelect.appendChild(opt);
        });

        if (mainKeys.includes("table")) {
            mainSelect.value = "table";
        }

        updateSubTypeDropdown();
    };

    tryPopulate();
}

function renderJsonSpec(jsonSpec, targetHtmlId, appendPosition = "replace") {
    const renderer = window.ks?.jsonToDom;
    if (!renderer?.appendToDom) {
        throw new Error("JSON-to-DOM renderer is not available. Check the json-to-dom script.");
    }
    renderer.appendToDom({
        jsonSpec,
        targetHtmlId,
        appendPosition,
        showLog: false
    });
}

function parseModel(model, label) {
    try {
        return JSON.parse(model.getValue());
    } catch (error) {
        throw new Error(`${label} contains invalid JSON: ${error.message}`);
    }
}

function showError(error) {
    const stage = document.getElementById("renderOutput");
    if (stage) {
        stage.innerHTML = `<div class="alert alert-danger font-monospace small" role="alert">
            <strong>Playground error:</strong><div class="mt-1"></div></div>`;
        stage.querySelector(".mt-1").textContent = error.message;
    }
    console.error(error);
}

export const actions = {
    onMainTypeChange: () => {
        updateSubTypeDropdown();
    },

    fillFromDefinition: () => {
        fillFromDefinition();
    },

    renderBase: () => {
        try {
            const base = parseModel(models.base, "base.json");
            renderJsonSpec(base, "renderOutput", "replace");
            updateTargetDropdown();
            const select = document.getElementById("targetSelect");
            if (select && [...select.options].some(option => option.value === "tableBody")) {
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

            // The playground calls only the two-dimensional package.
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
