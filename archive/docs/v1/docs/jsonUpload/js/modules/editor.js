import { ui, state } from "./elements.js";

export function getEditorValue() {
  if (state.isMonacoLoaded && state.monacoEditorInstance) {
    return state.monacoEditorInstance.getValue();
  }

  return ui.fallbackEditor ? ui.fallbackEditor.value : "";
}

export function setEditorValue(code) {
  if (state.isMonacoLoaded && state.monacoEditorInstance) {
    state.monacoEditorInstance.setValue(code);
  } else if (ui.fallbackEditor) {
    ui.fallbackEditor.value = code;
  }

  updateLineCountBadge(code);
}

export function updateLineCountBadge(code) {
  const value = code ?? getEditorValue();
  const lines = value ? value.split("\n").length : 0;

  if (ui.editorLineCountBadge) {
    ui.editorLineCountBadge.textContent = `${lines} ${lines === 1 ? "line" : "lines"}`;
  }
}

export function toggleTheme() {
  if (state.currentTheme === "vs") {
    state.currentTheme = "vs-dark";
    if (ui.themeIcon) {
      ui.themeIcon.className = "bi bi-sun-fill text-warning";
    }

    if (state.isMonacoLoaded && window.monaco) {
      window.monaco.editor.setTheme("vs-dark");
    }
  } else {
    state.currentTheme = "vs";
    if (ui.themeIcon) {
      ui.themeIcon.className = "bi bi-moon-stars";
    }

    if (state.isMonacoLoaded && window.monaco) {
      window.monaco.editor.setTheme("vs");
    }
  }
}

export function initMonaco(onEditorChange) {
  if (typeof window.require !== "undefined") {
    window.MonacoEnvironment = {
      getWorkerUrl() {
        const proxy = `
          self.MonacoEnvironment = {
            baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/'
          };
          importScripts('https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/base/worker/workerMain.js');
        `;

        return `data:text/javascript;charset=utf-8,${encodeURIComponent(proxy)}`;
      },
    };

    window.require.config({
      paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs" },
    });

    window.require(["vs/editor/editor.main"], function () {
      state.isMonacoLoaded = true;

      if (ui.fallbackEditor) {
        ui.fallbackEditor.style.display = "none";
      }

      if (ui.monacoContainer) {
        ui.monacoContainer.style.display = "block";
      }

      state.monacoEditorInstance = window.monaco.editor.create(ui.monacoContainer, {
        value: "",
        language: "json",
        theme: state.currentTheme,
        automaticLayout: true,
        fontSize: 13,
        lineNumbers: "on",
        minimap: { enabled: true, maxColumn: 45 },
        scrollBeyondLastLine: false,
        folding: true,
        formatOnPaste: true,
        formatOnType: true,
        tabSize: 2,
        wordWrap: "on",
        padding: { top: 12, bottom: 12 },
      });

      updateLineCountBadge("");
      state.monacoEditorInstance.onDidChangeModelContent(() => {
        onEditorChange();
      });
    });
  } else {
    if (ui.fallbackEditor) {
      ui.fallbackEditor.style.display = "block";
    }

    if (ui.monacoContainer) {
      ui.monacoContainer.style.display = "none";
    }

    setEditorValue("");

    if (ui.fallbackEditor) {
      ui.fallbackEditor.addEventListener("input", onEditorChange);
    }
  }
}
