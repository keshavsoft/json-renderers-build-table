import { ui, state } from "./modules/elements.js";
import { loadBuildSpecElement } from "./modules/loader.js";
import { initMonaco, getEditorValue, setEditorValue, toggleTheme } from "./modules/editor.js";
import { parseAndRenderEditorContent, loadSpecIntoEditor, clearError } from "./modules/render.js";
import { SAMPLE_TABLE_SPEC, SAMPLE_CARD_SPEC } from "./modules/samples.js";

let bootstrapModalInstance = null;

const checkSessionSpec = () => {
  try {
    const savedSpec = sessionStorage.getItem("json_to_tag_active_spec");
    const savedName = sessionStorage.getItem("json_to_tag_active_name") || "Analyzed Spec";

    if (savedSpec && ui.btnLoadSession) {
      ui.btnLoadSession.style.display = "inline-block";
      ui.btnLoadSession.title = `Load "${savedName}" from Tag Analysis`;
    }
  } catch (error) {
    console.warn("Session validation error:", error);
  }
};

const onEditorChange = () => {
  if (!ui.autoRenderToggle || !ui.autoRenderToggle.checked) {
    if (ui.syncDot) {
      ui.syncDot.className = "sync-indicator syncing";
    }

    if (ui.syntaxStatusText) {
      ui.syntaxStatusText.textContent = "Unrendered Changes";
    }

    if (ui.syntaxStatusBadge) {
      ui.syntaxStatusBadge.className = "badge bg-warning-subtle text-warning-emphasis border border-warning-subtle small px-2 py-1";
    }

    return;
  }

  if (ui.syncDot) {
    ui.syncDot.className = "sync-indicator syncing";
  }

  if (ui.syntaxStatusText) {
    ui.syntaxStatusText.textContent = "Syncing...";
  }

  if (ui.syntaxStatusBadge) {
    ui.syntaxStatusBadge.className = "badge bg-warning-subtle text-warning-emphasis border border-warning-subtle small px-2 py-1";
  }

  clearTimeout(state.liveRenderDebounceTimer);
  state.liveRenderDebounceTimer = setTimeout(() => {
    parseAndRenderEditorContent({ buildSpecElement: state.buildSpecElement });
  }, 250);
};

const setupEvents = () => {
  if (ui.fileInput) {
    ui.fileInput.addEventListener("change", (event) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        try {
          const rawText = loadEvent.target.result;
          const parsed = JSON.parse(rawText);
          loadSpecIntoEditor(parsed, file.name, state.buildSpecElement);
        } catch (error) {
          if (ui.errorMessage) {
            ui.errorMessage.textContent = `Invalid JSON in uploaded file: ${error.message}`;
          }

          setEditorValue(loadEvent.target.result);
          state.currentFileName = file.name;

          if (ui.activeFileNameBadge) {
            ui.activeFileNameBadge.innerHTML = `<i class="bi bi-file-earmark-x text-danger me-1"></i>${file.name}`;
          }

          if (ui.syncDot) {
            ui.syncDot.className = "sync-indicator error";
          }

          if (ui.syntaxStatusText) {
            ui.syntaxStatusText.textContent = "Syntax Error";
          }

          if (ui.syntaxStatusBadge) {
            ui.syntaxStatusBadge.className = "badge bg-danger-subtle text-danger border border-danger-subtle small px-2 py-1";
          }
        }
      };

      reader.readAsText(file);
    });
  }

  if (ui.editorPanel) {
    ["dragenter", "dragover"].forEach((eventName) => {
      ui.editorPanel.addEventListener(eventName, (event) => {
        event.preventDefault();
        event.stopPropagation();
        ui.editorPanel.classList.add("dragover");
      });
    });

    ["dragleave", "drop"].forEach((eventName) => {
      ui.editorPanel.addEventListener(eventName, (event) => {
        event.preventDefault();
        event.stopPropagation();
        ui.editorPanel.classList.remove("dragover");
      });
    });

    ui.editorPanel.addEventListener("drop", (event) => {
      const file = event.dataTransfer?.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        try {
          const parsed = JSON.parse(loadEvent.target.result);
          loadSpecIntoEditor(parsed, file.name, state.buildSpecElement);
        } catch (error) {
          if (ui.errorMessage) {
            ui.errorMessage.textContent = `Dropped file contains invalid JSON: ${error.message}`;
          }

          setEditorValue(loadEvent.target.result);
          state.currentFileName = file.name;
        }
      };

      reader.readAsText(file);
    });
  }

  if (ui.btnSampleTable) {
    ui.btnSampleTable.addEventListener("click", () => {
      loadSpecIntoEditor(SAMPLE_TABLE_SPEC, "spec.json (Sample Table)", state.buildSpecElement);
    });
  }

  if (ui.btnSampleSpec) {
    ui.btnSampleSpec.addEventListener("click", () => {
      loadSpecIntoEditor(SAMPLE_CARD_SPEC, "sample-card.json", state.buildSpecElement);
    });
  }

  if (ui.btnLoadSession) {
    ui.btnLoadSession.addEventListener("click", () => {
      try {
        const savedSpec = sessionStorage.getItem("json_to_tag_active_spec");
        const savedName = sessionStorage.getItem("json_to_tag_active_name") || "Analyzed Spec";

        if (savedSpec) {
          loadSpecIntoEditor(JSON.parse(savedSpec), savedName, state.buildSpecElement);
        }
      } catch (error) {
        if (ui.errorMessage) {
          ui.errorMessage.textContent = `Failed to load spec from session: ${error.message}`;
        }
      }
    });
  }

  if (ui.btnManualRender) {
    ui.btnManualRender.addEventListener("click", () => {
      parseAndRenderEditorContent({ buildSpecElement: state.buildSpecElement });
    });
  }

  if (ui.btnFormatJson) {
    ui.btnFormatJson.addEventListener("click", () => {
      if (state.isMonacoLoaded && state.monacoEditorInstance) {
        state.monacoEditorInstance.getAction("editor.action.formatDocument").run();
      } else {
        try {
          const val = JSON.parse(getEditorValue());
          setEditorValue(JSON.stringify(val, null, 2));
        } catch (error) {
          if (ui.errorMessage) {
            ui.errorMessage.textContent = `Cannot format invalid JSON: ${error.message}`;
          }
        }
      }
    });
  }

  if (ui.btnCopyJson) {
    ui.btnCopyJson.addEventListener("click", async () => {
      try {
        const code = getEditorValue();
        await navigator.clipboard.writeText(code);
        const originalHtml = ui.btnCopyJson.innerHTML;
        ui.btnCopyJson.innerHTML = `<i class="bi bi-check2 text-success me-1"></i> Copied!`;
        setTimeout(() => {
          ui.btnCopyJson.innerHTML = originalHtml;
        }, 1800);
      } catch (error) {
        alert(`Clipboard copy failed: ${error.message}`);
      }
    });
  }

  if (ui.btnToggleTheme) {
    ui.btnToggleTheme.addEventListener("click", () => {
      toggleTheme();
    });
  }

  if (ui.btnClearEditor) {
    ui.btnClearEditor.addEventListener("click", () => {
      if (confirm("Clear editor contents?")) {
        setEditorValue("");
        parseAndRenderEditorContent({ buildSpecElement: state.buildSpecElement });
      }
    });
  }

  if (ui.btnClearOutput) {
    ui.btnClearOutput.addEventListener("click", () => {
      if (ui.outputContainer) {
        ui.outputContainer.innerHTML = `
          <div class="empty-render-state">
            <i class="bi bi-display empty-render-icon"></i>
            <h5 class="fw-semibold text-secondary">Output Cleared</h5>
            <p class="small text-muted mb-0">Click <strong>Render</strong> or type in editor to restore.</p>
          </div>
        `;
      }

      if (ui.nodesCountBadge) {
        ui.nodesCountBadge.textContent = "0 DOM Nodes";
      }
    });
  }

  if (ui.btnCloseErrorAlert) {
    ui.btnCloseErrorAlert.addEventListener("click", () => {
      clearError();
    });
  }

  if (ui.btnViewHtml) {
    ui.btnViewHtml.addEventListener("click", () => {
      const htmlContent = ui.outputContainer ? ui.outputContainer.innerHTML : "";

      if (ui.htmlModalCode) {
        ui.htmlModalCode.textContent = htmlContent.trim() || "<!-- Output container is empty -->";
      }

      if (!bootstrapModalInstance && window.bootstrap) {
        bootstrapModalInstance = new window.bootstrap.Modal(ui.htmlModal);
      }

      if (bootstrapModalInstance) {
        bootstrapModalInstance.show();
      }
    });
  }

  if (ui.btnCopyHtml) {
    ui.btnCopyHtml.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(ui.htmlModalCode.textContent);
        const originalHtml = ui.btnCopyHtml.innerHTML;
        ui.btnCopyHtml.innerHTML = `<i class="bi bi-check2 text-success me-1"></i> Copied!`;
        setTimeout(() => {
          ui.btnCopyHtml.innerHTML = originalHtml;
        }, 1800);
      } catch (error) {
        alert(`Copy HTML failed: ${error.message}`);
      }
    });
  }
};

async function initApp() {
  state.buildSpecElement = await loadBuildSpecElement();
  initMonaco(onEditorChange);
  setupEvents();
  checkSessionSpec();
}

initApp();
