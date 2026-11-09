import { models, activateTab } from "../../monacoEditor/index.js";

export const actions = {
    showTabBase: () => activateTab("tabBase", models.base),
    showTabColumns: () => activateTab("tabColumns", models.columns),
    showTabData: () => activateTab("tabData", models.data),
    showTabColumnSpec: () => activateTab("tabColumnSpec", models.columnSpec),
    showTabRowSpec: () => activateTab("tabRowSpec", models.rowSpec),
    showTabOutput: () => activateTab("tabOutput", models.output)
};

export default actions;
