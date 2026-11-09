import { models, activateTab } from "../monacoEditor/index.js";

export function renderJsonSpec(jsonSpec, targetHtmlId, appendPosition = "replace") {
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

export function parseModel(model, label) {
    try {
        return JSON.parse(model.getValue());
    } catch (error) {
        throw new Error(`${label} contains invalid JSON: ${error.message}`);
    }
}

export function showError(error) {
    const stage = document.getElementById("renderOutput");
    if (stage) {
        stage.innerHTML = `<div class="alert alert-danger font-monospace small" role="alert">
            <strong>Playground error:</strong><div class="mt-1"></div></div>`;
        stage.querySelector(".mt-1").textContent = error.message;
    }
    console.error(error);
}

export function updateTargetDropdown() {
    const stage = document.getElementById("renderOutput");
    const select = document.getElementById("targetSelect");
    if (!stage || !select) return;

    const previous = select.value || "tableBody";
    const ids = new Map();
    stage.querySelectorAll("[id]").forEach((node) => ids.set(node.id, node.tagName.toLowerCase()));

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

export function activateModelTab(tabId, model) {
    activateTab(tabId, model);
}
