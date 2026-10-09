// import render from "../../src/index.js";
import render from "../../docs/dist/v8/min.js";

import "https://cdn.jsdelivr.net/gh/keshavsoft/json-renderers@main/docs/dist/v12/min.js";

import data from "./batches.json" with { type: "json" };

const start = () => {
  try {
    // window.ks.jsonRenderers.renderToDom({
    //   type: "table",
    //   data,
    //   targetHtmlId: "dom-render-container"
    // });

    const createControl = render({
      type: "table",
      data: data.slice(0, 10), columns: ["Name"]
    });
    console.log("createControl : ", createControl);

    const container = document.getElementById("dom-render-container");
    if (container) {
      container.innerHTML = `
        <div class="card shadow-sm border-0">
          <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center py-2">
            <span class="font-monospace small">Generated specAsJsonToDom (first 10 records)</span>
            <span class="badge bg-success">Type: table</span>
          </div>
          <div class="card-body p-0">
            <pre class="m-0 p-3 bg-light font-monospace small" style="max-height: 500px; overflow: auto;"><code>${JSON.stringify(createControl, null, 2)}</code></pre>
          </div>
        </div>
      `;
    }

  } catch (err) {
    console.log("error : ", err);
    const container = document.getElementById("dom-render-container");
    if (container) {
      container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
    }
  }
};

start();