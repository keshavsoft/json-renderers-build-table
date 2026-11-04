import { withFooter } from "../../../docs/dist/v25/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

import columns from "./columns.json" with { type: "json" };
import data from "./data.json" with { type: "json" };

const start = () => {
  const container = document.getElementById("dom-render-container");
  const status = document.getElementById("status");

  try {
    // Build the table specification using the table renderer.
    const tableSpec = withFooter({
      type: "table.withFooter", columns, data,
      options: {
        showSerial: false,
        showOptions: false
      },
      showLog: true
    });
    const table = window.ks.jsonToTag.buildSpecElement(tableSpec);
    container.replaceChildren(table);
  } catch (error) {
    console.error(error);
    status.className = "alert alert-danger py-2";
    status.textContent = `Example failed: ${error.message}`;
  }
};

start();