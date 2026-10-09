import assert from "node:assert/strict";
import render from "../../src/index.js";

const button = {
    tagName: "button",
    attributes: { type: "button" },
    textContent: "Open"
};

const input = {
    tagName: "input",
    attributes: { type: "text", name: "name" }
};

const table = render({
    columns: ["Name", "Action"],
    data: [["Laptop", button]],
    footerData: [[input, ""]],
    options: {
        row: ({ inIndex }) => ({
            attributes: { "data-row-index": inIndex }
        })
    }
});

assert.equal(table.tagName, "table");
assert.deepEqual(table.children.map(section => section.tagName), ["thead", "tbody", "tfoot"]);
assert.equal(table.children[1].children[0].attributes["data-row-index"], 0);
assert.equal(table.children[1].children[0].children[1].children[0].tagName, "button");
assert.equal(table.children[2].children[0].children[0].children[0].tagName, "input");

console.log("json-renderers-build-table v1 tests passed");
