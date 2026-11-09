# V52 — Consolidated instruction-driven table

V52 is a separate experiment. V50 is retained unchanged in the supplied archive.

## Structure

- `instructions.json` — hierarchical instructions for startup, search, clear body, and show body.
- `bindings.json` — one event-binding list mapping DOM events to instruction paths and action names.
- `actions.js` — one shared action registry; it delegates row creation to the existing V48 renderer.
- `runtime.js` — generic binding configuration: resolves instruction/action references and delegates execution to the existing DOM primitive engine.
- `index.js` — imports the two JSON contracts and action registry, renders startup, and initializes bindings.

## Run

Serve the repository over HTTP and open `v52/tableWithSearch/index.html`.

## Expected test

1. Initial table appears.
2. Type text in Search and press Enter; the query object is displayed.
3. Clear Body empties only `tbody`.
4. Show Body restores rows using the existing renderer.

Search capture is intentionally not filtering yet. V52 tests consolidation and execution wiring, not the next filtering feature.
