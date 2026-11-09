# KeshavSoft — Roadmap to Complete Table DOM Handling

## 1. Where We Stand Today

The current Monaco V7 playground demonstrates an important achievement:

- A base JSON creates the initial table DOM.
- Columns JSON describes the columns.
- Data JSON supplies the collection.
- Column specification defines the body cell structure.
- Row specification defines the body row structure.
- The two-dimensional transformer generates rows and cells.
- Output JSON exposes the generated DOM specification.
- The renderer inserts the generated JSON into the selected DOM target.

The current UI has six sections:

1. Base
2. Columns
3. Data
4. Column Specification
5. Row Specification
6. Output

The screenshots demonstrate that the base table can be rendered and the body can be populated.

However, this is not yet a complete table-building solution.

## 2. Important Findings From V7

### A. Header construction is not yet dynamic

The current base.json already contains the header labels:

- Item
- Base unit
- Batches

These are hardcoded in the base specification.

The columns JSON currently controls body-cell generation, but does not independently generate the header.

**Next:** Introduce a header-building operation driven by columns and a header template.

### B. Nested collection values need proper handling

The sample data contains a nested batches collection.

Currently, the third cell displays `[object Object]`.

This is expected from the current generic text interpolation: an object is being converted into a string.

**Next:** Introduce column-specific handling for primitive values, objects and collections.

A collection-valued cell should be able to produce a nested table, a collection of elements, or another explicitly defined representation.

### C. Two-dimensional transformation is already available

The existing `json-transformer-funcs-two-dimensions` V8 implementation already performs:

- Iteration over data rows.
- Creation of a row from rowSpec.
- Iteration over columns.
- Creation of cells using the cell specification.

We should reuse this implementation rather than write another two-dimensional engine.

### D. Options are already a separate capability

The `json-renderers-build-table-options` repository already provides declarative support for:

- Serial numbering.
- Row options/action buttons.
- Search-related UI.

We should integrate this package rather than duplicate its functionality inside the core table renderer.

---

## 3. The Roadmap

### Phase 1 — Complete structural table construction

This is the immediate priority.

The construction sequence should be:

1. Render base.
2. Build column group, if required.
3. Build header.
4. Build footer.
5. Build body.
6. Apply table options.
7. Render the final DOM.

The important distinction is that these are independent construction operations.

Each operation should have its own input contract, transformation logic and destination in the base JSON.

The user should be able to execute them independently and observe the changes.

### Phase 2 — Complete body construction

The body requires more than generating a row and its cells.

We need to support:

- Multiple records.
- Multiple columns.
- Column-specific templates.
- Different data types.
- Nested objects.
- Nested collections.
- Empty and missing values.
- Column-specific formatting.

The existing two-dimensional transformer remains the foundation.

Where a column contains a nested collection, the column definition should determine how that collection is represented.

### Phase 3 — Introduce options

Integrate the existing table-options package.

The options should be declarative and independently switchable.

Initial scope:

- Serial number column.
- Options/action column.
- Search.
- Footer controls.

The core table builder should not become responsible for implementing these individual features.

### Phase 4 — Integrate DOM Primitive Bindings

This is where the generated table becomes interactive.

Reuse the existing dom-primitive-bindings architecture.

The responsibilities must remain distinct:

- bindings.json describes event-to-action relationships.
- The binding engine attaches delegated listeners.
- actions.js implements the required application actions.

Initial interactions:

1. Options button click.
2. Edit row.
3. Save row.
4. Delete row.
5. Footer input changes.
6. Search interactions.

Do not attach independent event listeners to every generated row or cell. Preserve the existing delegated-listener architecture.

### Phase 5 — DOM traversal and extraction

This is an essential part of closing the requirement.

Rendering is only one direction.

We must also be able to read the generated DOM and convert it back into meaningful JSON.

Examples:

- Read all table rows.
- Read all cells in a selected row.
- Extract input values.
- Convert a selected row into a JSON object.
- Read nested elements.
- Identify elements using selectors and data attributes.
- Extract values according to declarative instructions.

Reuse the existing JSON traversal and DOM primitive infrastructure rather than introducing another traversal mechanism.

### Phase 6 — Write-path and state updates

Once values are extracted, we need a predictable way to update the source data.

Use the existing JSON write-path architecture.

Expected workflow:

1. User modifies a row.
2. An event binding invokes an action.
3. The action identifies the target row.
4. DOM extraction produces a JSON object.
5. The write-path mechanism updates the appropriate source location.
6. The table reflects the updated data.

This closes the interaction loop between JSON and DOM.

### Phase 7 — Validation and reliability

Before considering the table engine complete, establish validation at each boundary.

Validate:

- Base structure.
- Column definitions.
- Row data.
- Template definitions.
- Instructions.
- Destination paths.
- Generated JSON tree.
- Event binding definitions.

Reuse json-to-tag-validate and the existing instruction guards.

Errors should identify the relevant JSON file, instruction and path.

---

## 4. The Architecture We Should Preserve

The overall architecture should remain layered:

```text
             SOURCE COLLECTIONS
                     |
                     v
             TABLE DEFINITIONS
          Columns / Rows / Options
                     |
                     v
               BASE JSON
                     |
                     v
          INSTRUCTION EXECUTION
                     |
          +----------+----------+
          |          |          |
        Header     Footer      Body
          |          |          |
          +----------+----------+
                     |
                     v
              TABLE OPTIONS
                     |
                     v
              OUTPUT JSON
                     |
                     v
                JSON TO DOM
                     |
                     v
                 TABLE DOM
                     |
          +----------+----------+
          |                     |
     DOM Bindings          DOM Traversal
          |                     |
       Actions              Extraction
          |                     |
          +----------+----------+
                     |
                     v
                JSON WRITE
                     |
                     v
              UPDATED DATA
```

The architecture should not be collapsed into one large table-building function.

Each existing package should retain its responsibility.

---

## 5. Suggested Implementation Order

| Priority | Work | Expected result |
|---|---|---|
| 1 | Dynamic header | Columns generate header cells |
| 2 | Footer | Footer construction works independently |
| 3 | Body completion | All ordinary row and cell cases work |
| 4 | Nested collections | Object-valued cells have meaningful rendering |
| 5 | Table options | Serial and action columns work |
| 6 | DOM bindings | Table interactions work |
| 7 | DOM traversal | Rows and cells can be extracted |
| 8 | JSON write-path | Extracted changes update source JSON |
| 9 | Validation | Invalid inputs and instructions are diagnosed |
| 10 | Integration tests | Complete table lifecycle is verified |

## 6. Completion Criteria

I would consider the table DOM handling requirement complete when we can demonstrate the following:

1. Supply any valid collection and column definitions.
2. Generate the header independently.
3. Generate the footer independently.
4. Generate the body using the two-dimensional transformer.
5. Render nested collection data appropriately.
6. Add serial and options columns through the existing options engine.
7. Attach interactions through declarative bindings.
8. Select a row and extract its contents as JSON.
9. Modify values and write them back to the correct JSON destination.
10. Re-render the updated table without duplicate event listeners or inconsistent DOM state.

## 7. Final Architectural Position

We have already achieved something important: representing DOM construction instructions and transformation logic as JSON data.

The next achievement should be demonstrating the complete lifecycle:

**JSON → Instructions → DOM Construction → DOM Interaction → DOM Traversal → JSON Extraction → JSON Update.**

This is the actual objective.

We should not create another framework to achieve it. We should connect the existing KeshavSoft repositories and prove that they work together through a real table example.

The table is our first complete demonstration of this architecture. Other DOM structures can follow once this lifecycle is reliable.
