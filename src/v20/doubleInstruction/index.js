import writePath from "../writePath/index.js";

const runDoubleInstruction = (instruction, registry, functions, spec) => {
    const result = functions[instruction.func](
        registry.data.columns,
        registry.data.data,
        spec
    );
    writePath(registry, instruction.destinationPath, result);
};

const runDoubleInstructions = (instructions, registry, functions, spec) => {
    instructions.forEach(instruction => {
        runDoubleInstruction(instruction, registry, functions, spec);
    });
};

export { runDoubleInstruction, runDoubleInstructions };
export default runDoubleInstructions;
