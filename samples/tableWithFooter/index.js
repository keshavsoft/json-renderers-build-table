import render from "../../docs/dist/v13/min.js";

// import render from "../../src/index.js";

import data from "./batches.json" with { type: "json" };

const start = () => {
  try {
    const tableElement = render({
      targetHtmlId: "dom-render-container",
      columns: [
        { columnName: "itemName", label: "Item Name" },
        { columnName: "baseUnit", label: "Base Unit" }
      ],
      colGroup: [
        { width: "70%" },
        { width: "30%" }
      ],
      data: data.slice(0, 5)
    });

    console.log("Rendered table element: ", tableElement);
  } catch (err) {
    console.error("error : ", err);
  }
};

start();