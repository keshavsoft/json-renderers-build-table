let editor = null;

export const models = {
    columns: null,
    data: null
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

    const tabIds = ["tabColumns", "tabData"];
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

    try {
        const [colRes, dataRes] = await Promise.all([
            fetch("./columns.json"),
            fetch("./data.json")
        ]);
        if (colRes.ok) initialColumns = JSON.stringify(await colRes.json(), null, 2);
        if (dataRes.ok) initialData = JSON.stringify(await dataRes.json(), null, 2);
    } catch (err) {
        console.warn("Could not prefill Monaco JSON:", err);
    }

    models.columns = monaco.editor.createModel(initialColumns, "json");
    models.data = monaco.editor.createModel(initialData, "json");

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
