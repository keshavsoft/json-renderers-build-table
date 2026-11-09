import { models, activateTab } from "../../monacoEditor/index.js";
import { showError } from "../../shared/runtime.js";

export function updateSubTypeDropdown() {
    const definitions = window.ks?.specs?.jsonFiles?.definitions;
    const mainSelect = document.getElementById("mainTypeSelect");
    const subSelect = document.getElementById("subTypeSelect");
    if (!definitions || !mainSelect || !subSelect) return;

    const mainType = mainSelect.value;
    const entry = definitions[mainType];
    subSelect.innerHTML = "";

    if (entry && typeof entry === "object") {
        const subKeys = Object.keys(entry).filter((key) => {
            const value = entry[key];
            return typeof value === "object" && value !== null && !value.tagName;
        });

        if (subKeys.length > 0) {
            subKeys.forEach((key) => {
                const option = document.createElement("option");
                option.value = key;
                option.textContent = key;
                subSelect.appendChild(option);
            });
            if (subKeys.includes("simple")) {
                subSelect.value = "simple";
            }
        } else {
            const option = document.createElement("option");
            option.value = "default";
            option.textContent = "default";
            subSelect.appendChild(option);
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

    if (targetDef.base && models.base) {
        models.base.setValue(JSON.stringify(targetDef.base, null, 2) + "\n");
    }

    if (spec) {
        if (spec.buildBodyCell && models.columnSpec) {
            models.columnSpec.setValue(JSON.stringify(spec.buildBodyCell, null, 2) + "\n");
        }
        if (spec.buildBodyTr && models.rowSpec) {
            models.rowSpec.setValue(JSON.stringify(spec.buildBodyTr, null, 2) + "\n");
        }
    }

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
            const option = document.createElement("option");
            option.value = key;
            option.textContent = key;
            mainSelect.appendChild(option);
        });

        if (mainKeys.includes("table")) {
            mainSelect.value = "table";
        }

        updateSubTypeDropdown();
    };

    tryPopulate();
}

export const actions = {
    onMainTypeChange: () => {
        updateSubTypeDropdown();
    },
    fillFromDefinition: () => {
        fillFromDefinition();
    },
    populateDefinitionsSelectors: () => {
        populateDefinitionsSelectors();
    }
};

export default actions;
