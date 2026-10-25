import buildOptions from "json-renderers-build-table-options";

const startFunc = ({ inOptions = {}, inBase, showLog = false, returnLog = [] }) => {
    const fromOptions = buildOptions({
        options: inOptions,
        base: inBase, showLog, returnLog
    });

    return fromOptions;
};

export default startFunc;