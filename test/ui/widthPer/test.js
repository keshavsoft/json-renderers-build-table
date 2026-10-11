import { buildSpec } from "../../../src/index.js";

const startFunc = () => {
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

    const spec = buildSpec({
      columns: table1Columns,
      data: table1Data,
      colGroup: table1ColGroup
    });
    console.log("spec : ", spec);

  } catch (err) {
    document.getElementById("test-1-status").className = "badge bg-danger badge-check";
    document.getElementById("test-1-status").textContent = "✗ ERROR";
    log(`[Test 1] ✗ Error: ${err.message}`);
  }
};

startFunc();