# V51 — Instruction-Driven Table

V51 is the next experiment after V50. Its purpose is to validate the instruction contract before adding more table features.

## What changed from V50

- No operation-specific JavaScript files or exported operation functions.
- No `bindSearch`, `bindClearBody`, or `bindShowBody` calls.
- `application.json` declares startup and operation JSON files.
- Each operation has `specs.json` and `bindings.json`.
- One generic runtime loads those files, resolves binding instruction keys, and delegates execution to the existing binding and instruction engines.
- Operation behavior (including status/query display, clearing, and body restoration) is expressed as instruction sequences.
- JavaScript contains only generic runtime infrastructure and reusable action primitives.

## Instruction flow

1. Startup instructions render the table.
2. Search binding triggers the `searchEnter` sequence: Enter check -> read value -> store query -> display query/status.
3. Clear binding triggers: locate table body -> clear children -> update status.
4. Show binding triggers: locate and remember live tbody -> render into staging -> locate generated tbody -> move generated children into live tbody -> update status.

## Generic action primitives

`renderComponent`, `storeValue`, `setText`, `rememberElement`, `clearChildren`, and `moveChildrenToRemembered` are shared runtime actions. They are not operation-specific callbacks. The existing DOM primitive engine resolves them through `clientData.functions`.

## Run

Copy the `v51` folder into the repository's `samples` folder and open:

`samples/v51/tableWithSearch/index.html`

This sample expects the existing V48 renderer at `docs/dist/v48/min.js` and loads the current published DOM primitive bindings and engine bundles.
