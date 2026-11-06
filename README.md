# json-renderers-build-table

> **Declarative, specification-first HTML table generator in pure JSON.**  
> Turn columns + data into a structured DOM specification tree — without touching the DOM.

[![npm version](https://img.shields.io/npm/v/json-renderers-build-table.svg?color=cb3837&logo=npm)](https://www.npmjs.com/package/json-renderers-build-table)
[![npm downloads](https://img.shields.io/npm/dm/json-renderers-build-table.svg?color=2563eb)](https://www.npmjs.com/package/json-renderers-build-table)
[![GitHub Pages](https://img.shields.io/badge/Docs-GitHub%20Pages-blue.svg)](https://keshavsoft.github.io/json-renderers-build-table/)
[![Live Playground](https://img.shields.io/badge/Live%20Demo-Monaco%20Visualizer-brightgreen.svg)](https://keshavsoft.github.io/json-renderers-build-table/jsonToDom/)
[![CDN Bundle](https://img.shields.io/badge/CDN-dist%2Fmin.js-orange.svg)](https://keshavsoft.github.io/json-renderers-build-table/dist/min.js)

---

## 📖 Live Demos & Documentation

Explore the interactive ecosystem hosted on GitHub Pages and npm:

- 🌐 **[Interactive Story & Documentation Portal](https://keshavsoft.github.io/json-renderers-build-table/)**  
  The main visual documentation hub featuring live builder comparisons, architecture breakdown, and an embedded table playground.
- 🎮 **[Interactive Monaco Spec Editor & DOM Preview](https://keshavsoft.github.io/json-renderers-build-table/jsonToDom/)**  
  Load, edit, or upload any table JSON specification in a full Monaco editor and render it live into the DOM with one click.
- 📁 **[JSON Upload & Rendering Hub](https://keshavsoft.github.io/json-renderers-build-table/jsonUpload/)**  
  Test, preview, and audit table specs and tag structures.
- 📦 **[npm Registry Package](https://www.npmjs.com/package/json-renderers-build-table)**  
  Official npm package for Node.js, Vite, Webpack, and modern frontend frameworks.
- ⚡ **[Pre-built Minified CDN Bundle](https://keshavsoft.github.io/json-renderers-build-table/dist/min.js)**  
  Ready-to-use ES module bundle served globally via GitHub Pages.

---

## Installation

### Via npm (Recommended for Bundlers & Node.js)

```bash
npm install json-renderers-build-table
```

Or using pnpm / yarn:

```bash
pnpm add json-renderers-build-table
# or
yarn add json-renderers-build-table
```

### Via Browser CDN (Zero Build Tools)

```html
<script type="module">
  import { simple, withFooter } from "https://keshavsoft.github.io/json-renderers-build-table/dist/min.js";
  import "https://keshavsoft.github.io/json-to-dom/dist/v42/min.js";
</script>
```

---

## The Story: Why This Exists

Building HTML `<table>` structures from dynamic datasets is one of web development's most repetitive and fragile tasks:

1. **Scattered Imperative Spaghetti**: Codebases fill up with endless `document.createElement("td")`, `setAttribute`, and `appendChild` chains.
2. **Coupled Multi-Region Edits**: Adding or modifying a single column forces you to touch four separate areas: `<colgroup>` widths, `<thead>` headers, `<tbody>` data cells, and `<tfoot>` totals.
3. **Hard to Customize**: Swapping a plain text cell for a badge, button, or input requires rewriting procedural loops.
4. **Untestable Logic**: Because formatting is tightly coupled to browser DOM APIs, unit testing requires heavy DOM emulation (JSDOM) or browser runners.

### The Paradigm Shift: Declarative JSON Stamping

`json-renderers-build-table` inverts the entire paradigm:

> **You describe what the table should look like in JSON. The builder stamps out the specification.**

```
   Raw Data + Columns + Options
                 │
                 ▼
┌─────────────────────────────────┐
│   json-renderers-build-table    │ ◄── Pure data transformation (Zero DOM dependencies)
└─────────────────────────────────┘
                 │
                 ▼ Outputs Plain JSON DOM Specification
┌─────────────────────────────────┐
│     JSON DOM Specification      │ ◄── Plain JS Object { tagName, attributes, children }
└─────────────────────────────────┘
                 │
                 ▼ Handed to a spec renderer
┌─────────────────────────────────┐
│    @keshavsoft/json-to-dom      │ ◄── Turns specification into real DOM nodes
└─────────────────────────────────┘
                 │
                 ▼
           <table> Element
```

The builder **never touches the real DOM**. It produces a clean, portable JSON specification that you hand to a DOM renderer like [`@keshavsoft/json-to-dom`](https://keshavsoft.github.io/json-to-dom/dist/v42/min.js). This means your table generation is:
- **100% Deterministic & Pure**: Same input always yields the exact same JSON tree.
- **Fast & Portable**: Runs seamlessly in browsers, Node.js, serverless functions, or Web Workers.
- **Trivially Testable**: Validate tables by comparing plain JSON objects.

---

## The Core Architecture: Declarative Instructions over a Shared Registry

Every build pipeline runs through three declarative layers:

```
1. Registry      holds { data, base, spec, ...options }
                   data  = your column definitions + row data
                   base  = the empty table skeleton (colgroup, thead, tbody, tfoot)
                   spec  = named cell/row templates (from spec.json)

2. Instructions  declarative JSON arrays that describe transformations:
                   "Read THIS path in data,
                    apply THIS template in spec,
                    write the result to THIS anchor in base"

3. writePath     navigates the base tree by `data-role` anchors
                 and performs named actions:
                 (set / push / unshift / pushToRows / etc.)
```

Because the instructions are pure JSON, you can inspect and understand an entire table's assembly sequence without stepping through JavaScript code. Every instruction includes a human-readable `narration` field explaining its exact purpose.

---

## Modular Builders

The library provides targeted builders designed for different table composition workflows:

| Builder | Generates | Best Used For |
|---|---|---|
| `simple` | `<colgroup>`, `<thead>`, `<tbody>` | Standard data tables with headers and rows |
| `withFooter` | `<colgroup>`, `<thead>`, `<tbody>`, `<tfoot>` | Full-featured tables requiring calculation or action footers |
| `bodyOnly` | `<tbody>` row elements only | Partial dynamic updates (e.g. repopulating data rows via AJAX/fetch without touching headers) |
| `footerOnly` | `<tfoot>` row elements only | Dynamic footer recalculation, summary rows, or isolated input bars |

---

## Quick Start Example

### Using npm & ES Modules

```javascript
import { simple } from "json-renderers-build-table";
import "https://keshavsoft.github.io/json-to-dom/dist/v42/min.js";

// 1. Define columns (single source of truth for each vertical slice)
const columns = [
  {
    columnName: "itemName",
    width: "250px",
    template: { body: { tr: "buildBodyTr", cell: "buildBodyCell" } }
  },
  {
    columnName: "unit",
    width: "120px",
    template: { body: { tr: "buildBodyTr", cell: "buildBodyCell" } }
  },
  {
    columnName: "batches",
    width: "100px",
    template: { body: { tr: "buildBodyTr", cell: "buttonCell" } }
  }
];

// 2. Raw data
const data = [
  { itemName: "Steel Rods", unit: "kgs", batches: 4 },
  { itemName: "Copper Wire", unit: "meters", batches: 12 }
];

// 3. Build the JSON specification (Pure JSON tree)
const spec = simple({
  columns,
  data,
  options: {
    showSerial: true,   // Injects serial number column
    showOptions: true   // Injects action/options column
  }
});

// 4. Hand the specification to the DOM renderer
window.ks.jsonToDom.appendToDom({
  jsonSpec: spec,
  targetHtmlId: "table-container",
  appendPosition: "append"
});
```

---

## Column Configurations: Single Source of Truth

A column definition controls one vertical slice across the entire table:

| Field | Purpose |
|---|---|
| `columnName` | Key corresponding to property on each data row object |
| `width` | Applied to the `<col>` tag in `<colgroup>` |
| `template.body.tr` | Name of the `<tr>` template to use in `spec.json` |
| `template.body.cell` | Name of the cell template to use in `spec.json` |

To change how a column renders (e.g., from plain text to a button or badge), **change `template.body.cell` to another key in `spec.json`**. Zero JavaScript changes needed.

### Pre-built Templates (`spec.json`)

| Template Key | Output Element | Description |
|---|---|---|
| `buildBodyCell` | `<td>` | Standard data cell displaying row value as text |
| `buttonCell` | `<td><button>` | Action button displaying row value or count |
| `buildHeader` | `<th>` | Header cell with uppercase column label |
| `buildColGroup` | `<col>` | Column tag with assigned width attribute |
| `buildFooter` | `<td><input>` | Footer input cell for new data entry or filtering |
| `buildSelect` | `<select>` | Interactive dropdown element |
| `buildDataList` | `<datalist>` | Autocomplete suggestion container |

---

## Dynamic Table Options

Powered by `json-renderers-build-table-options`, optional features can be toggled declaratively through the `options` object:

```js
const spec = withFooter({
  columns,
  data,
  options: {
    showSerial: true,   // Automatically numbers rows (1, 2, 3...)
    showOptions: true,  // Adds options/action buttons column
    showSearch: false   // Toggles search input header
  }
});
```

---

## Repository Samples

Explore working samples inside [`samples/`](./samples/):

- **[Simple Table](./samples/v39/simpleTable/)**: Standard header, colgroup, and data rows.
- **[With Footer](./samples/v39/withFooter/)**: Full table structure with editable footer cells.
- **[Body Only](./samples/v39/withFooterType/)**: Targeted `<tbody>` rendering for dynamic row updates.
- **[Footer Only](./samples/v39/footerOnly/)**: Isolated `<tfoot>` generation.

---

## Development & Building

`ash
# Build latest distribution bundle into docs/dist/
npm run build
# (Runs: npx @keshavsoft/build-cli)
`

The build CLI automatically scans src/, discovers the latest version folder, compiles the standalone production bundle into docs/dist/vN/min.js, and copies it to docs/dist/min.js for immediate deployment to GitHub Pages.

---

## Related Projects

- **[`@keshavsoft/json-to-dom`](https://keshavsoft.github.io/json-to-dom/dist/v42/min.js)**: Turns pure JSON DOM specifications into live DOM elements.
- **[`json-instruction-single`](https://www.npmjs.com/package/json-instruction-single)**: 1D collection transformation runner.
- **[`json-instruction-double`](https://www.npmjs.com/package/json-instruction-double)**: 2D grid/matrix transformation runner.
- **[`json-renderers-build-table-options`](https://www.npmjs.com/package/json-renderers-build-table-options)**: Injects serial numbers, options, and search controls into table specifications.
