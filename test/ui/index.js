import render from "../../src/index.js";

const logEl = document.getElementById("dom-log");
const log = (msg) => {
  if (logEl) {
    logEl.textContent += msg + "\n";
  }
  console.log(msg);
};

const runUiTests = () => {
  log("Starting V9 Table UI Verification...");

  // Test 1: Percentage colgroup widths
  try {
    const table1Columns = [
      { key: "itemName", label: "Item Name" },
      { key: "baseUnit", label: "Base Unit" },
      { key: "stock", label: "In Stock" }
    ];

    const table1Data = [
      { itemName: "Linear Guide Rail 500mm", baseUnit: "pcs", stock: 15 },
      { itemName: "Micro Carbide Milling Cutter", baseUnit: "pcs", stock: 120 },
      { itemName: "High-Torque Stepper Motor", baseUnit: "pcs", stock: 8 }
    ];

    const table1ColGroup = [
      { width: "50%" },
      { width: "25%" },
      { width: "25%" }
    ];

    render({
      targetHtmlId: "table-container-1",
      columns: table1Columns,
      data: table1Data,
      colGroup: table1ColGroup
    });

    // Inspect live DOM
    const container1 = document.getElementById("table-container-1");
    const tableEl1 = container1.querySelector("table");
    const colgroupEl1 = tableEl1?.querySelector("colgroup");
    const cols1 = colgroupEl1 ? Array.from(colgroupEl1.querySelectorAll("col")) : [];

    if (tableEl1 && colgroupEl1 && cols1.length === 3) {
      const colStyles = cols1.map(c => c.getAttribute("style")).join(", ");
      document.getElementById("test-1-status").className = "badge bg-success badge-check";
      document.getElementById("test-1-status").textContent = "✓ PASSED (<colgroup> with 3 cols)";
      log(`[Test 1] ✓ Success: <colgroup> rendered with 3 <col> elements.`);
      log(`[Test 1]   Col styles: ${colStyles}`);
    } else {
      document.getElementById("test-1-status").className = "badge bg-danger badge-check";
      document.getElementById("test-1-status").textContent = "✗ FAILED";
      log(`[Test 1] ✗ Failed: colgroup not found or col count mismatch.`);
    }
  } catch (err) {
    document.getElementById("test-1-status").className = "badge bg-danger badge-check";
    document.getElementById("test-1-status").textContent = "✗ ERROR";
    log(`[Test 1] ✗ Error: ${err.message}`);
  }

  // Test 2: Fixed pixel widths
  try {
    const table2Columns = [
      { key: "id", label: "ID" },
      { key: "product", label: "Product Name" },
      { key: "category", label: "Category" },
      { key: "price", label: "Price" }
    ];

    const table2Data = [
      { id: "P-101", product: "Precision CNC Spindle 2.2kW", category: "Hardware", price: "$450.00" },
      { id: "P-102", product: "Heavy Duty Ball Screw SFU1605", category: "Hardware", price: "$85.00" },
      { id: "P-103", product: "Optocoupler Relay Module 8CH", category: "Electronics", price: "$22.50" }
    ];

    const table2ColGroup = [
      { width: "80px" },
      { width: "400px" },
      { width: "150px" },
      { width: "120px" }
    ];

    render({
      targetHtmlId: "table-container-2",
      columns: table2Columns,
      data: table2Data,
      colGroup: table2ColGroup
    });

    // Inspect live DOM
    const container2 = document.getElementById("table-container-2");
    const tableEl2 = container2.querySelector("table");
    const colgroupEl2 = tableEl2?.querySelector("colgroup");
    const cols2 = colgroupEl2 ? Array.from(colgroupEl2.querySelectorAll("col")) : [];

    if (tableEl2 && colgroupEl2 && cols2.length === 4) {
      const colStyles = cols2.map(c => c.getAttribute("style")).join(", ");
      document.getElementById("test-2-status").className = "badge bg-success badge-check";
      document.getElementById("test-2-status").textContent = "✓ PASSED (<colgroup> with 4 cols)";
      log(`[Test 2] ✓ Success: <colgroup> rendered with 4 <col> elements.`);
      log(`[Test 2]   Col styles: ${colStyles}`);
    } else {
      document.getElementById("test-2-status").className = "badge bg-danger badge-check";
      document.getElementById("test-2-status").textContent = "✗ FAILED";
      log(`[Test 2] ✗ Failed: colgroup not found or col count mismatch.`);
    }
  } catch (err) {
    document.getElementById("test-2-status").className = "badge bg-danger badge-check";
    document.getElementById("test-2-status").textContent = "✗ ERROR";
    log(`[Test 2] ✗ Error: ${err.message}`);
  }

  log("Completed all DOM verification checks.");
};

window.addEventListener("DOMContentLoaded", runUiTests);
