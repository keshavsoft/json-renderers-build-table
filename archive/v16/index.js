// V16 exposes three focused table scenarios. Each scenario owns its config and instructions.
// Only genuinely shared execution helpers live in ./common.
import simpleTable from "./simpleTable/index.js";
import tableWithSerial from "./tableWithSerial/index.js";
import tableWithOptions from "./tableWithOptions/index.js";

export { simpleTable, tableWithSerial, tableWithOptions };
