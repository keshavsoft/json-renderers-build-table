import { resolvePath } from "json-transformer-funcs";
import writePath from "../writePath/index.js";

const runSingleInstruction = (instruction, registry, functions, spec) => {
    const source = resolvePath(registry, instruction.sourcePath);
    const result = functions[instruction.func](source, spec[instruction.templateKey]);
    writePath(registry, instruction.destinationPath, result);
};

const runSingleInstructions = (instructions, registry, functions, spec) => {
    instructions.forEach(instruction => {
        runSingleInstruction(instruction, registry, functions, spec);
    });
};

export { runSingleInstruction, runSingleInstructions };
export default runSingleInstructions;
