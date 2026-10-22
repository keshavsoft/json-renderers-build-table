export const SAMPLE_TABLE_SPEC = {
  tagName: "div",
  classList: "card shadow-sm border rounded overflow-hidden",
  children: [
    {
      tagName: "table",
      classList: "table table-hover mb-0",
      children: [
        {
          tagName: "thead",
          classList: "table-dark",
          children: [
            {
              tagName: "tr",
              children: [
                { tagName: "th", classList: "py-3 px-4", textContent: "itemName" },
                { tagName: "th", classList: "py-3 px-4", textContent: "baseUnit" },
              ],
            },
          ],
        },
        {
          tagName: "tbody",
          children: [
            {
              tagName: "tr",
              children: [
                { tagName: "td", classList: "py-2 px-4", textContent: "0.09/30mm" },
                { tagName: "td", classList: "py-2 px-4", textContent: "kgs" },
              ],
            },
            {
              tagName: "tr",
              children: [
                { tagName: "td", classList: "py-2 px-4", textContent: "0.11-25" },
                { tagName: "td", classList: "py-2 px-4", textContent: "kgs" },
              ],
            },
            {
              tagName: "tr",
              children: [
                { tagName: "td", classList: "py-2 px-4", textContent: "0.11-30" },
                { tagName: "td", classList: "py-2 px-4", textContent: "kgs" },
              ],
            },
            {
              tagName: "tr",
              children: [
                { tagName: "td", classList: "py-2 px-4", textContent: "0.12/40mm" },
                { tagName: "td", classList: "py-2 px-4", textContent: "kgs" },
              ],
            },
            {
              tagName: "tr",
              children: [
                { tagName: "td", classList: "py-2 px-4", textContent: "1.00/50mm" },
                { tagName: "td", classList: "py-2 px-4", textContent: "mtr" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const SAMPLE_CARD_SPEC = {
  tagName: "div",
  classList: "card p-4 shadow-sm bg-white border",
  children: [
    {
      tagName: "div",
      classList: "d-flex justify-content-between align-items-center mb-3",
      children: [
        { tagName: "h4", classList: "text-primary fw-bold mb-0", textContent: "Sample Specification" },
        { tagName: "span", classList: "badge bg-success-subtle text-success border border-success-subtle", textContent: "Rendered Component" },
      ],
    },
    {
      tagName: "p",
      classList: "text-muted small mb-3",
      textContent: "This component was rendered directly from a JSON specification using buildSpecElement.",
    },
    {
      tagName: "div",
      classList: "mb-3",
      children: [
        {
          tagName: "label",
          classList: "form-label small fw-semibold text-secondary",
          textContent: "Sample Input Field",
        },
        {
          tagName: "input",
          classList: "form-control form-control-sm",
          attributes: { type: "text", placeholder: "Type something...", value: "Pre-filled text" },
        },
      ],
    },
    {
      tagName: "div",
      classList: "d-flex gap-2",
      children: [
        {
          tagName: "button",
          classList: "btn btn-primary btn-sm px-3",
          textContent: "Submit Action",
          attributes: { type: "button" },
        },
        {
          tagName: "button",
          classList: "btn btn-outline-secondary btn-sm px-3",
          textContent: "Reset",
          attributes: { type: "button" },
        },
      ],
    },
  ],
};
