// import render from "../../src/index.js";
import "https://keshavsoft.github.io/json-renderers/dist/v19/min.js";
// import { readRow, readFooter } from "https://keshavsoft.github.io/dom-primitive-engine/dist/v12/min.js";

import { readRow, readFooter } from "https://keshavsoft.github.io/dom-primitive-engine/dist/v12/min.js?v=20261022a";

import columns from "./columns.json" with { type: "json" };
import data from "./data.json" with { type: "json" };

const container = document.getElementById("table-container");
const output = document.getElementById("event-result");

window.ks.jsonRenderers.render({
  targetHtmlId: "table-container",
  type: "table.simple",
  columns,
  data,
  appendPosition: "",
  classToApply: "",
  options: {
    showOptions: true,
    showFooter: true,
    showFooterSave: true
  }
});

container.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button || !container.contains(button)) return;

  const label = button.textContent.trim().toLowerCase();

  try {
    if (label === "save") {
      const result = readFooter(button);
      output.textContent = JSON.stringify({ action: "footer-save", data: result }, null, 2);
      return;
    }

    if (label === "show") {
      const result = readRow(button, columns.map(column => column.columnName));
      output.textContent = JSON.stringify({ action: "row-options", data: result }, null, 2);
    }
  } catch (error) {
    output.textContent = `${error.name}: ${error.message}`;
    console.error(error);
  }
});
