import { query } from "jsonpathly";
import writePath from "json-write-path";
import { executeStep } from "json-renderers-run-instructions-steps";

const hasDestination = (state, destinationPath) => {
    if (!destinationPath?.jsonPath) return true;

    const root = state[destinationPath.fileName];
    return root !== undefined && query(root, destinationPath.jsonPath, { returnArray: true }).length > 0;
};

/**
 * Executes resolved option steps (write bundles and single-step instructions) against state.base.
 */
const executeOptionSteps = ({
    optionSteps = [],
    instructions = {},
    state,
    spec = {},
    showLog = false
} = {}) => {
    for (const stepRef of optionSteps) {
        const instructionKey = typeof stepRef === "string" ? stepRef : stepRef?.instructionKey;
        const instruction = instructions[instructionKey];
        if (!instruction) continue;

        if (!Array.isArray(instruction)) {
            executeStep(instructionKey, state, showLog);
            continue;
        }

        for (const step of instruction) {
            if (step.skipIf && query(state.base, step.skipIf, { returnArray: true }).length > 0) continue;
            if (!hasDestination(state, step.destinationPath)) continue;

            const template = spec[step.templateKey];
            if (template === undefined) {
                throw new Error(`Instruction spec not found: ${step.templateKey} (from ${instructionKey})`);
            }

            writePath(state, step.destinationPath, structuredClone(template), showLog);
            if (showLog) console.log(step.narration ?? `Ran instruction: ${instructionKey}`);
        }
    }

    return state.base;
};

export { executeOptionSteps };
export default executeOptionSteps;
