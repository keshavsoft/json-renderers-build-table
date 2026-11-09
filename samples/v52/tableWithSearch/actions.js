import render from "../../../docs/dist/v48/min.js";
import data from "./common/data.json" with { type: "json" };
import columns from "./common/columns.json" with { type: "json" };

const setStatus = (message) => {
    const status = document.getElementById("v52-status");
    if (status) status.textContent = message;
};

const captureQuery = (query) => {
    if (query === null || query === undefined) return;
    const output = document.getElementById("v52-query");
    if (output) output.textContent = JSON.stringify({ query }, null, 2);
    setStatus("Search Enter captured. Filtering is not part of this experiment.");
};

const clearBody = (tbody) => {
    if (!tbody) {
        setStatus("Could not locate the live table body.");
        return;
    }
    tbody.replaceChildren();
    setStatus("Cleared tbody only. Header and search remain.");
};

const showBody = (liveTbody) => {
    if (!liveTbody) {
        setStatus("Could not locate the live table body.");
        return;
    }

    const stagingId = "v52-staging";
    render({
        type: "table.simple",
        data,
        columns,
        options: { showSerial: true, showSearch: false, showOptions: false },
        targetHtmlId: stagingId,
        classToApply: "",
        appendPosition: "replace"
    });

    const staging = document.getElementById(stagingId);
    const generatedTbody = staging?.querySelector("tbody");
    if (!generatedTbody) {
        setStatus("Existing renderer did not produce a staging tbody.");
        return;
    }

    liveTbody.replaceChildren(...Array.from(generatedTbody.childNodes));
    setStatus("Body restored through the existing V48 renderer and JSON-to-DOM pipeline.");
};

const renderInitialTable = () => {
    const spec = window.v52Config.instructions.startup;
    render({
        type: spec.type,
        data,
        columns,
        options: spec.options,
        targetHtmlId: "dom-render-container",
        classToApply: spec.classToApply,
        appendPosition: spec.appendPosition
    });
    setStatus("V52 ready. Search + Enter, Clear Body, or Show Body.");
};

const actions = {
    renderInitialTable,
    captureQuery,
    clearBody,
    showBody
};

export { actions, renderInitialTable, captureQuery, clearBody, showBody };
export default actions;
