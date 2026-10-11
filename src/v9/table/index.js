import { tableFromData } from "json-transformer-funcs";
import jsonToTag from "@keshavsoft/json-to-tag";

import spec from "./spec.json" with { type: "json" };
import table from "./table.json" with { type: "json" };

const startFunc = ({
    inTargetHtmlId,
    targetHtmlId,
    inColumns = [],
    inData = [],
    inColGroup = []
} = {}) => {
    const localTargetHtmlId = inTargetHtmlId || targetHtmlId;

    const tableSpec = tableFromData({
        inData: {
            columns: inColumns,
            rows: inData
        },
        inSpec: spec,
        inTable: table
    });

    if (Array.isArray(inColGroup) && inColGroup.length > 0) {
        const colgroupSpec = {
            tagName: "colgroup",
            children: inColGroup.map(col => {
                const width = typeof col === "string" ? col : col?.width;
                const style = typeof col === "object" ? col?.style : undefined;
                const attributes = {};

                if (style) {
                    attributes.style = style;
                } else if (width) {
                    attributes.style = `width: ${width};`;
                }

                if (typeof col === "object" && col?.class) {
                    attributes.class = col.class;
                }

                return {
                    tagName: "col",
                    ...(Object.keys(attributes).length > 0 ? { attributes } : {})
                };
            })
        };

        tableSpec.children.unshift(colgroupSpec);
    }

    const element = jsonToTag(tableSpec);

    if (localTargetHtmlId && typeof document !== "undefined") {
        const container = document.getElementById(localTargetHtmlId);
        if (container) {
            container.innerHTML = "";
            container.append(element);
        }
    }

    return element;
};

export { startFunc as renderTable };
export default startFunc;
