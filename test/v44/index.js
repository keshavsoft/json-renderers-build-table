import test from "node:test";
import assert from "node:assert/strict";

import meta from "../../src/v45/registerGlobal/meta.js";
import buildSpec from "../../src/v45/buildSpec/index.js";
import render from "../../src/v45/index.js";

globalThis.NodeList ??= class NodeList { };
globalThis.HTMLCollection ??= class HTMLCollection { };
globalThis.Element ??= class Element { };
globalThis.HTMLElement ??= class HTMLElement { };

test("v44 meta: version is 1.44.1", () => {
    assert.equal(meta.version, "1.44.1");
});

test("v44 buildSpec: compiles table spec", () => {
    const columns = [
        { columnName: "id", label: "ID" },
        { columnName: "name", label: "Name" }
    ];
    const data = [{ id: 1, name: "Item 1" }];

    const spec = buildSpec({
        inColumns: columns,
        inData: data,
        inType: "table.simple"
    });

    assert.ok(spec, "spec should exist");
});

test("v44 render: binds button click via dom-primitive-bindings without traversal", () => {
    const listeners = {};
    const mockContainer = {
        id: "mock-table-container",
        innerHTML: "",
        append: () => { },
        prepend: () => { },
        addEventListener: (type, handler) => {
            listeners[type] = handler;
        },
        contains: () => true
    };

    globalThis.document = {
        getElementById: (id) => (id === "mock-table-container" ? mockContainer : null),
        createElement: (tag) => ({
            tagName: tag.toUpperCase(),
            setAttribute: () => { },
            appendChild: () => { },
            classList: { add: () => { } }
        })
    };

    const mockButton = {
        tagName: "BUTTON",
        className: "btn btn-sm btn-primary",
        textContent: "Show",
        closest: (selector) => {
            if (selector.includes("button")) return mockButton;
            return null;
        }
    };

    let receivedTarget = null;
    let receivedEvent = null;

    render({
        type: "table.simple",
        columns: [{ columnName: "id", label: "ID" }],
        data: [{ id: 1 }],
        targetHtmlId: "mock-table-container",
        appendPosition: "replace",
        classToApply: "",
        actions: {
            rowClick: (target, event) => {
                receivedTarget = target;
                receivedEvent = event;
            }
        }
    });

    assert.ok(typeof listeners["click"] === "function", "click listener should be attached to container");

    const clickEvent = {
        type: "click",
        target: mockButton
    };

    listeners["click"](clickEvent);

    assert.equal(receivedTarget, mockButton);
    assert.equal(receivedEvent, clickEvent);
});

test("v44 render: binds search Enter keydown via dom-primitive-bindings without traversal", () => {
    const listeners = {};
    const mockContainer = {
        id: "mock-search-container",
        innerHTML: "",
        append: () => { },
        prepend: () => { },
        addEventListener: (type, handler) => {
            listeners[type] = handler;
        },
        contains: () => true
    };

    globalThis.document = {
        getElementById: (id) => (id === "mock-search-container" ? mockContainer : null),
        createElement: (tag) => ({
            tagName: tag.toUpperCase(),
            setAttribute: () => { },
            appendChild: () => { },
            classList: { add: () => { } }
        })
    };

    const mockInput = {
        tagName: "INPUT",
        type: "search",
        value: "apple",
        closest: (selector) => {
            if (selector.includes("input")) return mockInput;
            return null;
        }
    };

    let receivedQuery = null;
    let receivedEvent = null;

    render({
        type: "table.simple",
        columns: [{ columnName: "id", label: "ID" }],
        data: [{ id: 1 }],
        targetHtmlId: "mock-search-container",
        appendPosition: "replace",
        classToApply: "",
        actions: {
            searchKeydown: (query, event) => {
                receivedQuery = query;
                receivedEvent = event;
            }
        }
    });

    assert.ok(typeof listeners["keydown"] === "function", "keydown listener should be attached to container");

    const enterEvent = {
        type: "keydown",
        key: "Enter",
        target: mockInput
    };

    listeners["keydown"](enterEvent);

    assert.equal(receivedQuery, "apple");
    assert.equal(receivedEvent, enterEvent);
});
