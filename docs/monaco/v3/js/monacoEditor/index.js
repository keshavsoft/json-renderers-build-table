let editor = null;

export const models = {
    columns: null,
    data: null,
    bindings: null,
    instructions: null,
    output: null
};

function loadMonaco() {
    return new Promise((resolve, reject) => {
        if (window.monaco && window.monaco.editor) {
            resolve(window.monaco);
            return;
        }

        require.config({
            paths: {
                vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs"
            }
        });

        require(["vs/editor/editor.main"], () => resolve(window.monaco), reject);
    });
}

export function activateTab(tabId, model) {
    if (editor && model) {
        editor.setModel(model);
    }

    const tabIds = ["tabColumns", "tabData", "tabBindings", "tabInstructions", "tabOutput"];
    for (const id of tabIds) {
        const el = document.getElementById(id);
        if (el) {
            el.classList.toggle("active", id === tabId);
        }
    }
}

async function initMonaco() {
    const monaco = await loadMonaco();

    let initialColumns = "[]\n";
    let initialData = "[]\n";
    let initialBindings = "[]\n";
    let initialInstructions = "[]\n";
    let initialOutput = "{}\n";

    try {
        const [colRes, dataRes, bindRes, instRes, outRes] = await Promise.all([
            fetch("./columns.json"),
            fetch("./data.json"),
            fetch("./bindings.json"),
            fetch("./instructions.json"),
            fetch("./output.json")
        ]);
        if (colRes.ok) initialColumns = JSON.stringify(await colRes.json(), null, 2);
        if (dataRes.ok) initialData = JSON.stringify(await dataRes.json(), null, 2);
        if (bindRes.ok) initialBindings = JSON.stringify(await bindRes.json(), null, 2);
        if (instRes.ok) initialInstructions = JSON.stringify(await instRes.json(), null, 2);
        if (outRes.ok) initialOutput = JSON.stringify(await outRes.json(), null, 2);
    } catch (err) {
        console.warn("Could not prefill Monaco JSON models:", err);
    }

    models.columns = monaco.editor.createModel(initialColumns, "json");
    models.data = monaco.editor.createModel(initialData, "json");
    models.bindings = monaco.editor.createModel(initialBindings, "json");
    models.instructions = monaco.editor.createModel(initialInstructions, "json");
    models.output = monaco.editor.createModel(initialOutput, "json");

    editor = monaco.editor.create(document.getElementById("jsonEditor"), {
        theme: "vs-dark",
        model: models.columns,
        automaticLayout: true,
        tabSize: 2,
        fontSize: 13,
        minimap: { enabled: false },
        scrollBeyondLastLine: false
    });

    return editor;
}

export default initMonaco;

