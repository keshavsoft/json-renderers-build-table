# V50 — Modular Table Operations

V50 reorganizes the V49 experiment into operation folders. V48 and V49 remain unchanged.

## Folder contract

Every operation folder has three files:

- `specs.json` — declarative instruction or operation configuration.
- `bindings.json` — event, selector, instruction key, and action mapping.
- `index.js` — the operation's implementation and exported function.

## Operations

- `render` — calls the existing V48 table renderer.
- `search` — captures the search input value when Enter is pressed.
- `clearBody` — locates and clears only the live `tbody`.
- `showBody` — asks the existing renderer to generate rows in a staging table, then moves those generated nodes into the live `tbody`.

The main `tableWithSearch/index.js` is only an orchestrator. It imports and calls the four exposed functions.

## Run

Open `samples/v50/tableWithSearch/index.html` through the repository's local server.
