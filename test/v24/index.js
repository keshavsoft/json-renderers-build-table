import assert from "node:assert/strict";
import * as v24 from "../../src/v25/index.js";
import * as distV24 from "../../docs/dist/v24/min.js";

const sampleColumns = [
    { columnName: "itemName", width: "300px" },
    { columnName: "baseUnit", width: "200px" }
];

const sampleData = [
    { itemName: "0.09/30mm", baseUnit: "kgs" },
    { itemName: "0.10/40mm", baseUnit: "pcs" }
];

console.log("--- Testing v24 Builders and Actions ---");

// 1. Basic simple builder
{
    const spec = v24.simple({ columns: sampleColumns, data: sampleData });
    assert.equal(spec.tagName, "table");
    const colgroup = spec.children.find(c => c.tagName === "colgroup");
    assert.equal(colgroup.children.length, 2);
    const thead = spec.children.find(c => c.tagName === "thead");
    assert.equal(thead.children[0].children.length, 2);
    const tbody = spec.children.find(c => c.tagName === "tbody");
    assert.equal(tbody.children.length, 2);
    console.log("✓ simple (base): passed");
}

// 2. Simple builder with showSerial: true
{
    const spec = v24.simple({
        columns: sampleColumns,
        data: sampleData,
        options: {
            showSerial: true,
            serial: { col: { width: "60px" }, header: { columnName: "S.No" } }
        }
    });
    const colgroup = spec.children.find(c => c.tagName === "colgroup");
    assert.equal(colgroup.children.length, 3);
    assert.equal(colgroup.children[0].attributes.width, "60px");

    const thead = spec.children.find(c => c.tagName === "thead");
    assert.equal(thead.children[0].children[0].textContent, "S.No");

    const tbody = spec.children.find(c => c.tagName === "tbody");
    assert.equal(tbody.children[0].children[0].textContent, 1);
    assert.equal(tbody.children[1].children[0].textContent, 2);
    console.log("✓ simple with options.showSerial: passed");
}

// 3. Simple builder with showOptions: true
{
    const spec = v24.simple({
        columns: sampleColumns,
        data: sampleData,
        options: {
            showOptions: true,
            options: { col: { width: "120px" }, header: { columnName: "Actions" }, body: { columnName: "View" } }
        }
    });
    const colgroup = spec.children.find(c => c.tagName === "colgroup");
    assert.equal(colgroup.children.length, 3);
    assert.equal(colgroup.children[2].attributes.width, "120px");

    const thead = spec.children.find(c => c.tagName === "thead");
    assert.equal(thead.children[0].children[2].textContent, "Actions");

    const tbody = spec.children.find(c => c.tagName === "tbody");
    assert.equal(tbody.children[0].children[2].children[0].textContent, "View");
    console.log("✓ simple with options.showOptions: passed");
}

// 4. Simple builder with BOTH showSerial and showOptions
{
    const spec = v24.simple({
        columns: sampleColumns,
        data: sampleData,
        options: {
            showSerial: true,
            showOptions: true
        }
    });
    const colgroup = spec.children.find(c => c.tagName === "colgroup");
    assert.equal(colgroup.children.length, 4); // [serial, col1, col2, options]

    const thead = spec.children.find(c => c.tagName === "thead");
    assert.equal(thead.children[0].children.length, 4);
    assert.equal(thead.children[0].children[0].textContent, "#");
    assert.equal(thead.children[0].children[3].textContent, "options");

    const tbody = spec.children.find(c => c.tagName === "tbody");
    assert.equal(tbody.children[0].children.length, 4);
    assert.equal(tbody.children[0].children[0].textContent, 1);
    assert.equal(tbody.children[0].children[3].children[0].textContent, "show");
    console.log("✓ simple with BOTH showSerial and showOptions: passed");
}

// 5. withFooter with BOTH showSerial and showOptions (verifying footer column alignment)
{
    const spec = v24.withFooter({
        columns: sampleColumns,
        data: sampleData,
        options: {
            showSerial: true,
            showOptions: true
        }
    });
    const colgroup = spec.children.find(c => c.tagName === "colgroup");
    assert.equal(colgroup.children.length, 4);

    const thead = spec.children.find(c => c.tagName === "thead");
    assert.equal(thead.children[0].children.length, 4);

    const tbody = spec.children.find(c => c.tagName === "tbody");
    assert.equal(tbody.children[0].children.length, 4);

    const tfoot = spec.children.find(c => c.tagName === "tfoot");
    assert.equal(tfoot.children[0].children.length, 4); // [emptyCell, input1, input2, emptyCell]
    console.log("✓ withFooter with BOTH showSerial and showOptions: passed");
}

// 6. Direct action invocation: insertSerial & insertOptions
{
    const baseSpec = v24.simple({ columns: sampleColumns, data: sampleData });
    v24.insertSerial({ inTableSpec: baseSpec });
    v24.insertOptions({ inTableSpec: baseSpec });
    const thead = baseSpec.children.find(c => c.tagName === "thead");
    assert.equal(thead.children[0].children.length, 4);
    console.log("✓ standalone actions (insertSerial, insertOptions): passed");
}

// 7. Backward compatibility helpers: withSerial & withOptions
{
    const specS = v24.withSerial({ columns: sampleColumns, data: sampleData });
    assert.equal(specS.children.find(c => c.tagName === "thead").children[0].children[0].textContent, "#");

    const specO = v24.withOptions({ columns: sampleColumns, data: sampleData });
    assert.equal(specO.children.find(c => c.tagName === "thead").children[0].children[2].textContent, "options");
    console.log("✓ backward compatibility wrappers (withSerial, withOptions): passed");
}

// 8. Dist bundle verification
{
    assert.equal(typeof distV24.simple, "function");
    assert.equal(typeof distV24.withFooter, "function");
    assert.equal(typeof distV24.insertSerial, "function");
    assert.equal(typeof distV24.insertOptions, "function");
    const spec = distV24.simple({
        columns: sampleColumns,
        data: sampleData,
        options: { showSerial: true, showOptions: true }
    });
    assert.equal(spec.children.find(c => c.tagName === "thead").children[0].children.length, 4);
    console.log("✓ docs/dist/v24/min.js exports & execution: passed");
}

console.log("--- All v24 tests passed successfully! ---");
