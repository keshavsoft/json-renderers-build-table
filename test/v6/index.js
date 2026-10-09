import assert from "node:assert/strict";
import render, { renderRequests } from "../../src/index.js";

const table = render(structuredClone(renderRequests.tableWithFooter));
const [thead, tbody, tfoot] = table.children;

assert.equal(thead.tagName, "thead");
assert.equal(tbody.tagName, "tbody");
assert.equal(tfoot.tagName, "tfoot");
assert.equal(tfoot.children[0].children.length, renderRequests.tableWithFooter.columns.length);
assert.deepEqual(
    tfoot.children[0].children.map(cell => cell.children[0].tagName),
    ["input", "input"]
);
assert.deepEqual(
    tfoot.children[0].children.map(cell => cell.children[0].attributes.name),
    renderRequests.tableWithFooter.columns
);

const saveTable = render(structuredClone(renderRequests.tableWithFooterSave));
const saveFooter = saveTable.children[2];
assert.equal(saveFooter.tagName, "tfoot");
assert.equal(saveFooter.children[0].children.length, renderRequests.tableWithFooterSave.columns.length);
assert.equal(saveFooter.children[0].children.at(-1).children.at(-1).tagName, "button");
assert.equal(saveFooter.children[0].children.at(-1).children.at(-1).textContent, "Save");

const multipleFooterTable = render({
    ...structuredClone(renderRequests.tableWithFooter),
    options: { showFooter: true, showFooterSave: true }
});
assert.deepEqual(
    multipleFooterTable.children.slice(2).map(section => section.tagName),
    ["tfoot", "tfoot"]
);

const alignedTable = render({
    ...structuredClone(renderRequests.tableWithFooter),
    options: { showFooter: true, showSerial: true, showOptions: true }
});
assert.equal(
    alignedTable.children[2].children[0].children.length,
    alignedTable.children[0].children[0].children.length
);

const alignedSaveTable = render({
    ...structuredClone(renderRequests.tableWithFooterSave),
    options: { showFooterSave: true, showSerial: true, showOptions: true }
});
assert.equal(
    alignedSaveTable.children[2].children[0].children.length,
    alignedSaveTable.children[0].children[0].children.length
);

console.log("json-renderers-build-table v6 tests passed");
