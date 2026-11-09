const getGlobalRuntime = () => {
    const bindings = window.ks?.domPrimitiveBindings?.bindEvents;
    const runInstructions = window.ks?.domPrimitiveEngine?.runInstructions;

    if (typeof bindings !== "function") {
        throw new Error("domPrimitiveBindings.bindEvents is not available.");
    }

    if (typeof runInstructions !== "function") {
        throw new Error("domPrimitiveEngine.runInstructions is not available.");
    }

    return { bindings, runInstructions };
};

const createActions = () => ({
    renderComponent: (_element, args, context) => {
        context.render({
            type: args.type || context.component.type,
            data: context.data,
            columns: context.columns,
            options: args.options || context.component.options,
            targetHtmlId: args.targetHtmlId,
            classToApply: "",
            appendPosition: "replace"
        });

        return document.getElementById(args.targetHtmlId);
    },

    storeValue: (value, args, context) => {
        context.state[args.key] = value;
        return value;
    },

    setText: (value, args, context) => {
        const target = context.root.querySelector(args.selector);
        if (!target) return value;

        if (args.message !== undefined) {
            target.textContent = args.message;
        } else if (args.format === "json") {
            target.textContent = JSON.stringify({ [args.key || "value"]: value }, null, 2);
        } else {
            target.textContent = value == null ? "" : String(value);
        }

        return value;
    },

    rememberElement: (element, args, context) => {
        context.state[args.key] = element;
        return element;
    },

    clearChildren: (element) => {
        if (element && typeof element.replaceChildren === "function") {
            element.replaceChildren();
        }
        return element;
    },

    moveChildrenToRemembered: (source, args, context) => {
        const target = context.state[args.key];
        if (!target || !source || typeof source.childNodes === "undefined") {
            throw new Error(`Cannot move generated children: "${args.key}" target or source is missing.`);
        }

        target.replaceChildren(...Array.from(source.childNodes));
        return target;
    }
});

const loadJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Unable to load ${url}: ${response.status} ${response.statusText}`);
    }
    return response.json();
};

const resolveUrl = (baseUrl, relativeUrl) => new URL(relativeUrl, baseUrl).href;

const bindOperation = async ({ root, baseUrl, operation, context, runInstructions, bindEvents }) => {
    const [specs, bindings] = await Promise.all([
        loadJson(resolveUrl(baseUrl, operation.specs)),
        loadJson(resolveUrl(baseUrl, operation.bindings))
    ]);

    const configuredBindings = bindings.map((binding) => {
        const instructions = specs[binding.instructionKey];
        if (!Array.isArray(instructions)) {
            throw new Error(
                `Operation "${operation.name}" references missing instruction "${binding.instructionKey}".`
            );
        }

        return {
            ...binding,
            runner: runInstructions,
            instructions,
            clientData: context
        };
    });

    if (configuredBindings.length > 0) {
        bindEvents(root, configuredBindings);
    }
};

const runStartup = async ({ root, baseUrl, startup, context, runInstructions }) => {
    const specs = await loadJson(resolveUrl(baseUrl, startup.specs));
    const instructions = specs[startup.instructionKey];

    if (!Array.isArray(instructions)) {
        throw new Error(`Startup instruction "${startup.instructionKey}" was not found.`);
    }

    return runInstructions(root, instructions, context);
};

const startInstructionApplication = async ({
    root,
    applicationUrl,
    render,
    data,
    columns,
    component
}) => {
    const { bindings: bindEvents, runInstructions } = getGlobalRuntime();
    const application = await loadJson(applicationUrl);

    const context = {
        root,
        render,
        data,
        columns,
        component,
        state: {},
        functions: createActions()
    };

    await runStartup({
        root,
        baseUrl: applicationUrl,
        startup: application.startup,
        context,
        runInstructions
    });

    for (const operation of application.operations || []) {
        await bindOperation({
            root,
            baseUrl: applicationUrl,
            operation,
            context,
            runInstructions,
            bindEvents
        });
    }

    return context;
};

export { startInstructionApplication };
export default startInstructionApplication;
