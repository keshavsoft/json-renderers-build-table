import assert from "node:assert/strict";
import * as v23 from "../../src/v24/index.js";
import * as distV23 from "../../docs/dist/v23/min.js";

const sampleColumns = [
    { columnName: "itemName", width: "300px" },
    { columnName: "baseUnit", width: "200px" }
];

const sampleData = [
    { itemName: "0.09/30mm", baseUnit: "kgs" },
    { itemName: "0.10/40mm", baseUnit: "pcs" }
];

console.log("--- Testing v23 Builders ---");

// 1. Test simple
{
    const spec = v23.simple({ columns: sampleColumns, data: sampleData });
    assert.equal(spec.tagName, "table");
    const colgroup = spec.children.find(c => c.tagName === "colgroup");
    assert.equal(colgroup.children.length, 2);
    const tbody = spec.children.find(c => c.tagName === "tbody");
    assert.equal(tbody.children.length, 2);
    console.log("✓ simple: passed");
}

// 2. Test headerOnly
{
    const spec = v23.headerOnly({ columns: sampleColumns });
    const thead = spec.children.find(c => c.tagName === "thead");
    assert.equal(thead.children[0].children.length, 2);
    console.log("✓ headerOnly: passed");
}

// 3. Test bodyOnly
{
    const spec = v23.bodyOnly({ columns: sampleColumns, data: sampleData });
    assert(Array.isArray(spec));
    assert.equal(spec.length, 2);
    console.log("✓ bodyOnly: passed");
}

// 4. Test withFooter
{
    const spec = v23.withFooter({ columns: sampleColumns, data: sampleData });
    const tfoot = spec.children.find(c => c.tagName === "tfoot");
    assert.equal(tfoot.children[0].children.length, 2);
    console.log("✓ withFooter: passed");
}

// 5. Test footerOnly
{
    const spec = v23.footerOnly({ columns: sampleColumns });
    assert(Array.isArray(spec));
    assert.equal(spec.length, 2);
    console.log("✓ footerOnly: passed");
}

// 6. Test withSerial
{
    const spec = v23.withSerial({
        columns: sampleColumns,
        data: sampleData,
        serial: {
            col: { width: "60px" },
            header: { columnName: "S.No" }
        }
    });

    const colgroup = spec.children.find(c => c.tagName === "colgroup");
    assert.equal(colgroup.children.length, 3);
    assert.equal(colgroup.children[0].attributes.width, "60px");

    const thead = spec.children.find(c => c.tagName === "thead");
    assert.equal(thead.children[0].children.length, 3);
    assert.equal(thead.children[0].children[0].textContent, "S.No");

    const tbody = spec.children.find(c => c.tagName === "tbody");
    assert.equal(tbody.children.length, 2);
    assert.equal(tbody.children[0].children[0].textContent, 1);
    assert.equal(tbody.children[1].children[0].textContent, 2);
    console.log("✓ withSerial: passed");
}

// 7. Test withOptions
{
    const spec = v23.withOptions({
        columns: sampleColumns,
        data: sampleData,
        options: {
            col: { width: "120px" },
            header: { columnName: "Actions" },
            body: { columnName: "View" }
        }
    });

    const colgroup = spec.children.find(c => c.tagName === "colgroup");
    assert.equal(colgroup.children.length, 3);
    assert.equal(colgroup.children[2].attributes.width, "120px");

    const thead = spec.children.find(c => c.tagName === "thead");
    assert.equal(thead.children[0].children.length, 3);
    assert.equal(thead.children[0].children[2].textContent, "Actions");

    const tbody = spec.children.find(c => c.tagName === "tbody");
    assert.equal(tbody.children.length, 2);
    const row1ButtonCell = tbody.children[0].children[2];
    assert.equal(row1ButtonCell.children[0].textContent, "View");
    console.log("✓ withOptions: passed");
}

// 8. Test dist bundle
{
    assert.equal(typeof distV23.withSerial, "function");
    assert.equal(typeof distV23.withOptions, "function");
    assert.equal(typeof distV23.simple, "function");
    const spec = distV23.withSerial({ columns: sampleColumns, data: sampleData });
    const thead = spec.children.find(c => c.tagName === "thead");
    assert.equal(thead.children[0].children[0].textContent, "#");
    console.log("✓ docs/dist/v23/min.js exports & execution: passed");
}

console.log("--- All v23 tests passed successfully! ---");
