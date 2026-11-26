import jsonToDom from "@keshavsoft/json-to-dom";
import registerGlobal from "./registerGlobal/index.js";
import runInstructionsSteps from "json-renderers-run-instructions-steps";
import declarativeSpec from "declarative-spec";

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
    const instructions = localBuildInstructions({
        inShowFooter: options?.showFooter,
        inShowBody: options?.showBody
    });
    const spec = runInstructionsSteps({
        instructions,
        base,
        data: { data, columns },
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