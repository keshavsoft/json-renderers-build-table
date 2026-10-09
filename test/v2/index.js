import assert from "node:assert/strict";
import render from "../../src/index.js";

const table = render({
    columns: ["itemName", "baseUnit"],
    data: [
        { itemName: "0.09/30mm", baseUnit: "kgs" },
        { itemName: "0.11-25", baseUnit: "kgs" }
    ]
});

assert.equal(table.tagName, "table");
assert.deepEqual(table.children.map(section => section.tagName), ["thead", "tbody"]);

const [thead, tbody] = table.children;
assert.equal(thead.children.length, 1);
assert.equal(thead.children[0].tagName, "tr");
assert.equal(thead.children[0].children[0].tagName, "th");
assert.equal(thead.children[0].children[0].textContent, "itemName");

assert.equal(tbody.children.length, 2);
assert.equal(tbody.children[0].tagName, "tr");
assert.equal(tbody.children[0].children[0].tagName, "td");
assert.equal(tbody.children[0].children[0].textContent, "0.09/30mm");

console.log("json-renderers-build-table v2 tests passed");
