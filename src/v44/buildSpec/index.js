import jsonRenderBuild from "json-renderers-specs";

// --- Story of Spec Build ---
const startFunc = ({
    inColumns,
    inType = "table",
    inData,
    inShowLog = false,
    inOptions
} = {}) => {
    const localData = inData ?? [];
    const localColumns = inColumns;
    const localType = inType;
    const localShowLog = inShowLog;
    const localOptions = inOptions;

    const specAsJsonToDom = jsonRenderBuild({
        type: localType,
        data: localData,
        columns: localColumns,
        showLog: localShowLog,
        options: localOptions
    });

    return specAsJsonToDom;
};

export default startFunc;