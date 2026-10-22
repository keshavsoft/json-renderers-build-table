import { ui, state } from "./elements.js";
import { getEditorValue, setEditorValue, updateLineCountBadge } from "./editor.js";

export function clearError() {
  if (ui.errorAlert) {
    ui.errorAlert.classList.add("d-none");
  }

  if (ui.errorMessage) {
    ui.errorMessage.textContent = "";
  }
}

export function showError(message) {
  if (ui.errorMessage) {
    ui.errorMessage.textContent = message;
  }

  if (ui.errorAlert) {
    ui.errorAlert.classList.remove("d-none");
  }
}

export function renderSpec({ inSpec, inFileName, buildSpecElement }) {
  const localSpec = inSpec;
  const localFileName = inFileName ?? state.currentFileName ?? "spec.json";
  state.currentFileName = localFileName;

  clearError();

  try {
    if (!buildSpecElement) {
      showError("buildSpecElement function is not loaded. Check network or local scripts.");
      return;
    }

    sessionStorage.setItem("json_to_tag_active_spec", JSON.stringify(localSpec));
    sessionStorage.setItem("json_to_tag_active_name", localFileName);

    if (ui.activeFileNameBadge) {
      ui.activeFileNameBadge.innerHTML = `<i class="bi bi-file-earmark-check text-primary me-1"></i>${localFileName}`;
    }

    if (ui.outputContainer) {
      ui.outputContainer.innerHTML = "";
    }

    const rendered = buildSpecElement({ inSpec: localSpec });

    if (rendered) {
      if (Array.isArray(rendered)) {
        ui.outputContainer.append(...rendered);
      } else if (rendered instanceof Node && ui.outputContainer) {
        ui.outputContainer.appendChild(rendered);
      }
    }

    const domCount = ui.outputContainer ? ui.outputContainer.querySelectorAll("*").length : 0;

    if (ui.nodesCountBadge) {
      ui.nodesCountBadge.textContent = `${domCount} DOM Nodes`;
    }

    if (ui.syncDot) {
      ui.syncDot.className = "sync-indicator synced";
    }

    if (ui.syntaxStatusText) {
      ui.syntaxStatusText.textContent = "Live Rendered";
    }

    if (ui.syntaxStatusBadge) {
      ui.syntaxStatusBadge.className = "badge bg-success-subtle text-success border border-success-subtle small px-2 py-1";
    }
  } catch (error) {
    showError(error.message || String(error));

    if (ui.syncDot) {
      ui.syncDot.className = "sync-indicator error";
    }

    if (ui.syntaxStatusText) {
      ui.syntaxStatusText.textContent = "Render Error";
    }

    if (ui.syntaxStatusBadge) {
      ui.syntaxStatusBadge.className = "badge bg-danger-subtle text-danger border border-danger-subtle small px-2 py-1";
    }

    console.error("DOM Rendering Error:", error);
  }
}

export function parseAndRenderEditorContent({ buildSpecElement }) {
  const content = getEditorValue().trim();
  updateLineCountBadge(content);

  if (!content) {
    if (ui.outputContainer) {
      ui.outputContainer.innerHTML = `
        <div class="empty-render-state" id="emptyPlaceholder">
          <i class="bi bi-cloud-arrow-up empty-render-icon"></i>
          <h5 class="fw-semibold text-secondary">No Output to Display</h5>
          <p class="small text-muted mb-0">Select or upload a JSON file to render the output here.</p>
        </div>
      `;
    }

    if (ui.nodesCountBadge) {
      ui.nodesCountBadge.textContent = "0 DOM Nodes";
      ui.nodesCountBadge.className = "badge bg-light text-secondary border fw-normal";
    }

    if (ui.activeFileNameBadge) {
      ui.activeFileNameBadge.innerHTML = `<i class="bi bi-file-earmark me-1"></i>No file loaded`;
    }

    if (ui.syncDot) {
      ui.syncDot.className = "sync-indicator";
      ui.syncDot.style.backgroundColor = "#94a3b8";
    }

    if (ui.syntaxStatusText) {
      ui.syntaxStatusText.textContent = "Ready";
    }

    if (ui.syntaxStatusBadge) {
      ui.syntaxStatusBadge.className = "badge bg-light text-secondary border small px-2 py-1";
    }

    clearError();
    return;
  }

  try {
    const parsed = JSON.parse(content);
    clearError();
    renderSpec({ inSpec: parsed, inFileName: state.currentFileName, buildSpecElement });
  } catch (error) {
    if (ui.syncDot) {
      ui.syncDot.className = "sync-indicator error";
    }

    if (ui.syntaxStatusText) {
      ui.syntaxStatusText.textContent = "Syntax Error";
    }

    if (ui.syntaxStatusBadge) {
      ui.syntaxStatusBadge.className = "badge bg-danger-subtle text-danger border border-danger-subtle small px-2 py-1";
    }

    showError(`Invalid JSON syntax: ${error.message}`);
  }
}

export function loadSpecIntoEditor(specObj, fileName, buildSpecElement) {
  const formatted = JSON.stringify(specObj, null, 2);
  state.currentFileName = fileName || "spec.json";
  setEditorValue(formatted);
  renderSpec({ inSpec: specObj, inFileName: state.currentFileName, buildSpecElement });
}
