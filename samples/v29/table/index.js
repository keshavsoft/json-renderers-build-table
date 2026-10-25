import { simple } from "../../../docs/dist/v29/min.js";

import "https://keshavsoft.github.io/json-to-dom/dist/v42/min.js";

import data from "./data.json" with {type: "json"};
import columns from "./columns.json" with {type: "json"};

const start = () => {
  const container = document.getElementById("dom-render-container");
  const status = document.getElementById("status");

  try {
    // Build the table specification using the table renderer.
    const spec = simple({
      columns, data,
      targetHtmlId: "dom-render-container",
      classToApply: "",
      appendPosition: "",
      options: {
        showSerial: false
      },
      showLog: true
    });

    window.ks.jsonToDom.appendToDom({
      jsonSpec: spec,
      targetHtmlId: "dom-render-container",
      appendPosition: "append", showLog: false
    });

    console.log("aaaaaaaaa : ", spec);

  } catch (error) {
    console.error(error);
  }
};

start();
