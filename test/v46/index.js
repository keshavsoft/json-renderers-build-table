import test from "node:test";
import assert from "node:assert/strict";

import meta from "../../src/v47/registerGlobal/meta.js";
import render from "../../src/v47/index.js";

globalThis.NodeList ??= class NodeList {};
globalThis.HTMLCollection ??= class HTMLCollection {};
globalThis.Element ??= class Element {};
globalThis.HTMLElement ??= class HTMLElement {};

test("v46 meta: returns metadata", () => {
    assert.ok(meta.version, "version should exist");
});

test("v46 render: binds button click via json-renderers-actions without traversal", () => {
    const listeners = {};
    const mockContainer = {
        id: "mock-table-container",
        innerHTML: "",
        append: () => {},
        prepend: () => {},
        addEventListener: (type, handler) => {
            listeners[type] = handler;
        },
        contains: () => true
    };

    globalThis.document = {
        getElementById: (id) => (id === "mock-table-container" ? mockContainer : null),
        createElement: (tag) => ({
            tagName: tag.toUpperCase(),
            setAttribute: () => {},
            appendChild: () => {},
            classList: { add: () => {} }
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

test("v46 render: binds search Enter keydown via json-renderers-actions without traversal", () => {
    const listeners = {};
    const mockContainer = {
        id: "mock-search-container",
        innerHTML: "",
        append: () => {},
        prepend: () => {},
        addEventListener: (type, handler) => {
            listeners[type] = handler;
        },
        contains: () => true
    };

    globalThis.document = {
        getElementById: (id) => (id === "mock-search-container" ? mockContainer : null),
        createElement: (tag) => ({
            tagName: tag.toUpperCase(),
            setAttribute: () => {},
            appendChild: () => {},
            classList: { add: () => {} }
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

