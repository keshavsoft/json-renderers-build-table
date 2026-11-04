import test from "node:test";
import assert from "node:assert/strict";

import meta from "../../src/v47/registerGlobal/meta.js";
import render from "../../src/v47/index.js";

globalThis.NodeList ??= class NodeList {};
globalThis.HTMLCollection ??= class HTMLCollection {};
globalThis.Element ??= class Element {};
globalThis.HTMLElement ??= class HTMLElement {};

test("v47 meta: returns version 1.47.0", () => {
    assert.equal(meta.version, "1.47.0");
});

test("v47 render: pure table mounting into targetHtmlId without event dependencies", () => {
    let appendedContent = null;
    const mockContainer = {
        id: "test-table-container",
        innerHTML: "",
        append: (content) => {
            appendedContent = content;
        },
        prepend: () => {}
    };

    globalThis.document = {
        getElementById: (id) => (id === "test-table-container" ? mockContainer : null),
        createElement: (tag) => ({
            tagName: tag.toUpperCase(),
            setAttribute: () => {},
            appendChild: () => {},
            classList: { add: () => {} }
        })
    };

    const columns = [
        { columnName: "id", label: "ID" },
        { columnName: "name", label: "Name" }
    ];
    const data = [
        { id: 1, name: "Product A" }
    ];

    const result = render({
        type: "table.simple",
        columns,
        data,
        targetHtmlId: "test-table-container",
        appendPosition: "replace",
        classToApply: ""
    });

    assert.ok(result, "render should return mounted DOM/spec result");
    assert.ok(appendedContent, "container append should have been called");
});

