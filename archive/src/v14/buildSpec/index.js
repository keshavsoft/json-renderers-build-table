import {
    fromCollection, tableBody, buildBody,
    findByRole, resolvePath, applyTemplate
} from "json-transformer-funcs";

import spec from "../spec.json" with { type: "json" };
import base from "./config/base.json" with { type: "json" };

import columnInstructions from "./config/columnInstructions.json" with { type: "json" };
import rowInstructions from "./config/rowInstructions.json" with { type: "json" };
import serialInstructions from "./config/serialInstructions.json" with { type: "json" };
import optionsInstructions from "./config/optionsInstructions.json" with { type: "json" };

import writePath from "./writePath/index.js";

const functions = {
    fromCollection,
    tableBody,
    buildBody,
    applyTemplate: (inSource, inTemplate) => applyTemplate(inTemplate, inSource)
};

const runInstructions = ({ inInstructions, inRegistry }) => {
    const localInstructions = inInstructions;
    const localRegistry = inRegistry;

    localInstructions.forEach(instruction => {
        const source = resolvePath(localRegistry, instruction.sourcePath);

        if (source) {
            const result = functions[instruction.func](source, localRegistry.spec[instruction.templateKey]);
            writePath({
                inRegistry: localRegistry,
                inPath: instruction.destinationPath,
                inValue: result
            });
        }
    });
};

const buildSpec = ({ inConfig }) => {
    const localConfig = inConfig;

    const localBase = structuredClone(base);
    const localSpec = structuredClone(spec);

    // Determine whether to render the footer
    const hasFooterDisabled = localConfig?.options?.showFooter === false
        || localConfig?.options?.footer === false
        || localConfig?.showFooter === false
        || localConfig?.footer === false;
    const showFooter = !hasFooterDisabled;

    if (!showFooter) {
        localBase.children = localBase.children.filter(child => child.tagName !== "tfoot");
    }

    // Default template.bodyCell to buildBodyCell if omitted
    const normalizedColumns = (localConfig?.columns || []).map(col => {
        const colCopy = structuredClone(col);
        colCopy.template = {
            bodyCell: "buildBodyCell",
            ...(colCopy.template || {})
        };
        return colCopy;
    });

    // Support explicit serial object or options.showSerial boolean
    const hasSerial = Boolean(localConfig?.serial || localConfig?.options?.showSerial);
    const serialConfig = localConfig?.serial || (hasSerial ? {
        col: { width: "50px" },
        header: { columnName: "#" },
        body: {},
        footer: {}
    } : null);

    const buildData = {
        ...localConfig,
        columns: normalizedColumns,
        ...(serialConfig ? { serial: serialConfig } : {})
    };

    const registry = {
        data: buildData,
        base: localBase,
        spec: localSpec
    };

    // 1. Build row containers in tbody
    runInstructions({
        inInstructions: rowInstructions,
        inRegistry: registry
    });

    // 2. Build column group, header, and optional footer
    const activeColumnInstructions = showFooter
        ? columnInstructions
        : columnInstructions.filter(inst => inst.templateKey !== "buildFooter");

    runInstructions({
        inInstructions: activeColumnInstructions,
        inRegistry: registry
    });

    // 3. Build body cells for each row
    const tbodyElement = findByRole(localBase, "table-body");
    if (tbodyElement && Array.isArray(tbodyElement.children)) {
        buildBody(tbodyElement.children, buildData, localSpec);
    }

    // 4. Optional serial column
    if (serialConfig) {
        const activeSerialInstructions = showFooter
            ? serialInstructions
            : serialInstructions.filter(inst => inst.destinationPath?.dataRole !== "table-footer-row");

        runInstructions({
            inInstructions: activeSerialInstructions,
            inRegistry: registry
        });
    }

    // 5. Optional action/options column
    if (localConfig?.options && typeof localConfig.options === "object" && localConfig.options.header) {
        const activeOptionsInstructions = showFooter
            ? optionsInstructions
            : optionsInstructions.filter(inst => inst.destinationPath?.dataRole !== "table-footer-row");

        runInstructions({
            inInstructions: activeOptionsInstructions,
            inRegistry: registry
        });
    }

    return localBase;
};

// Wrapper supporting both { inConfig } and direct object argument
const startFunc = (input) => {
    const localInput = (input && typeof input === "object" && "inConfig" in input)
        ? input.inConfig
        : input;

    return buildSpec({ inConfig: localInput });
};

export default startFunc;
