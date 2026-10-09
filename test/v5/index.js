import assert from "node:assert/strict";
import render, { renderRequests } from "../../src/index.js";

assert.equal(render.requests, renderRequests);

for (const request of Object.values(renderRequests)) {
    assert.ok(["table", "tableHead", "tableBody"].includes(request.type));
    assert.ok(Array.isArray(request.data));
    assert.ok(Array.isArray(request.columns));
    assert.equal(typeof request.options, "object");
}

const serialAndActions = render(structuredClone(renderRequests.tableWithSerialAndActions));
assert.equal(serialAndActions.children[0].children[0].children[0].textContent, "#");
assert.equal(serialAndActions.children[1].children[0].children[0].textContent, "1");
assert.equal(serialAndActions.children[1].children[0].children.at(-1).children[0].textContent, "Show");

assert.equal(render(renderRequests.tableHead).tagName, "thead");
assert.equal(render(renderRequests.tableBody).tagName, "tbody");

console.log("json-renderers-build-table v5 tests passed");
