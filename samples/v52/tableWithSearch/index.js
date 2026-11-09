import instructions from "./instructions.json" with { type: "json" };
import bindings from "./bindings.json" with { type: "json" };
import actions from "./actions.js";
import initializeInstructionBindings from "./runtime.js";

window.v52Config = { instructions };

const root = document.querySelector(".v52-root");

const start = () => {
    try {
        actions.renderInitialTable();
        initializeInstructionBindings({
            root,
            bindings,
            instructions,
            actions
        });
    } catch (error) {
        console.error("V52 initialization failed:", error);
        const container = document.getElementById("dom-render-container");
        if (container) {
            const alert = document.createElement("div");
            alert.className = "alert alert-danger";
            alert.textContent = error.message;
            container.replaceChildren(alert);
        }
        const status = document.getElementById("v52-status");
        if (status) status.textContent = `Error: ${error.message}`;
    }
};

start();
