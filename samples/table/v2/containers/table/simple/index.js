import columns from "./columns.json" with { type: "json" };
import data from "./data.json" with { type: "json" };
import "../../../../../../docs/dist/v57/min.js";
import { bindTableEvents } from "./domTableEvents/index.js";

// Body instruction keys: pulled directly to build/repaint only the table body
const bodyInstruction = {
    instructionMainKey: "table",
    instructionSubKey: "bodyOnly"
};

const start = () => {
    try {
        // 1. Initial Render of the complete Table Simple
        window.ks.jsonRenderers.build.table.render({
            type: "table.simple",
            data,
            columns,
            options: {
                search: {
                    showLabel: true,
                    showHelper: true,
                    showInput: true
                },
                serial: true
            },
            targetHtmlId: "dom-render-container",
            classToApply: "",
            appendPosition: "replace"
        });

        // 2. Surgical Body-Only Repainter
        // Pulls the body instruction directly, runs it via window.ks, builds the <tbody> DOM, and swaps in-place!
        const repaintBody = (filteredRecords) => {
            const container = document.getElementById("dom-render-container");
            const currentTbody = container?.querySelector("tbody");
            if (!currentTbody) return;

            // Run instructions directly via window.ks to get the updated body spec
            const spec = window.ks.jsonRenderers.runInstructions.render.renderFunc({
                instructionMainKey: bodyInstruction.instructionMainKey,
                instructionSubKey: bodyInstruction.instructionSubKey,
                data: {
                    data: filteredRecords,
                    columns
                },
                options: {
                    serial: true
                }
            });

            // Extract tbody spec and convert directly to DOM element via jsonToTag
            const tbodySpec = spec?.children?.find((child) => child.tagName === "tbody") || spec;
            const newTbody = window.ks.jsonToTag.buildSpecElement(tbodySpec);

            // Surgically replace only the table body in the DOM
            if (newTbody) {
                currentTbody.replaceWith(newTbody);
            }
        };

        // 3. Bind search event from dom-table-events
        bindTableEvents({
            container: "dom-render-container",
            dataset: [...data],
            columns,
            renderTable: repaintBody
        });

    } catch (err) {
        console.error("Error in table.simple:", err);
    }
};

start();
