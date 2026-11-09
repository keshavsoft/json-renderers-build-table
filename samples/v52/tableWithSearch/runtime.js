const getNested = (object, path) => path.split(".").reduce((value, key) => value?.[key], object);

const initializeInstructionBindings = ({ root, bindings, instructions, actions }) => {
    const configuredBindings = bindings.map((binding) => {
        const instructionList = getNested(instructions, binding.instructionKey);
        const action = actions[binding.action];

        if (!Array.isArray(instructionList)) {
            throw new Error(`Instruction not found: ${binding.instructionKey}`);
        }
        if (typeof action !== "function") {
            throw new Error(`Action not found: ${binding.action}`);
        }

        return {
            event: binding.event,
            selector: binding.selector,
            ...(binding.root ? { root: binding.root } : {}),
            runner: window.ks.domPrimitiveEngine.runInstructions,
            instructions: instructionList,
            onExtract: action
        };
    });

    return window.ks.domPrimitiveBindings.bindEvents(root, configuredBindings);
};

export { initializeInstructionBindings };
export default initializeInstructionBindings;
