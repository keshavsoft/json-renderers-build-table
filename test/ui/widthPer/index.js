import render from "../../../docs/dist/v9/min.js";

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

  log("Completed all DOM verification checks.");
};

window.addEventListener("DOMContentLoaded", runUiTests);
