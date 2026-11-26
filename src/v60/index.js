import instructions from "declarative-instructions";
import jsonToDom from "@keshavsoft/json-to-dom";
import registerGlobal from "./registerGlobal/index.js";
import runInstructionsSteps from "json-renderers-run-instructions-steps";
import declarativeSpec from "declarative-spec";

import resolveOptionSteps from "./runOptions/index.js";
import executeOptionSteps from "./runOptions/executeOptionSteps.js";

const normalizeOptions = (options) => {
    if (!options || typeof options !== "object") return options;

    const normalized = { ...options };

    // Legacy showSearch: true -> modern search feature block
    if (normalized.showSearch === true && !normalized.search) {
        normalized.search = {
            showLabel: true,
            showHelper: true,
            showInput: true
        };
    }

    // Legacy showSerial: true -> modern serial toggle
    if (normalized.showSerial === true && normalized.serial === undefined) {
        normalized.serial = true;
    }

    // Legacy showOptions: true -> modern row actions block
    if (normalized.showOptions === true && !normalized.options) {
        normalized.options = {
            showButton: true,
            showEditButton: true,
            showDeleteButton: true
        };
    }

    return normalized;
};

const localBuildInstructions = ({ inShowFooter, inShowBody }) => {
    let instructions = ["buildColgroup", "buildHeader"];

    if (inShowBody) {
        instructions.push("buildBody");
    };

    if (inShowFooter) {
        instructions.push("buildFooter");
    };

    return instructions;
};

const render = ({
    data,
    columns,
    options,
    targetHtmlId,
    classToApply = "",
    appendPosition = "replace",
    showLog
}) => {
    const base = structuredClone(declarativeSpec?.tableWithFooter);
    const baseSteps = localBuildInstructions({
        inShowFooter: options?.showFooter,
        inShowBody: options?.showBody
    });

    const optionsInstructions = normalizeOptions(options);

    const optionsArray = resolveOptionSteps({ options: optionsInstructions, instructions });

    const stateData = { data, columns };

    const spec = runInstructionsSteps({
        instructions: baseSteps,
        base,
        data: stateData,
        showLog
    });

    executeOptionSteps({
        optionSteps: optionsArray,
        instructions,
        state: { base: spec, data: stateData },
        spec: declarativeSpec,
        showLog
    });

    const dom = jsonToDom({
        jsonSpec: spec,
        targetHtmlId,
        appendPosition,
        classToApply,
        showLog
    });

    return dom;
};

registerGlobal(render);

export { render };

export default render;