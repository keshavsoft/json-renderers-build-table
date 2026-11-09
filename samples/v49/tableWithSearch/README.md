# V49 — Table Search and Body Lifecycle

This is a new sample based on **V48 `tableWithSearch`**. V48 and all earlier versions are unchanged.

## What to test

1. Type into the generated search field and press **Enter**. V49 captures and displays the query; it deliberately does not filter yet.
2. Click **Clear Body**. Only the live table's `tbody` is cleared. The table header and search control remain.
3. Click **Show Body**. The existing V48 renderer is run in a hidden staging container using the original JSON data and columns. The generated `tbody` children are moved into the live table.

## Implementation boundaries

- Uses the existing V48 renderer and JSON-to-DOM pipeline for table/body generation.
- Uses the existing DOM primitive bindings and instruction engine.
- Search and body-target selection are described in `instructions.json`.
- No handwritten `<tr>` or `<td>` generation.
- No V48 or older source files are modified.
- No new body-only renderer API is introduced.

## Run

Serve the repository using the same local server/build setup used for the other samples, then open:

`samples/v49/tableWithSearch/index.html`

The sample imports `docs/dist/v48/min.js` and the existing V48 common data, columns, and primitive bundles.
