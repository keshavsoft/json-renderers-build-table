import render from "../../src/index.js";
import data from "./batches.json" with { type: "json" };

const start = () => {
  try {
    const createControl = render({
      type: "table",
      columns: ["itemName", "baseUnit"],
      data: data.slice(0, 5)
    });

    console.log("createControl : ", JSON.stringify(createControl, null, 2));

  } catch (err) {
    console.log("error : ", err);
  }
};

start();