import render from "../../../docs/dist/v48/min.js";
import data from "./data.json" with { type: "json" };
import columns from "./columns.json" with { type: "json" };
import startInstructionApplication from "./runtime.js";

const root = document.querySelector(".v51-root");

const start = async () => {
    try {
        await startInstructionApplication({
            root,
            applicationUrl: new URL("./application.json", import.meta.url).href,
            render,
            data,
            columns,
            component: {
                type: "table.simple",
                options: {
                    showSerial: true,
                    showSearch: true,
                    showOptions: false
                }
            }
        });
    } catch (error) {
        console.error("V51 instruction application error:", error);
        document.getElementById("v51-status").textContent = error.message;
    }
};

start();
