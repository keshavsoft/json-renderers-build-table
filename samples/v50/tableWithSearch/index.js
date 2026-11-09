import renderTable from "./operations/render/index.js";
import bindSearch from "./operations/search/index.js";
import bindClearBody from "./operations/clearBody/index.js";
import bindShowBody from "./operations/showBody/index.js";

const root = document.querySelector(".v50-root");
const statusEl = document.getElementById("v50-status");
const queryEl = document.getElementById("v50-query");
const liveContainer = document.getElementById("dom-render-container");

const setStatus = (message) => {
    statusEl.textContent = message;
};

const start = () => {
    try {
        renderTable();

        bindSearch(root, {
            onQuery: (query) => {
                queryEl.textContent = JSON.stringify({ query }, null, 2);
            },
            onStatus: setStatus
        });

        bindClearBody(root, { onStatus: setStatus });
        bindShowBody(root, { onStatus: setStatus });

        setStatus("V50 ready. Press Enter in Search, or Clear/Show Body.");
    } catch (error) {
        console.error("V50 error:", error);
        liveContainer.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
        setStatus(`Error: ${error.message}`);
    }
};

start();
