import assert from "node:assert/strict";

import table from "../../src/v41/index.js";
import runSingleInstructions from "json-instruction-single";

// Reuse the table input shape already used by the repository's existing tests.
const columns = [
    { columnName: "itemName", width: "300px" },
    { columnName: "baseUnit", width: "200px" }
];

const data = [
    { itemName: "0.09/30mm", baseUnit: "kgs" },
    { itemName: "0.10/40mm", baseUnit: "pcs" }
];

// V5 must support a template-only instruction (sourcePath: null) and write it.
{
    const template = { tagName: "section", attributes: { class: "template-only" } };
    const registry = {
        spec: { sectionTemplate: template },
        output: {}
    };

    runSingleInstructions([{
        sourcePath: null,
        templateKey: "sectionTemplate",
        func: "applyTemplate",
        destinationPath: { fileName: "output", filePath: ["built"] }
    }], registry);

    assert.deepEqual(registry.output.built, template);
}

// V5 must also preserve V40's collection-based single-instruction behaviour.
{
    const result = table.simple({ columns, data });

    assert.equal(result.tagName, "table");
    const colgroup = result.children.find(item => item.tagName === "colgroup");
    const thead = result.children.find(item => item.tagName === "thead");
    const tbody = result.children.find(item => item.tagName === "tbody");

    assert.equal(colgroup.children.length, 2);
    assert.equal(thead.children[0].children.length, 2);
    assert.equal(tbody.children.length, 2);
    assert.equal(tbody.children[0].children[0].textContent, "0.09/30mm");
    assert.equal(tbody.children[1].children[1].textContent, "pcs");
}

// Existing footer builder should continue to align its footer with the columns.
{
    const result = table.withFooter({ columns, data });
    const tfoot = result.children.find(item => item.tagName === "tfoot");
    assert.ok(tfoot);
    assert.equal(tfoot.children[0].children.length, 2);
}

// The remaining public builders must remain callable after the V41 copy.
{
    const body = table.bodyOnly({ columns, data });
    assert.ok(body);

    const footer = table.footerOnly({ columns, data });
    assert.ok(footer);
}

console.log("V41 integration tests passed for simple, withFooter, bodyOnly, footerOnly, and sourcePath:null.");
