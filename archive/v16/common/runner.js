import {
    fromCollection, tableBody, buildBody,
    findByRole, resolvePath, applyTemplate
} from "json-transformer-funcs";
import writePath from "./writePath.js";

const functions = {
    fromCollection,
    tableBody,
    buildBody,
    applyTemplate: (inSource, inTemplate) => applyTemplate(inTemplate, inSource)
};

export const runInstructions = ({ inInstructions, inRegistry }) => {
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

export { findByRole, buildBody };
export default runInstructions;
