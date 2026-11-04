import writePath from "../writePath/index.js";
import checkInstruction from "../guards/index.js";

const runDoubleInstruction = (instruction, registry, functions, spec, showLog, returnLog) => {
    if (!checkInstruction(instruction, functions, spec, showLog, returnLog)) return;
    const result = functions[instruction.func](
        registry.data.columns,
        registry.data.data,
        spec
    );
    writePath(registry, instruction.destinationPath, result);
};

const runDoubleInstructions = (instructions, registry, functions, spec, showLog, returnLog) => {
    instructions.forEach(instruction => {
        runDoubleInstruction(instruction, registry, functions, spec, showLog, returnLog);
    });
};

export { runDoubleInstruction, runDoubleInstructions };
export default runDoubleInstructions;
