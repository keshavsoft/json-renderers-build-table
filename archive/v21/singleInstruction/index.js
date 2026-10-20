import { resolvePath } from "json-transformer-funcs";
import writePath from "../writePath/index.js";
import checkInstruction from "../guards/index.js";

const runSingleInstruction = (instruction, registry, functions, spec, showLog, returnLog) => {
    if (!checkInstruction(instruction, functions, spec, showLog, returnLog)) return;
    const source = resolvePath(registry, instruction.sourcePath);
    const result = functions[instruction.func](source, spec[instruction.templateKey]);
    writePath(registry, instruction.destinationPath, result);
};

const runSingleInstructions = (instructions, registry, functions, spec, showLog, returnLog) => {
    instructions.forEach(instruction => {
        runSingleInstruction(instruction, registry, functions, spec, showLog, returnLog);
    });
};

export { runSingleInstruction, runSingleInstructions };
export default runSingleInstructions;
