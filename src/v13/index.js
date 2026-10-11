import { collectionFromKey } from "json-transformer-funcs";
import jsonToTag from "@keshavsoft/json-to-tag";

import spec from "./spec.json" with { type: "json" };
import table from "./table.json" with { type: "json" };

const render = ({
    targetHtmlId,
    columns = [],
    data = [],
    colGroup = []
} = {}) => {
    const localTargetHtmlId = targetHtmlId;
    const localColumns = columns;
    const localData = data;
    const localColGroup = colGroup;

    // const tableSpec = tableFromData({
    //     inData: {
    //         columns: localColumns,
    //         rows: localData
    //     },
    //     inSpec: spec,
    //     inTable: table
    // });

    const localHead = collectionFromKey(localColumns, spec.buildHeader);

    const thead = table.children.find(child => child.tagName === "thead");
    // const tbody = table.children.find(child => child.tagName === "tbody");

    thead.children[0].children = localHead;
    // tbody.children = localBody;

    const element = jsonToTag(table);

    if (localTargetHtmlId && typeof document !== "undefined") {
        const container = document.getElementById(localTargetHtmlId);
        if (container) {
            container.innerHTML = "";
            container.append(element);
        }
    }

    return element;
};

const buildSpec = ({
    columns = [],
    data = [],
    colGroup = []
} = {}) => {
    const localColumns = columns;
    const localData = data;
    const localColGroup = colGroup;

    const localHead = collectionFromKey(localColumns, spec.buildHeader);

    const thead = table.children.find(child => child.tagName === "thead");
    // const tbody = table.children.find(child => child.tagName === "tbody");

    thead.children[0].children = localHead;
    // tbody.children = localBody;

    return table;
};

export { render, render as renderTable, buildSpec };
export default render;

