import assert from "node:assert/strict";

// Setup minimal DOM mock for Node testing
class MockElement {
    constructor(tagName) {
        this.tagName = String(tagName).toUpperCase();
        this.children = [];
        this.attributes = {};
        this.innerHTML = "";
        this.textContent = "";
        this.classList = {
            add: (cls) => {
                const cur = this.attributes["class"] || "";
                this.attributes["class"] = cur ? `${cur} ${cls}` : cls;
            }
        };
    }
    append(...children) {
        this.children.push(...children);
    }
    appendChild(child) {
        this.children.push(child);
        return child;
    }
    setAttribute(name, value) {
        this.attributes[name] = value;
    }
    getAttribute(name) {
        return this.attributes[name];
    }
}

const mockContainers = new Map();
globalThis.document = {
    createElement(tag) {
        return new MockElement(tag);
    },
    createTextNode(text) {
        return { textContent: String(text) };
    },
    getElementById(id) {
        if (!mockContainers.has(id)) {
            mockContainers.set(id, new MockElement("div"));
        }
        return mockContainers.get(id);
    }
};

import render, { renderTable } from "../../src/v9/index.js";

console.log("--- Running v9 tests (copied renderer from json-to-tag-table with colgroup) ---");

const testColumns = [
    { key: "item", label: "Item Name" },
    { key: "qty", label: "Quantity" }
];
const testData = [
    { item: "Apples", qty: 10 },
    { item: "Oranges", qty: 25 }
];

// Test 1: renderTable returns compiled element with colgroup
const elementWithColGroup = renderTable({
    inColumns: testColumns,
    inData: testData,
    inColGroup: [{ width: "70%" }, { width: "30%" }]
});

assert.ok(elementWithColGroup, "Should return rendered element");
assert.equal(elementWithColGroup.tagName, "TABLE");
assert.equal(elementWithColGroup.children[0].tagName, "COLGROUP");
assert.equal(elementWithColGroup.children[0].children.length, 2);
assert.equal(elementWithColGroup.children[0].children[0].tagName, "COL");
assert.equal(elementWithColGroup.children[1].tagName, "THEAD");
assert.equal(elementWithColGroup.children[2].tagName, "TBODY");

console.log("✓ Test 1 Passed: renderTable successfully creates <colgroup> before <thead> with <col> widths.");

// Test 2: render() with targetHtmlId mounts into DOM
const renderedElement = render({
    targetHtmlId: "test-container",
    columns: testColumns,
    data: testData,
    colGroup: [{ width: "60%" }, { width: "40%" }]
});

const targetDiv = document.getElementById("test-container");
assert.equal(targetDiv.children.length, 1);
assert.equal(targetDiv.children[0].tagName, "TABLE");
assert.equal(targetDiv.children[0].children[0].tagName, "COLGROUP");

console.log("✓ Test 2 Passed: render() mounted table into container with colgroup.");

console.log("--- All v9 tests passed successfully! ---");
