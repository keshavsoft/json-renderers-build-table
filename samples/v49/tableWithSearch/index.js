import render from "../../../docs/dist/v48/min.js";
import { bindEvents } from "../common/dom-primitive-bindings.min.js";
import runInstructions from "../common/dom-primitive-engine.min.js";
import data from "../common/data.json" with { type: "json" };
import columns from "../common/columns.json" with { type: "json" };
import instructions from "./instructions.json" with { type: "json" };

const root = document.querySelector("main");
const statusEl = document.getElementById("v49-status");
const queryEl = document.getElementById("v49-query");
const liveContainer = document.getElementById("dom-render-container");
const staging = document.getElementById("v49-staging");

const setStatus = (message) => {
    statusEl.textContent = message;
};

const renderTable = (targetHtmlId, options) => render({
    type: "table.simple",
    data,
    columns,
    options,
    targetHtmlId,
    classToApply: "",
    appendPosition: "replace"
});

const start = () => {
    try {
        renderTable("dom-render-container", {
            showSerial: true,
            showSearch: true,
            showOptions: false
        });

        bindEvents(root, [
            {
                event: "keydown",
                selector: "#dom-render-container input",
                root: "event",
                runner: runInstructions,
                instructions: instructions.searchEnter,
                onExtract: (query) => {
                    if (query === null) return;
                    queryEl.textContent = JSON.stringify({ query }, null, 2);
                    setStatus("Search Enter captured. No filtering is applied in V49.");
                }
            },
            {
                event: "click",
                selector: "#clear-body",
                runner: runInstructions,
                instructions: instructions.findLiveBody,
                onExtract: (tbody) => {
                    if (!tbody) {
                        setStatus("Could not locate the live table body.");
                        return;
                    }
                    tbody.replaceChildren();
                    setStatus("Cleared tbody only. Table header and search remain.");
                }
            },
            {
                event: "click",
                selector: "#show-body",
                runner: runInstructions,
                instructions: instructions.findLiveBody,
                onExtract: (liveTbody) => {
                    if (!liveTbody) {
                        setStatus("Could not locate the live table body.");
                        return;
                    }

                    // The existing V48 renderer and its JSON-to-DOM pipeline
                    // generate the rows in a staging table. No tr/td is authored here.
                    renderTable("v49-staging", {
                        showSerial: true,
                        showSearch: false,
                        showOptions: false
                    });

                    const generatedTbody = staging.querySelector("tbody");
                    if (!generatedTbody) {
                        setStatus("Renderer did not produce a staging tbody.");
                        return;
                    }

                    liveTbody.replaceChildren(...Array.from(generatedTbody.childNodes));
                    setStatus("Body restored using the existing V48 renderer.");
                }
            }
        ]);

        setStatus("Table rendered. Press Enter in Search, or Clear/Show Body.");
    } catch (error) {
        console.error("V49 error:", error);
        liveContainer.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
        setStatus(`Error: ${error.message}`);
    }
};

start();
